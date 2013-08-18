
module( 'note names to numbers' );

test( "A-0 is 1", function() {

	equal( MIDIUtils.noteNameToNoteNumber( 'A-0' ), 1 );

});

test( "C-4 is 40 (middle C)", function() {

	equal( MIDIUtils.noteNameToNoteNumber( 'C-4' ), 40 );

});

test( "A-4 is 49", function() {

	equal( MIDIUtils.noteNameToNoteNumber( 'A-4' ), 49 );

});

test( "C-8 is 88", function() {

	equal( MIDIUtils.noteNameToNoteNumber( 'C-8' ), 88 );

});


module( 'note numbers to frequencies' );

test( "1 is 27.500", function() {

	equal( MIDIUtils.noteNumberToFrequency( 1 ), 27.500 );

});

test( "40 (C-4) is 261.626", function() {

	equal( Math.abs(MIDIUtils.noteNumberToFrequency( 40 ) - 261.626) < 0.01, true );

});

test( "49 (A-4) is 440.000", function() {

	equal( Math.abs(MIDIUtils.noteNumberToFrequency( 49 ) - 440) < 0.01, true );

});

test( "88 (C-8) is 4186.01", function() {

	equal( Math.abs(MIDIUtils.noteNumberToFrequency( 88 ) - 4186.01) < 0.01, true );

});

module( 'note numbers to names' );

test( "1 is A-0", function() {

	equal( MIDIUtils.noteNumberToName( 1 ), 'A-0' );

});

