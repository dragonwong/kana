var kana = avalon.define({
	$id: 'kana',
	isTurnOver: false,
	swip: '',

	act: '',
	turnOver: function() {
		kana.isTurnOver = !kana.isTurnOver;
	},
	swipeleft: function() {
		kana.act = '向左划'
		kana.swip = 'shuffle'
	}
});