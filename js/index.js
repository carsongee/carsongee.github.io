---
---
'use strict';
var fortuneCache;
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
var log_dirs = {
  {% for post in site.posts %}
  {{ post.url | jsonify }}: {
    title: {{ post.title | jsonify }},
    url: {{ post.url | jsonify }},
    description: {{ post.short_description | jsonify }}
  },
  {% endfor %}
}

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
      $.each($.extend(true, dirs, log_dirs), function(key, value) {
        console.log(key.slice(0, -1));
        if (
            key === strArgs ||
            key.slice(0, -1) === strArgs ||
            key.slice(1, -1) === strArgs ||
            key.slice(1) === strArgs ||
            value.title === strArgs
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
      commandStr += '<li><a href="./">.</li>'
      commandStr += '<li><a href="../">..</li>'
      $.each(dirs, function(key, value) {
        if (value.url !== window.location.pathname) {
          commandStr += '<li><a href="' + value.url + '">' +
            value.url + '</a> - [' + value.title + '] ' +
            value.description + '</li>';
        }
        // Handle special case of posts
        if (value.url === '/log/') {
          commandStr += '<ul>'
          $.each(log_dirs, function(key, value) {
            commandStr += '<li><a href="' + value.url + '">' +
              value.url + '</a> - [' + value.title + '] ' +
              value.description + '</li>';
          });
          commandStr += '</ul>'
        }

      });
      return commandStr;
    },
    fortune: function() {
      if (fortuneCache === undefined)  {
        $.ajax( {url: "data/fortune.txt", async: false})
          .done(function(data) {
            fortuneCache = data.split('\n');
          });
      }
      return fortuneCache[Math.floor(Math.random() * fortuneCache.length)]
    },
    source: function(args) {
      switch (args[0]) {
      case 'god-mode':
      case 'godmode':
      case 'god':
      case 'God':
      case 'WhosYourDaddy':
        $('#bg-img').empty();
        $('link[rel="stylesheet"]').attr('href','{{ "/css/god.css" | prepend: site.baseurl }}');
        $('body').append('<div class="theme-footer"></div>');
        Cookies.set('theme', 'god');
        return 'Get over here!';
      case 'default':
        $('link[rel="stylesheet"]').attr('href','{{ "/css/main.css" | prepend: site.baseurl }}');
        $('div.theme-footer').remove();
        Cookies.remove('theme');
        return 'Safe Mode Activated!';
      default:
        return args[0] + ': No such file or directory';

      }
    }
  }
  var unpublishedCommands = {
    grep: function(args) {
      switch (args[0]) {
      case 'love':
      case "'love'":
        return 'Love is all you need';
      case 'jobs':
        return 'Go grep them yourself. :-\\ ';
      default:
        return "I don't know how to grep that"
      }
    },
    sl: function() {
      var sl = $('<div id="sl-overlay"></div>');
      var train_num = Math.random() * 10000 % 10|0;
      var train = $(
        '<div id="sl-mover">' +
          '<a href="http://heathersanimations.com/trainsthree.html">' +
          '<img src="/img/train' + train_num + '.gif" /></a>' +
          '</div>'
      );
      sl.appendTo($('body'));
      train.appendTo(sl);
      train.animate({
        right: '100%'
      }, 10000, function() {
        sl.remove();
      });
      return "That's what you get for an ls typo";
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
  var increment = 15
  var i = 0;
  var isTag, text;
  var str = $('#content').html();
  if (str.indexOf('class="gist"') > 0) increment = 400;
  (function type() {
    i = i + increment;
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

function setTheme(theme) {
  if( theme !== undefined) {
    handleCommand('source ' + theme);
  }
}

function setNavigation(nav) {
  var linkedNav = '/';
  $.each(nav, function(index, value) {
    linkedNav += '<a href="/' + nav.slice(0, index + 1).join('/') + '">' + value + '</a>/';
  });
  return linkedNav
}

setTheme(Cookies.get('theme'));
var newNav = setNavigation($('#nav-path').html().split('/').filter(function(el) {return el.length != 0}));
$('#nav-path').html(newNav);
fadeIn();
