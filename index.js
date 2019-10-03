const sinkToDuplex = require('@rdfjs/sink-to-duplex')
const Parser = require('rdf-parser-px')

function parse (options) {
  return sinkToDuplex(new Parser(options), {
    readableObjectMode: true
  })
}

module.exports = {
  parse
}
