// Modules - Encapsulated Code ( only share minimum)
// ConnonJS, every file is module (by default)
const names = require('./4-names')
const sayhi = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

sayhi('susan')
sayhi(names.john)
sayhi(names.peter)