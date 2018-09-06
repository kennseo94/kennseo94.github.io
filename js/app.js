var firstWord = ["read", "listen to music", "walk", "sleep"],
	secondWord = ["hike", "dance", "jog", "go to the park"],
	thirdWord = ["pizza", "pasta", "pancakes", "burgers"],
	fourthWord = ["cake", "pie", "ice cream", "fruits"],
	fifthWord = ["play", "run", "hang", "chill"],
	sixthWord = ["Max", "Kristin", "Paxton", "Isaiah"],
	seventhWord = ["play games", "watch television", "play with my dog", "sleep in"];

		document.getElementById("firstword").textContent = firstWord[Math.floor(Math.random() * Math.floor(firstWord.length))];
		document.getElementById("secondword").textContent = secondWord[Math.floor(Math.random() * Math.floor(secondWord.length))];
		document.getElementById("thirdword").textContent = thirdWord[Math.floor(Math.random() * Math.floor(firstWord.length))];
		document.getElementById("fourthword").textContent = fourthWord[Math.floor(Math.random() * Math.floor(secondWord.length))];
		document.getElementById("fifthword").textContent = fifthWord[Math.floor(Math.random() * Math.floor(firstWord.length))];
		document.getElementById("sixthword").textContent = sixthWord[Math.floor(Math.random() * Math.floor(secondWord.length))];
		document.getElementById("seventhword").textContent = seventhWord[Math.floor(Math.random() * Math.floor(firstWord.length))];

var funcHolder = {
	resetML : function() {
		document.getElementById("firstword").textContent = firstWord[Math.floor(Math.random() * Math.floor(firstWord.length))];
		document.getElementById("secondword").textContent = secondWord[Math.floor(Math.random() * Math.floor(secondWord.length))];
		document.getElementById("thirdword").textContent = thirdWord[Math.floor(Math.random() * Math.floor(firstWord.length))];
		document.getElementById("fourthword").textContent = fourthWord[Math.floor(Math.random() * Math.floor(secondWord.length))];
		document.getElementById("fifthword").textContent = fifthWord[Math.floor(Math.random() * Math.floor(firstWord.length))];
		document.getElementById("sixthword").textContent = sixthWord[Math.floor(Math.random() * Math.floor(secondWord.length))];
		document.getElementById("seventhword").textContent = seventhWord[Math.floor(Math.random() * Math.floor(firstWord.length))];
	}
}
