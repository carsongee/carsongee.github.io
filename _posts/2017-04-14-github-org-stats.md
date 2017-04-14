---
layout: post
title:  "Github Organization Statistics Script"
short_description: "A script for getting github stats for people in an organization"
description: |
    I got curious about how much code/commits/repos I've contributed
    to at my current gig, and I couldn't find anything else out there,
    so I pulled together a script for getting contributor statistics for
    a specified organization on Github.
    Octocat by <a href="https://github.com/jeejkang">jeejkang</a>.
img: /img/posts/privateinvestocat.jpg
---

All you'll generally need to is to have a github username and
password, run `pip install PyGithub` and then you can run the
[script](https://github.com/carsongee/junk/blob/master/shell/github_org_stats.py):
{% gist carsongee/0c57c3ad4dc0df2e71273f0ed837febd %}
