var qingyin48 = 'あ,ア,a,い,イ,i,う,ウ,u,え,エ,e,お,オ,o,か,カ,ka,き,キ,ki,く,ク,ku,け,ケ,ke,こ,コ,ko,さ,サ,sa,し,シ,shi,す,ス,su,せ,セ,se,そ,ソ,so,た,タ,ta,ち,チ,chi,つ,ツ,tsu,て,テ,te,と,ト,to,な,ナ,na,に,ニ,ni,ぬ,ヌ,nu,ね,ネ,ne,の,ノ,no,は,ハ,ha,ひ,ヒ,hi,ふ,フ,fu,へ,ヘ,he,ほ,ホ,ho,ま,マ,ma,み,ミ,mi,む,ム,mu,め,メ,me,も,モ,mo,や,ヤ,ya,い,イ,i,ゆ,ユ,yu,え,エ,e,よ,ヨ,yo,ら,ラ,ra,り,リ,ri,る,ル,ru,れ,レ,re,ろ,ロ,ro,わ,ワ,wa,を,ヲ,wo,ん,ン,n',
	zhuoyin20 = 'が,ガ,ga,ぎ,ギ,gi,ぐ,グ,gu,げ,ゲ,ge,ご,ゴ,go,ざ,ザ,za,じ,ジ,ji,ず,ズ,zu,ぜ,ゼ,ze,ぞ,ゾ,zo,だ,ダ,da,ぢ,ヂ,di,づ,ヅ,du,で,デ,de,ど,ド,do,ば,バ,ba,び,ビ,bi,ぶ,ブ,bu,べ,ベ,be,ぼ,ボ,bo',
	banzhuoyin5;

/**
 * get a array of kana
 * @param  {String} - str - string split char by ','
 * @return {Array} array of kana
 */
function getKana(str) {

	var arr = str.split(','),
		kanaArr = [],
		kana_index,
		kana_item;

	arr.forEach(function(item, index) {

		kana_index = Math.floor(index / 3)

		if (!kanaArr[kana_index]) {
			kana_item = kanaArr[kana_index] = {}
		}
		switch (index % 3) {
			case 0:
				kana_item.hiragana = item
				break
			case 1:
				kana_item.katakana = item
				break
			case 2:
				kana_item.phonetic = item
				break
		}
	})

	return kanaArr
}