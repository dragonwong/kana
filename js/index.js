var clickable = true
var kana = avalon.define({
	$id: 'kana',
	isTurnOver: false,
	isSwip: false,
	isCur: false,

	act: '',
	turnOver: function(index) {
		var thisCard = kana.cards[index]

		if (clickable) {
			thisCard.isTurnOver = !thisCard.isTurnOver
		}
	},
	swipe: function(index) {
		clickable = false
		var thisCard = kana.cards[index]

		if (thisCard.isCur) {
			thisCard.isSwipe = true

			setTimeout(function() {
				thisCard.isCur = false
				thisCard.isTurnOver = false
				thisCard.isSwipe = false
				clickable = true
			}, 2000)

			setTimeout(function() {
				var thatCard = kana.cards[1 - index]
				thatCard.isCur = true
			}, 1800)
		}
	},

	cards: [{
		isCur: false,
		isTurnOver: false,
		isSwipe: false,
		data: {
			name: 'A'
		}
	}, {
		isCur: true,
		isTurnOver: false,
		isSwipe: false,
		data: {
			name: 'B'
		}
	}]
})