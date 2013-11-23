MIDIUtils
=========

Methods for dealing with MIDI data (note numbers, note names, frequencies, etc).

# Currently available methods

## noteNameToNoteNumber( name )

Returns the MIDI note number corresponding to the note ```name```.


````javascript
MIDIUtils.noteNameToNoteNumber( 'A-0' );    // returns 21
MIDIUtils.noteNameToNoteNumber( 'C-4' );    // returns 60
````

## noteNumberToFrequency( number )

Returns the frequency represented by ```noteNumber```.

````javascript
MIDIUtils.noteNumberToFrequency( 69 ); // returns 440 Hz -- i.e. A-4
````

## noteNumberToName( number )

Returns the MIDI note name corresponding to the note ```number```.

````javascript
MIDIUtils.noteNumberToName( 21 ); // returns 'A-0'
````

## frequencyToNoteNumber( frequency )

Returns the note number that corresponds to this frequency.

````javascript
MIDIUtils.frequencyToNoteNumber( 440.000 ); // returns 69
````
