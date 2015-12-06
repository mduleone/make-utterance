# About

This is a very basic tool to make creating utterance strings for the Amazon Echo easier. Create utterances with variables that accept up to 22 words!

# Usage

Downlaod this repository. In the same directory, run the following command:
```
node index.js intentName utteranceString fileName
```
In the `utteranceString` string, place the identifier `%'max words''variable name'` where you want your variables

# Sample

```
node index.js "Dictionary" "define %8term" "utterances.txt"
```
creates
```
utterances.txt:
Dictionary define {this|term}
Dictionary define {this is|term}
Dictionary define {this is a|term}
Dictionary define {this is a long|term}
Dictionary define {this is a long sentence|term}
Dictionary define {this is a long sentence that|term}
Dictionary define {this is a long sentence that gets|term}
Dictionary define {this is a long sentence that gets longer|term}
```
Running the command with a new utterance but specifying the same file
```
node index.js "Dictionary" "please define %8term" "utterances.txt"
```
appends to the file
```
utterances.txt:
Dictionary define {this|term}
Dictionary define {this is|term}
Dictionary define {this is a|term}
Dictionary define {this is a long|term}
Dictionary define {this is a long sentence|term}
Dictionary define {this is a long sentence that|term}
Dictionary define {this is a long sentence that gets|term}
Dictionary define {this is a long sentence that gets longer|term}
Dictionary please define {this|term}
Dictionary please define {this is|term}
Dictionary please define {this is a|term}
Dictionary please define {this is a long|term}
Dictionary please define {this is a long sentence|term}
Dictionary please define {this is a long sentence that|term}
Dictionary please define {this is a long sentence that gets|term}
Dictionary please define {this is a long sentence that gets longer|term}
```

You can include multiple variables in one utterance, so you're not limited to simple sentences

```
node index.js "RobinHood" "Steal from %4prince and give to %4pauper" "robinhood.txt"
```
Creates
```
robinhood.txt
RobinHood Steal from {this|prince} and give to {this|pauper}
RobinHood Steal from {this|prince} and give to {this is|pauper}
RobinHood Steal from {this|prince} and give to {this is a|pauper}
RobinHood Steal from {this|prince} and give to {this is a long|pauper}
RobinHood Steal from {this is|prince} and give to {this|pauper}
RobinHood Steal from {this is|prince} and give to {this is|pauper}
RobinHood Steal from {this is|prince} and give to {this is a|pauper}
RobinHood Steal from {this is|prince} and give to {this is a long|pauper}
RobinHood Steal from {this is a|prince} and give to {this|pauper}
RobinHood Steal from {this is a|prince} and give to {this is|pauper}
RobinHood Steal from {this is a|prince} and give to {this is a|pauper}
RobinHood Steal from {this is a|prince} and give to {this is a long|pauper}
RobinHood Steal from {this is a long|prince} and give to {this|pauper}
RobinHood Steal from {this is a long|prince} and give to {this is|pauper}
RobinHood Steal from {this is a long|prince} and give to {this is a|pauper}
RobinHood Steal from {this is a long|prince} and give to {this is a long|pauper}
```