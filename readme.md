## Introduction
This repo contains code for `senthilbalajiganesa/q-links` docker image. This app is simple application to create quick links in your local. Bookmarks are ok when you are accessing a url not very often. when you wanted to access a long url very often, `q-links` (Quick links) could be of some help.

This app, will run on your local and exposes a server which will allow you to set up some kinda key value map of your `shortcut key` to the `long url` which will make it easy to access.

## Steps to use the app
1. open browser
2. type `q/gh` as url
3. redirects to `q/edit/gh`
4. add a url you wanted to access when you access `gh`
5. try to access `q/gh` again, the mapped url will be automatically redirected


## Setup
1. Make sure `docker` is installed
2. Run `docker run -d -p 80:80 senthilbalajiganesan/q-links`
3. Run `curl -o- https://gist.githubusercontent.com/sbbeez/7d5a0ff747303024776301fcdd9576bc/raw/e89fe3bf9eda7ddca06eb99db33fbbdf9ffbc09a/q-links-setup.sh | bash`
4. All set start using the app!!!