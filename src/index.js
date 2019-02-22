'use strict'

require('babel-polyfill')
var App = require('./app.js')

var app = new App({})
var element = document.getElementById('akc-editor')
element.appendChild(app.render())

app.init() // @TODO: refactor to remove
