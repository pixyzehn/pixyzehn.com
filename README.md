# [pixyzehn.com](http://pixyzehn.com)

[![Build Status](https://travis-ci.org/pixyzehn/pixyzehn.com.svg?branch=master)](https://travis-ci.org/pixyzehn/pixyzehn.com)
[![Gihub Issue](https://img.shields.io/github/issues/pixyzehn/pixyzehn.com.svg)](https://github.com/pixyzehn/pixyzehn.com/issues)
[![Web Site](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://pixyzehn.com/)

Subscribe via [RSS](https://pixyzehn.com/feed.xml).

## Requirements

- [Bundler](https://bundler.io)
- [Yarn](https://yarnpkg.com)
- [Jekyll](https://jekyllrb.com)
- [Danger](http://danger.systems/)

## Installation

```bash
$ git clone https://github.com/pixyzehn/pixyzehn.com.git
$ cd pixyzehn.com/
$ bundle install
$ yarn install
```

## Build

```bash
$ bundle exec jekyll build
```

## Preview

```bash
$ bundle exec jekyll serve
```

You can see the site locally. [http://localhost:4000](http://localhost:4000)  
And the admin is here. [http://localhost:4000/admin](http://localhost:4000/admin)

## Draft

Create a new post in `_drafts` locally. (NOTE: Added `_drafts` in `.gitginore`.)

```bash
$ bundle exec jekyll build --future --drafts --watch
```

## License

Code is open sourced under the [MIT license](LICENSE.md).

Content is released under a [Creative Commons BY-NC License](http://creativecommons.org/licenses/by-nc/4.0/).
