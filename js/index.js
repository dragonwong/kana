var clickable = true,
	cardGroup = {
		_data: [
			{
				"hiragana": "あ",
				"katakana": "ア",
				"phonetic": "a"
			}, {
				"hiragana": "い",
				"katakana": "イ",
				"phonetic": "i"
			}, {
				"hiragana": "う",
				"katakana": "ウ",
				"phonetic": "u"
			}, {
				"hiragana": "え",
				"katakana": "エ",
				"phonetic": "e"
			}, {
				"hiragana": "お",
				"katakana": "オ",
				"phonetic": "o"
			}, {
				"hiragana": "か",
				"katakana": "カ",
				"phonetic": "ka"
			}, {
				"hiragana": "き",
				"katakana": "キ",
				"phonetic": "ki"
			}, {
				"hiragana": "く",
				"katakana": "ク",
				"phonetic": "ku"
			}, {
				"hiragana": "け",
				"katakana": "ケ",
				"phonetic": "ke"
			}, {
				"hiragana": "こ",
				"katakana": "コ",
				"phonetic": "ko"
			}, {
				"hiragana": "さ",
				"katakana": "サ",
				"phonetic": "sa"
			}, {
				"hiragana": "し",
				"katakana": "シ",
				"phonetic": "shi"
			}, {
				"hiragana": "す",
				"katakana": "ス",
				"phonetic": "su"
			}, {
				"hiragana": "せ",
				"katakana": "セ",
				"phonetic": "se"
			}, {
				"hiragana": "そ",
				"katakana": "ソ",
				"phonetic": "so"
			}, {
				"hiragana": "た",
				"katakana": "タ",
				"phonetic": "ta"
			}, {
				"hiragana": "ち",
				"katakana": "チ",
				"phonetic": "chi"
			}, {
				"hiragana": "つ",
				"katakana": "ツ",
				"phonetic": "tsu"
			}, {
				"hiragana": "て",
				"katakana": "テ",
				"phonetic": "te"
			}, {
				"hiragana": "と",
				"katakana": "ト",
				"phonetic": "to"
			}, {
				"hiragana": "な",
				"katakana": "ナ",
				"phonetic": "na"
			}, {
				"hiragana": "に",
				"katakana": "ニ",
				"phonetic": "ni"
			}, {
				"hiragana": "ぬ",
				"katakana": "ヌ",
				"phonetic": "nu"
			}, {
				"hiragana": "ね",
				"katakana": "ネ",
				"phonetic": "ne"
			}, {
				"hiragana": "の",
				"katakana": "ノ",
				"phonetic": "no"
			}, {
				"hiragana": "は",
				"katakana": "ハ",
				"phonetic": "ha"
			}, {
				"hiragana": "ひ",
				"katakana": "ヒ",
				"phonetic": "hi"
			}, {
				"hiragana": "ふ",
				"katakana": "フ",
				"phonetic": "fu"
			}, {
				"hiragana": "へ",
				"katakana": "ヘ",
				"phonetic": "he"
			}, {
				"hiragana": "ほ",
				"katakana": "ホ",
				"phonetic": "ho"
			}, {
				"hiragana": "ま",
				"katakana": "マ",
				"phonetic": "ma"
			}, {
				"hiragana": "み",
				"katakana": "ミ",
				"phonetic": "mi"
			}, {
				"hiragana": "む",
				"katakana": "ム",
				"phonetic": "mu"
			}, {
				"hiragana": "め",
				"katakana": "メ",
				"phonetic": "me"
			}, {
				"hiragana": "も",
				"katakana": "モ",
				"phonetic": "mo"
			}, {
				"hiragana": "や",
				"katakana": "ヤ",
				"phonetic": "ya"
			}, {
				"hiragana": "い",
				"katakana": "イ",
				"phonetic": "i"
			}, {
				"hiragana": "ゆ",
				"katakana": "ユ",
				"phonetic": "yu"
			}, {
				"hiragana": "え",
				"katakana": "エ",
				"phonetic": "e"
			}, {
				"hiragana": "よ",
				"katakana": "ヨ",
				"phonetic": "yo"
			}, {
				"hiragana": "ら",
				"katakana": "ラ",
				"phonetic": "ra"
			}, {
				"hiragana": "り",
				"katakana": "リ",
				"phonetic": "ri"
			}, {
				"hiragana": "る",
				"katakana": "ル",
				"phonetic": "ru"
			}, {
				"hiragana": "れ",
				"katakana": "レ",
				"phonetic": "re"
			}, {
				"hiragana": "ろ",
				"katakana": "ロ",
				"phonetic": "ro"
			}, {
				"hiragana": "わ",
				"katakana": "ワ",
				"phonetic": "wa"
			}, {
				"hiragana": "を",
				"katakana": "ヲ",
				"phonetic": "wo"
			}, {
				"hiragana": "ん",
				"katakana": "ン",
				"phonetic": "n"
			},
			// 浊音
			{
				"hiragana": "が",
				"katakana": "ガ",
				"phonetic": "ga"
			}, {
				"hiragana": "ぎ",
				"katakana": "ギ",
				"phonetic": "gi"
			}, {
				"hiragana": "ぐ",
				"katakana": "グ",
				"phonetic": "gu"
			}, {
				"hiragana": "げ",
				"katakana": "ゲ",
				"phonetic": "ge"
			}, {
				"hiragana": "ご",
				"katakana": "ゴ",
				"phonetic": "go"
			}, {
				"hiragana": "ざ",
				"katakana": "ザ",
				"phonetic": "za"
			}, {
				"hiragana": "じ",
				"katakana": "ジ",
				"phonetic": "ji"
			}, {
				"hiragana": "ず",
				"katakana": "ズ",
				"phonetic": "zu"
			}, {
				"hiragana": "ぜ",
				"katakana": "ゼ",
				"phonetic": "ze"
			}, {
				"hiragana": "ぞ",
				"katakana": "ゾ",
				"phonetic": "zo"
			}, {
				"hiragana": "だ",
				"katakana": "ダ",
				"phonetic": "da"
			}, {
				"hiragana": "ぢ",
				"katakana": "ヂ",
				"phonetic": "di"
			}, {
				"hiragana": "づ",
				"katakana": "ヅ",
				"phonetic": "du"
			}, {
				"hiragana": "で",
				"katakana": "デ",
				"phonetic": "de"
			}, {
				"hiragana": "ど",
				"katakana": "ド",
				"phonetic": "do"
			}, {
				"hiragana": "ば",
				"katakana": "バ",
				"phonetic": "ba"
			}, {
				"hiragana": "び",
				"katakana": "ビ",
				"phonetic": "bi"
			}, {
				"hiragana": "ぶ",
				"katakana": "ブ",
				"phonetic": "bu"
			}, {
				"hiragana": "べ",
				"katakana": "ベ",
				"phonetic": "be"
			}, {
				"hiragana": "ぼ",
				"katakana": "ボ",
				"phonetic": "bo"
			},
			// 半浊音
			{
				"hiragana": "ぱ",
				"katakana": "パ",
				"phonetic": "pa"
			}, {
				"hiragana": "ぴ",
				"katakana": "ピ",
				"phonetic": "pi"
			}, {
				"hiragana": "ぷ",
				"katakana": "プ",
				"phonetic": "pu"
			}, {
				"hiragana": "ぺ",
				"katakana": "ペ",
				"phonetic": "pe"
			}, {
				"hiragana": "ぽ",
				"katakana": "ポ",
				"phonetic": "po"
			}
		],
		push: function(card) {
			this._data.push(card)
		},
		pop: function() {
			var _data = this._data;
			return _data.splice(getRandom(_data.length), 1)[0]
		}
	};

