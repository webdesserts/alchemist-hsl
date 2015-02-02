var expect = require('chai').expect
var Alchemist = require('alchemist-js')
var hsl = require('../index.js')

describe('hsl', function () {
  var alchemist, rgb;

  before(function () {
    alchemist = Alchemist.create({ precision: 4, limits: 'nullify' })
    rgb = { name: 'rgb', to: {} }
    alchemist.use(hsl())
    alchemist.use(rgb)
  })

  describe('limits', function () {
    var clipper
    before(function () {
      clipper = Alchemist.create({ precision: 4, limits: 'clip' })
      clipper.use(hsl())
      clipper.use(rgb)
    })
    it('should clip anything over [360, 1, 1]', function () {
      expect(clipper.hsl(361, 1.1, 1.1).value).to.deep.eq([360, 1, 1])
    })
    it('should clip anything under [0, 0, 0]', function () {
      expect(clipper.hsl(-1, -0.2, -0.1).value).to.deep.eq([0, 0, 0])
    })
  })

  describe('to rgb', function () {
    it('should convert', function () {
      expect(alchemist.hsl(173, .55, .42).rgb()).to.deep.eq([48.19, 166, 152.3])
    })
    it('handles greys correctly', function () {
      expect(alchemist.hsl(0, 0, .2).rgb()).to.deep.eq([51, 51, 51])
    })
    it('ignores set hue when dealing with a grey', function () {
      expect(alchemist.hsl(20, 0, .2).rgb()).to.deep.eq([51, 51, 51])
    })
    it('handles black correctly', function () {
      expect(alchemist.hsl(0, 0, 0).rgb()).to.deep.eq([0, 0, 0])
    })
    it('handles white correctly', function () {
      expect(alchemist.hsl(0, 0, 1).rgb()).to.deep.eq([255, 255, 255])
    })
  })

  describe('from rgb', function () {
    it('should convert', function () {
      expect(alchemist.rgb(48, 166, 152).hsl()).to.deep.eq([172.9, .5514, .4196])
    })
    it('sets hue and saturation to 0 on greys', function () {
      expect(alchemist.rgb(51, 51, 51).hsl()).to.deep.eq([0, 0, .2])
    })
    it('handles black correctly', function () {
      expect(alchemist.rgb(0, 0, 0).hsl()).to.deep.eq([0, 0, 0])
    })
    it('handles white correctly', function () {
      expect(alchemist.rgb(255, 255, 255).hsl()).to.deep.eq([0, 0, 1])
    })
  })
})
