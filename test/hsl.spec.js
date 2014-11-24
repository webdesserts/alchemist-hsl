var expect = require('chai').expect
var Alchemist = require('alchemist-js')
var hsl = require('../index.js')

describe('hsl', function () {
  var alchemist

  before(function () {
    alchemist = Alchemist.create()
    alchemist.use(hsl())
    alchemist.use({ name: 'rgb', to: {} })
  })

  it('to rgb', function () {
    expect(alchemist.hsl([173, 55, 42]).rgb()).to.deep.eq([48.195, 166.005, 152.2605])
  })

  it('from rgb', function () {
    expect(alchemist.rgb([48, 166, 152]).hsl()).to.deep.eq([172.8814, 55.1402, 41.9608])
  })
})
