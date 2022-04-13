var countDate = new Date('Jan 1, 2023 00:00:00:00').getTime();

function newYear(){
	var now = new Date().getTime();
		gap = countDate - now;

		var milliSecond = 1;
		var second = milliSecond * 1000;
		var minute = second * 60;
		var hour = minute * 60;
		var day = hour * 24;

		var d = Math.floor(gap / (day));
		var h = Math.floor((gap % (day)) / (hour));
		var m = Math.floor((gap % (hour)) / (minute));
		var s = Math.floor((gap % (minute)) / (second));
		var ms = Math.floor((gap % (second)) / (milliSecond));

		document.querySelector('#day').innerText = d;
		document.querySelector('#hour').innerText = h;
		document.querySelector('#minute').innerText = m;
		document.querySelector('#second').innerText = s;
		document.querySelector('#millisecond').innerText = ms;
}

setInterval(function(){
	newYear();
}, 1);
