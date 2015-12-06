#!/usr/bin/env node

// include all paths
// var path = require('path');
// var shifter = require(path.join('../lib'));

var lib = require('../lib/index.js');

if (process.argv.length < 4) {
    console.log("Usage notes:\nmakeUtterance \"intentName\" \"utterance\" [\"fileName\"]");
    return;
}
lib.makeUtterance(process.argv[2], process.argv[3], process.argv[4]?process.argv[4]:"utterances.txt");