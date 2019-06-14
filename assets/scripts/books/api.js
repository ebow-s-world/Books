'use strict'

const config = require('../config.js')

const indexBooks = () => {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET'
  })
}

module.exports = {
  indexBooks
}
