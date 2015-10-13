var n = Math.round(Math.random() * 20);
var par;
var populasi = 20;
var x = [8,4,5,2,1];



function roulletewheel(n) {
	sum = 0;
	for (var i = 0; i < 5; i++) {
		sum += x[i];
		if (n < sum){
			par = i + 1;;
			break;
		}

	}
}

roulletewheel(n);

	console.log("Kromosom ke-" + par + " terpilih menjadi Parent;)
;