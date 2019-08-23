# [pixyzehn.com](http://pixyzehn.com)

[![Build Status](https://travis-ci.org/pixyzehn/pixyzehn.com.svg?branch=master)](https://travis-ci.org/pixyzehn/pixyzehn.com)

## Requirements

- [Bundler](https://bundler.io)
- [Yarn](https://yarnpkg.com)
- [Jekyll](https://jekyllrb.com)

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
