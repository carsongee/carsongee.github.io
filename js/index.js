---
---
'use strict';
var dirs = {
  {% for page in site.pages %}
    {% if page.title and page.description %}
      {{ page.url | jsonify }}: {
        title: {{ page.title | jsonify }},
        url: {{ page.url | jsonify }},
        description: {{ page.description | jsonify }}
      },
    {% endif %}
  {% endfor %}
}
var current_dir = {{ page.url | jsonify }}

function handleCommand(cmd) {
  var commands = {
    cd: function(args) {
      var strArgs = args.join(' ');
      if (strArgs === "'San Diego'") {
        window.location = 'https://www.lajolla.com/';
        return 'Here we go!';
      };
      if (strArgs === '.' || strArgs === './') {
        location.reload();
        return '';
      }
      if (strArgs === '..' || strArgs === '../') {
        window.location = '../';
        return 'Changing directory';
      }
      // Find if it is a valid directory
      $.each(dirs, function(key, value) {
        if (
            key.indexOf(strArgs) > -1 ||
            value.title.indexOf(strArgs) > -1
        ) {
          window.location = value.url;
          return 'Changing directory';
        }
        });
      return 'No such directory';
    },
    clear: function() {
      $('#typein').html('');
      return '';
    },
    exit: function() {
      return "You really think I'd let you go that easy?";
    },
    help: function() {
      var commandStr = '<ul>';
      $.each(this, function(key){
        commandStr += '<li>' + key + '</li>';
      });
      commandStr += '<ul>'; 
      return 'Available commands: ' + commandStr;
    },
    ls: function() {
      var commandStr = 'Here are the folders: <ul>';
      $.each(dirs, function(key, value) {
        if (value.url === current_dir) return;
        commandStr += '<li><a href="' + value.url + '">' +
          value.url + '</a> - [' + value.title + '] ' +
          value.description + '</li>';
      });
      return commandStr;
    }
  }
  var unpublishedCommands = {
    'grep': function(args) {
      switch (args[0]) {
      case 'love':
      case "'love'":
        return 'Love is all you need';
      case 'jobs':
        return 'Go grep them yourself. :-\\ ';
      default:
        return "I don't know how to grep that"
      }
    }
  }
  var args = cmd.split(' ');
  if (args[0] in commands) return commands[args[0]](args.slice(1));
  if (args[0] in unpublishedCommands) {
    return unpublishedCommands[args[0]](args.slice(1));
  }
  return 'How could you not get a right command? But also, maybe try help?';
}

function promptHandler() {
  var x = window.scrollX, y = window.scrollY;
  $('.prompt-input').last().focus();
  window.scrollTo(x, y);
  $('.current-prompt').on('click', function() {
    $(this).find('.prompt-input').focus();
  });
  $('.prompt-input').last().on('keypress', function(event) {
    if (event.which === 13) {
      $(this).attr('disabled', 'disabled');
      var content = $(this).parent().parent();
      var clone = $(this).parent().clone(true);
      content.append('<br /><p>' + handleCommand($(this).val()) + '</p>');
      var cloneInput = clone.find('.prompt-input');
      cloneInput.removeAttr('disabled');
      cloneInput.val('');
      clone.appendTo(content);
      cloneInput.focus();
    }
  });
}

function fadeIn() {
  var i = 0;
  var isTag, text;
  var str = $('#content').html();
  (function type() {
    i = i + 15;
    text = str.slice(0, i);
    $('#typein').html(text);
    if (text === str) {
      $('#content').remove();
      promptHandler();
      return;
    }
    setTimeout(type, 10);
  }());
}
fadeIn();
