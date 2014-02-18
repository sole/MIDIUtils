var MIDIUtils = (function() {

	var noteMap = {};
	var noteNumberMap = [];
	var notes = [ "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" ];


	for(var i = 0; i < 127; i++) {

		var index = i,
			key = notes[index % 12],
			octave = ((index / 12) | 0) - 1; // MIDI scale starts at octave = -1

		if(key.length === 1) {
			key = key + '-';
		}

		key += octave;

		noteMap[key] = i;
		noteNumberMap[i] = key;

	}


	function getBaseLog(value, base) {
		return Math.log(value) / Math.log(base);
	}


	return {

		noteNameToNoteNumber: function(name) {
			return noteMap[name];
		},

		noteNumberToFrequency: function(note) {
			return 440.0 * Math.pow(2, (note - 69.0) / 12.0);
		},

		noteNumberToName: function(note) {
			return noteNumberMap[note];
		},

		frequencyToNoteNumber: function(f) {
			return Math.round(12.0 * getBaseLog(f / 440.0, 2) + 69);
		},

		'transpose':function(note, increment)
		{
			var
				note = note.split('-'),
				index, index_replace, octave_change;

			note[0] = note[0].toUpperCase();
			note[1] = parseInt(note[1]);

			if (isNaN(note[1])) {
				throw new Error('Note must be in format like "C-1"');
			}

			index = notes.indexOf(note[0]);

			if (index >= 0) {

				index_replace = (index + increment + notes.length) % notes.length;
				octave_change = parseInt((index + increment + notes.length) / notes.length);

				note[0] = notes[index_replace];
				note[1] += (octave_change - 1);
				return note.join('-');

			} else throw new Error('Note ' + note[0] + ' was not found in the map');
		}
	};

})();

try {
	module.exports = MIDIUtils;
} catch(e) {
}


