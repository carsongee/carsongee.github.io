---
layout: post
title:  "Zenoss HipChat!"
short_description: 'zenoss-hipchat'
description: |
  I recently created a command line script for sending Zenoss alerts
  to HipChat for knowing when things are going wrong in my
  infrastructure. I've now made it available as an open source
  installable.

img: /img/posts/zenoss_hipchat.jpg
---

For the last year or so at work we have been using
[HipChat](https://hipchat.com) for team communication and
collaboration.  It has been a really great product to use for the most
part thanks to a lot of integrations and a really simple
[API](https://www.hipchat.com/docs/api").  As result it is really
enjoyable and useful.  So far I've written a chat bot for it named
[Dr. Heinz Doofenshmirtz](https://github.com/mitodl/doof) and added
integrations into it for [ZenDesk](https://zendesk.com),
[GitHub](https://github.com), [Trello](https://trello.com), and
[iDoneThis](https://idonethis.com)

Thanks to this long weekend though, I took some of my spare time to
write an integration for my favorite system monitoring system
[Zenoss](https://zenoss.com).  It allows you to send chat
notifications of events to HipChat rooms, and even does color coding
based on the severity of the events.  You can check it out at the
GitHub project I started for it at
https://github.com/carsongee/zenoss-hipchat.  There is a quickstart
guide there for how to get it running on your Zenoss server (or just
test it out locally).  I also added it to the
[Cheese Shop/PyPi](https://pypi.python.org/pypi/zenoss-hipchat)
