/*
this
this is
this is a
this is a long
this is a long sentence
this is a long sentence that
this is a long sentence that gets
this is a long sentence that gets longer
this is a long sentence that gets longer still
this is a long sentence that gets longer still because
this is a long sentence that gets longer still because I
this is a long sentence that gets longer still because I do
this is a long sentence that gets longer still because I do not
this is a long sentence that gets longer still because I do not want
this is a long sentence that gets longer still because I do not want to
this is a long sentence that gets longer still because I do not want to repeat
this is a long sentence that gets longer still because I do not want to repeat words
this is a long sentence that gets longer still because I do not want to repeat words if
this is a long sentence that gets longer still because I do not want to repeat words if it
this is a long sentence that gets longer still because I do not want to repeat words if it can
this is a long sentence that gets longer still because I do not want to repeat words if it can be
this is a long sentence that gets longer still because I do not want to repeat words if it can be avoided
*/

var fs = require('fs');

var words = [
    "this",
    "this is",
    "this is a",
    "this is a long",
    "this is a long sentence",
    "this is a long sentence that",
    "this is a long sentence that gets",
    "this is a long sentence that gets longer",
    "this is a long sentence that gets longer still",
    "this is a long sentence that gets longer still because",
    "this is a long sentence that gets longer still because I",
    "this is a long sentence that gets longer still because I do",
    "this is a long sentence that gets longer still because I do not",
    "this is a long sentence that gets longer still because I do not want",
    "this is a long sentence that gets longer still because I do not want to",
    "this is a long sentence that gets longer still because I do not want to repeat",
    "this is a long sentence that gets longer still because I do not want to repeat words",
    "this is a long sentence that gets longer still because I do not want to repeat words if",
    "this is a long sentence that gets longer still because I do not want to repeat words if it",
    "this is a long sentence that gets longer still because I do not want to repeat words if it can",
    "this is a long sentence that gets longer still because I do not want to repeat words if it can be",
    "this is a long sentence that gets longer still because I do not want to repeat words if it can be avoided",
]

function createUtterance (intentName, utterance, fileName) {

    utterance = utterance.trim();
    var splits = splitUtterance(utterance);

    var outputArray = buildOutput(splits);

    var output = '';
    for (var i in outputArray) {
        output += '' + intentName + ' ' + outputArray[i] + '\n';
    }
    fs.appendFile(fileName, output, function(err) {
        if (err) {
            return console.log(err);
        }
    });
}

function buildOutput (splits) {
    var output = [''];

    for (var i in splits) {
        output = stitch(output, splits[i]);
    }

    return output;
}

function stitch (fronts, next) {
    var newFronts = [];
    var current = '';

    if (next.type == "text") {
        for (var i in fronts) {
            newFronts.push(fronts[i] + next.text);
        }
    } else if (next.type == "var") {
        newFronts = stitchVar(fronts, next);
    }

    return newFronts;
}

function stitchVar (fronts, term) {
    var newFronts = [];

    for (var front in fronts) {
        var current = fronts[front];
        for (var i = 0; i < term.num; i++) {
            var curr = current;
            curr += "{" + words[i] + "|" + term.name + "}";
            newFronts.push(curr);
        }
    }

    return newFronts;
}

function splitUtterance (utterance) {
    var pattern = /(.*)\%(\d+)([^\s]+)(.*)/;

    var utterances = [];
    var cont = true;
    var remaining = utterance;
    while (cont) {
        var matches = remaining.match(pattern);
        var uttText = {};
        var uttVar = {};
        if (matches === null) {
            uttText.type = "text";
            uttText.text = remaining;
            utterances.unshift(uttText);
            cont = false;
            continue;
        }
        remaining = matches[1];

        uttVar.type = "var"
        uttVar.num = Number.parseInt(matches[2]);
        uttVar.name = matches[3];

        uttText.type = "text"
        uttText.text = matches[4];
        utterances.unshift(uttVar, uttText);
    }

    return utterances;
}

module.exports = {
    createUtterance: createUtterance,
}