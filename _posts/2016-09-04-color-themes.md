---
layout: post
title:  "¡Colors and Commands!"
short_description: "Want this site's color scheme? Now we can!"
description: |
    This site is based on a terminal color scheme I made inside
    a Trough of Disillusionment while redesigning this site. I
    was feeling stuck on the design when a lightbulb lit.
    Why not a terminal Website?  Here we are.  It comes with an
    invite to add new and awesome commands to this site, and
    payment in the form of the color schemes for several terminal
    emulators and Emacs.
img: /img/posts/colors.jpg
---

This site is based on a terminal color scheme I made inside a *Trough
of Disillusionment* while redesigning this site. I was feeling stuck
on the design when a lightbulb lit. Why not a terminal Website?
Here we are.  It comes with an invite to add new and awesome commands
to this site, and payment in the form of the color schemes for several
terminal emulators and Emacs.  First up, the "gift":

## Clipped Compound Color Scheme

I'm all about collaboration and open source tasties. So, PRs to these themes can be done
directly to this site at the
[carsongee.github.io repo](github.com/carsongee/carsongee.github.io/tree/master/files/posts/clipped-compound).
It was blast making them, and I'd highly recommend making your own.  I
used [terminal.sexy](http://terminal.sexy) for making the terminal
schemes and
[Emacs Theme Creator](http://emacs-theme-creator.appspot.com/) for
making the emacs theme.  Very nice.

Without further adieu:

- [Emacs Theme (24.x+)](/files/posts/clipped-compound/cg-cc0-theme.el)
- [Gnome Terminal](/files/posts/clipped-compound/cg-cc0.gnome.sh)
- [iTerm](/files/posts/clipped-compound/cg-cc0.itermcolors)
- [Konsole](/files/posts/clipped-compound/cg-cc0.konsole.coloscheme)
- [Terminal.app (built-in Mac terminal)](/files/posts/clipped-compound/cg-cc0.terminal)

and now the "ask":

## Make New Commands

So I've implemented quite a few of your basic folder walking commands
(and a few `secret` commands), but I'd really love to see some new
ones added, no matter how silly.  In fact the sillier the betterer.
So, if you have a command you want to add, it is pretty easy, just
submit a pull request to this
[site repo](https://github.com/carsongee/carsongee.github.io), by just
adding another key and function to the
[commands object](https://github.com/carsongee/carsongee.github.io/blob/master/js/index.js#L27-L106). Or...or...if
you want to a super-de-duper secret version, add something to the
[`unpublishedCommands` object](https://github.com/carsongee/carsongee.github.io/blob/master/js/index.js#L107-L138).
