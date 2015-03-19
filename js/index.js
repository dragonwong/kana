var kana = avalon.define({
	$id: 'kana',
	isTurnOver: false,
	clickCard: function() {
		kana.isTurnOver = !kana.isTurnOver;
	}
});