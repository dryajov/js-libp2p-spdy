/* eslint-env mocha */
'use strict'

const tests = require('interface-stream-muxer')
const spdy = require('../src')

describe('compliance', () => {
  tests({
    setup (cb) {
      cb(null, spdy)
    },
    teardown (cb) {
      cb()
    }
  })
})
