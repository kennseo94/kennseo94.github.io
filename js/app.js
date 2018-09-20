var onezerothree = {
	productName: "One Zero Three",
	description: "Lily has never been quite like other people. Since she was a child, her wild imagination and strong memory have given her the talent to create her own home. A place in her mind away from the dangers of the world, to keep her dreams and memories safe. But during a night out with her friends, something happened. Something terrible and now her life has changed forever. Help Lily use her imagination to unlock her memories and relive the events of that night.",
	image: "placeholder",
	currentPledge: 9347,
	currentBackers: 298,
	timeLeft: function() {
		var seconds = 1000,
			minutes = seconds * 60,
			hours = minutes * 60,
			days = hours * 24;

		var timer;

		var end = new Date('09/26/2018 7:47AM'),
			now = new Date();

		var distance = end - now;

		var days = Math.floor(distance / days),
			hours = Math.floor((distance % days) / hours),
			minutes = Math.floor((distance % hours) / minutes),
			seconds = Math.floor((distance % minutes) / seconds);

		return [days, hours, minutes, seconds];
	},
	pledgeLevels: [{
		name: "I want the game!",
		includes: [
			"- Digital wallpaper pack",
			"- Your name in the game credits",
			"- Get the game via Steam"
		],
		available:  true
	},
	{
		name: "I want the music too!",
		includes: [
			"- Digital wallpaper pack",
			"- Your name in the game credits",
			"- Get the game via Steam",
			"- Official Soundtrack"
		],
		available: true
	},
	{
		name: "I want it all!",
		includes: [
			"- Digital wallpaper pack",
			"- Your name in the game credits",
			"- The '103 Pack' (See description)"
		],
		available: true
	}]
}

var countDownDate = new Date("Sept 26, 2018 7:47:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s to go!";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

document.getElementById("gameDesc").textContent = onezerothree.description;

//PLEDGE 1
document.getElementById("ksDesc1").textContent = onezerothree.pledgeLevels[0].name;

//PLEDGE 2
document.getElementById("ksDesc2").textContent = onezerothree.pledgeLevels[1].name;

//PLEDGE 3
document.getElementById("ksDesc3").textContent = onezerothree.pledgeLevels[2].name;

document.getElementById("currPledged").textContent = onezerothree.currentPledge;

document.getElementById("currentBackers").textContent = onezerothree.currentBackers;