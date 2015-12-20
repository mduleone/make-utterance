# About

This is a very basic tool to make creating utterance strings for the Amazon Echo easier.

# Installation
Until this is available via npm, follow these steps to clone this repo and install
```
$ mkdir /path/to/repository
$ cd /path/to/repository
$ git clone git@github.com:mduleone/MakeUtterance.git .
$ npm install -g .
```

# Usage

```
$ makeUtterance "intent name" "utterance string" "file name"
```
### Variables
To indicate a variable in the `utterance string`, place the identifier `{test words|variable-name}`.
For example, `{these are test words|fourWordTerm}`

# Sample
### Basic Usage
```
$ makeUtterance "Dictionary" "define {this is a long sentence that gets longer|term}" "utterances.txt"
Appended utterances to utterances.txt

$ cat utterances.txt
Dictionary define {this|term}
Dictionary define {this is|term}
Dictionary define {this is a|term}
Dictionary define {this is a long|term}
Dictionary define {this is a long sentence|term}
Dictionary define {this is a long sentence that|term}
Dictionary define {this is a long sentence that gets|term}
Dictionary define {this is a long sentence that gets longer|term}
```
### Custom Slots
Custom slots work great with this tool. Unless you specify a variable name with a pipe, the tool will ignore the `{customSlot}` indicated by curly braces.
```
$ makeUtterance "Pokemon" "tell me about {Pokemon}" "pokemon.txt"
Appended utterances to pokemon.txt

$ cat pokemon.txt
Pokemon tell me about {Pokemon}
```

### Multiple Utterances
Running the command with a new utterance but specifying the same file appends to the file
```
$ makeUtterance "Dictionary" "please define {this is a long sentence that gets longer|term}" "utterances.txt"
Appended utterances to utterances.txt

$ cat utterances.txt
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
### Multiple Variables
You can include multiple variables in one utterance, so you're not limited to simple sentences

```
$ makeUtterance "ZipCode" "My Zip code is {one two three four five|zip} and my area code is {one two three|area}." "zip.txt"
Appended utterances to zip.txt

$ cat zip.txt
ZipCode My Zip code is {one|zip} and my area code is {one|area}.
ZipCode My Zip code is {one|zip} and my area code is {one two|area}.
ZipCode My Zip code is {one|zip} and my area code is {one two three|area}.
ZipCode My Zip code is {one two|zip} and my area code is {one|area}.
ZipCode My Zip code is {one two|zip} and my area code is {one two|area}.
ZipCode My Zip code is {one two|zip} and my area code is {one two three|area}.
ZipCode My Zip code is {one two three|zip} and my area code is {one|area}.
ZipCode My Zip code is {one two three|zip} and my area code is {one two|area}.
ZipCode My Zip code is {one two three|zip} and my area code is {one two three|area}.
ZipCode My Zip code is {one two three four|zip} and my area code is {one|area}.
ZipCode My Zip code is {one two three four|zip} and my area code is {one two|area}.
ZipCode My Zip code is {one two three four|zip} and my area code is {one two three|area}.
ZipCode My Zip code is {one two three four five|zip} and my area code is {one|area}.
ZipCode My Zip code is {one two three four five|zip} and my area code is {one two|area}.
ZipCode My Zip code is {one two three four five|zip} and my area code is {one two three|area}.
```
