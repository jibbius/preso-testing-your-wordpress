// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  classes = require('bespoke-classes'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  progress = require('bespoke-progress'),
  state = require('bespoke-state'),
  forms = require('bespoke-forms');

// Bespoke.js
bespoke.from('article', [
  classes(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  scale(),
  progress(),
  state(),
  forms()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

