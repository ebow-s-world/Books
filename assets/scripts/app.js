'use strict'

const bookEvents = require('./books/events.js')
const ui = require('./books/ui.js')

$(() => {
  $('#getBooksButton').on('click', bookEvents.onIndexBooks)
  $('#clearBooksButton').on('click', ui.clearBooks)
})
