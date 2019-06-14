'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onIndexBooks = () => {
  api.indexBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure)
}

module.exports = {
  onIndexBooks
}
