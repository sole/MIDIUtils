# MIDIUtils

>Methods for dealing with MIDI data (note numbers, note names, frequencies, etc).

## Getting it

### Node/Browserify

Install using npm:

`npm install midiutils`

Then require it before using in your code:

````javascript
var MIDIUtils = require('midiutils');

MIDIUtils.noteNameToNoteNumber('A-4');
````

### Just the browser, thanks!

You can also download/clone the source. Then just include the source using a `script` tag before using the library:

````html
<script src="path/to/MIDIUtils.js"></script>
````

## API

### noteNameToNoteNumber( name )

Returns the MIDI note number corresponding to the note ```name```.


````javascript
MIDIUtils.noteNameToNoteNumber( 'A-0' );    // returns 21
MIDIUtils.noteNameToNoteNumber( 'C-4' );    // returns 60
````

### noteNumberToFrequency( number )

Returns the frequency represented by ```noteNumber```.

````javascript
MIDIUtils.noteNumberToFrequency( 69 ); // returns 440 Hz -- i.e. A-4
````

### noteNumberToName( number )

Returns the MIDI note name corresponding to the note ```number```.

````javascript
MIDIUtils.noteNumberToName( 21 ); // returns 'A-0'
````

### frequencyToNoteNumber( frequency )

Returns the note number that corresponds to this frequency.

````javascript
MIDIUtils.frequencyToNoteNumber( 440.000 ); // returns 69
````

## Getting involved

If you want to get involved with the development of this library or want to contribute, make sure the code you add or change follows the same style as the existing code (whitespace, indenting, etc) and looks consistent with the rest.

Also new features must also be accompanied by both documentation and examples, and new tests demonstrating the usage of the feature, and existing tests must not break.
