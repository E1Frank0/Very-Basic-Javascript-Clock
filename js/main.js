// Frank Diaz, DIG 1102, Professor Kahn Mai

// Declare a function that get thets the current time and displays it into the screen.
function getTime() {
	// Create variables with values for the current hour, minute, and seconds as well as the time format.
	var currentTime = new Date();
	var time = "AM";
	var hour = currentTime.getHours();
	var minute = currentTime.getMinutes();
	var second = currentTime.getSeconds();
	
	// Create an if conditional statement that calculates the current time in hours, minutes, and seconds.
	if (hour == 0) {
		hour = 12;
	} else if (hour > 12) {
		hour = hour -12;
		time = "PM";
	}
	if (hour < 10) {
		hour = "0" + hour;
	}
	if (minute < 10) {
		minute = "0" + minute;
	}
	if (second < 10) {
		second = "0" + second;
	}

// Create a variable that will eventually display the working clock in the screen.
var userClock = document.getElementById('clockDisplay');
userClock.textContent = hour + ":" + minute + ":" + second + " " + time;
userClock.innerHTML = hour + ":" + minute + ":" + second + " " + time;
setTimeout('getTime()',1000);
}
getTime();
