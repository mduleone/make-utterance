#!/usr/bin/env node

// include all paths
// var path = require('path');
// var shifter = require(path.join('../lib'));


var lib = require('../lib/index.js');
lib.createUtterance(process.argv[2], process.argv[3], process.argv[4]);