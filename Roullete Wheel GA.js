var par;
var x = [8,4,5,2,1];

function roulletewheel(x) {
	var n = Math.round(Math.random() * 20);

	sum = 0;
	for (var i = 0; i < x.length; i++) {
		sum += x[i];
		if (n < sum){
			par = i + 1;;
			break;
		}

	}
}

roulletewheel(x);

	console.log("Kromosom ke-" + par + " terpilih menjadi Parent");