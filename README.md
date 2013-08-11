MIDIUtils
=========

Methods for dealing with MIDI data (note numbers, note names, frequencies, etc).

# Currently available methods

## noteNameToNoteNumber( name )

Returns the MIDI note number corresponding to the note ```name```.


````javascript
MIDIUtils.noteNameToNoteNumber( 'A-3' );    // returns 45
MIDIUtils.noteNameToNoteNumber( 'C-4' );    // returns 48
````

## noteNumberToFrequency( number )

Returns the frequency represented by ```noteNumber```.

````javascript
MIDIUtils.noteNumberToFrequency( 49 ); // returns 440 Hz -- i.e. A-4
````