var kana = avalon.define({
	$id: 'kana',

	cards: [{
		isCur: false,
		isTurnOver: false,
		isSwipe: false,
		data: {}
	}, {
		isCur: false,
		isTurnOver: false,
		isSwipe: false,
		data: {}
	}],

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
			// 当前卡片进入滑动状态
			thisCard.isSwipe = true

			setTimeout(function() {

				// 当前卡片结束滑动状态
				thisCard.isCur = false
				thisCard.isTurnOver = false
				thisCard.isSwipe = false
				clickable = true

				// 从卡组取出新数据
				var newData = cardGroup.pop(),
					oldData = thisCard.data;
				// 卡片数据返回卡组
				cardGroup.push(oldData.$model)
					// 卡片使用新数据
				thisCard.data = newData

			}, 2000)

			setTimeout(function() {
				var thatCard = kana.cards[1 - index]
				thatCard.isCur = true
			}, 1800)
		}
	}

})

kana.cards[0].data = cardGroup.pop();
kana.cards[1].data = cardGroup.pop();

setTimeout(function() {
	kana.cards[kana.cards.length - 1].isCur = true;
}, 1000)

var cntStyle = $('.cnt').style
cntStyle.width = document.body.clientWidth + 'px'
cntStyle.height = document.body.clientHeight + 'px'

/**
 * 菜单
 */
var isMenuOpen = false,
	domMenu = $('#menu');

$('#btn-menu').onclick = function() {
	if (isMenuOpen) {
		domMenu.classList.remove('on')
		domMenu.classList.add('off')
		this.classList.remove('close')
	} else {
		domMenu.classList.remove('off')
		domMenu.classList.add('on')
		this.classList.add('close')
	}
	isMenuOpen = !isMenuOpen
}

/**
 * Get a random number in [0, max)
 */
function getRandom(max) {
	return Math.floor(Math.random() * max);
}

/*
var x, y;

document.body.addEventListener('touchstart', function(e) {
	x = e.changedTouches[0].clientX
	y = e.changedTouches[0].clientY
})
document.body.addEventListener('touchmove', function(e) {
	var dirX;
	if (e.changedTouches[0].clientX > x) {
		dirX = '右'
	}
	// console.log(e.changedTouches[0].clientX - x)
})*/

function $(str) {
	return document.querySelector(str)
}