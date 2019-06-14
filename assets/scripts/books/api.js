'use strict'

const config = require('../config.js')

const loadBooks = () => {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET'
  })
}

module.exports = {
  loadBooks
}
