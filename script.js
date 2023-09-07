function show(id5, id6) {
	document.getElementById(id5).style.backgroundColor = "#06c";
	document.getElementById(id5).style.color = "#fff";
	document.getElementById(id6).style.display = "block";
}
function hide(id1, id2, id3, id4) {
	document.getElementById(id1).style.backgroundColor = "#6cf";
	document.getElementById(id2).style.backgroundColor = "#6cf";
	document.getElementById(id1).style.color = "#000";
	document.getElementById(id2).style.color = "#000";
	document.getElementById(id3).style.display = "none";
	document.getElementById(id4).style.display = "none";
}
function hide2(id) {
    document.getElementById(id).style.display = "none";
}
function show2(id) {
    document.getElementById(id).style.display = "block";
}

//clock codes start here
setInterval(digitalClock, 1000)

//time and date
function digitalClock() {
		date = new Date(),
		hour = date.getHours(),
		minute = date.getMinutes(),
		second = date.getSeconds(),
		today = date.getDate(),
	//	month = date.getMonth() + 1,
		year = date.getFullYear(),
		session = "AM";
		
const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	month = monthArray[new Date().getMonth()];
	day = dayArray[new Date().getDay()];
	
	dday.innerHTML = day;
	if(hour == 0){
		hour = 12;
		session = "AM";
	}
	
	if(hour > 12){
		hour = hour - 12;
		session = "PM";
	}
	
	dhour.innerHTML = hour;
	dmin.innerHTML = minute;
	ddate.innerHTML = today;
	dmonth.innerHTML = month;
	amPm.innerHTML = session;
	
	if(hour < 10)
		dhour.innerHTML = "0"+ hour;
	if(minute < 10)
		dmin.innerHTML = "0"+ minute;
	if(today < 10)
		ddate.innerHTML = "0"+ today;
}

//clock codes end here

//countdown codes start here
playCD = false;

function timerCD() {
	if(inputSec.value > -1) 
		inputSec.value--;
	if(inputSec.value == -1 && inputMin.value > 0) {
		inputMin.value--;
		inputSec.value = 59;
	}
	if(inputSec.value < 1 && inputMin.value == 0) {
		clearInterval(startCD);
		alert("count down is done");
		resetCD();
	}
	hMin.innerHTML = inputMin.value;
	hSec.innerHTML = inputSec.value;
	if(inputMin.value < 10)
		hMin.innerHTML = "0"+ inputMin.value;
	if(inputSec.value < 10)
		hSec.innerHTML = "0"+ inputSec.value;
}

function startCountDown() {
	if(playCD == false)
		playCD = true;
	else
		playCD = false;
	if(playCD == true) {
		startCD = setInterval(timerCD, 1000);
		buttonCD.innerHTML = "PAUSE";
		hide2("inputCD");
		show2("countDown");
	}
	if(playCD == false) {
		clearInterval(startCD);
		buttonCD.innerHTML = "CONTINUE";
	}
}

function resetCD() {
	inputMin.value = 0;
	inputSec.value = 0;
	clearInterval(startCD);
	hide2("countDown");
	show2("inputCD");
	buttonCD.innerHTML = "START";
	playCD = false;
}
hide2("countDown");
//countdown codes ends here

//stopwatch codes start here
var h = 0;
	m = 0;
	s = 0;
	ms = 0;
	playSW = false;
	
function timerSW() {
	ms += 1; 

	if(ms >= 60) {
		s += 1;
		ms = 0;
	}
	if(s >= 60) {
		m += 1;
		s = 0;
	}
	if(m >= 60) {
		h += 1;
		m = 0;
		s = 0;
	}
	ts.innerHTML = s;
	tm.innerHTML = m;
	th.innerHTML = h;
	tms.innerHTML = ms;
	if(ms < 10)
		tms.innerHTML = "0"+ ms;
	if(s < 10)
		ts.innerHTML = "0"+ s;
	if(m < 10)
		tm.innerHTML = "0"+ m;
}

function startStopWatch() {
	if(playSW == false)
		playSW = true;
	else
		playSW = false;
	if(playSW == true) {
		startSW = setInterval(timerSW,20);
		buttonSW.innerHTML = "PAUSE";		
	}
	if(playSW == false) {
		clearInterval(startSW);
		buttonSW.innerHTML = "CONTINUE";
	}
}

function resetSW() {
	h = 0;
	m = 0;
	s = 0;
	ms = 0; 
	clearInterval(startSW);
	ts.innerHTML = "00";
	tm.innerHTML = "00";
	th.innerHTML = "0";
	tms.innerHTML = "00";
	buttonSW.innerHTML = "START";
	playSW = false;
}
//stopwatch codes end here

//button switch
function openClock1() {
	show("but1", "clock1");
	hide("but2", "but3", "clock2", "clock3");
}
function openClock2() {
	show("but2", "clock2");
	hide("but1", "but3", "clock1", "clock3");
}
function openClock3() {
	show("but3", "clock3");
	hide("but1", "but2", "clock1", "clock2");
}
openClock2();

var secsHand = document.querySelector('.secs-hand'),
	minsHand = document.querySelector('.mins-hand'),
	hourHand = document.querySelector('.hour-hand'),
	clockDigit = document.querySelector('.clock-digit');

function setDate() {
	var now = new Date();
	
	var secs = now.getSeconds();
	var secsDegrees = ((secs / 60) * 360) + 90;
	secsHand.style.transform = 'rotate('+ secsDegrees +'deg)';
	
	var mins = now.getMinutes();
	var minsDegrees = ((mins / 60) * 360) + ((secs/60)*6) + 90;
	minsHand.style.transform = 'rotate('+ minsDegrees +'deg)';
	
	var hour = now.getHours();
	var hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
	hourHand.style.transform = 'rotate('+ hourDegrees +'deg)';
}

setInterval(setDate, 1000);

setDate();