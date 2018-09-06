var firstWord = ["happy", "energetic", "active", "optimistic"],
	secondWord = ["run", "dance", "jog", "hike"];

document.getElementById("firstword").textContent = firstWord[Math.floor(Math.random() * Math.floor(firstWord.length))];
document.getElementById("secondword").textContent = secondWord[Math.floor(Math.random() * Math.floor(secondWord.length))];

var funcHolder = {
	resetML : function() {
		document.getElementById("firstword").textContent = firstWord[Math.floor(Math.random() * Math.floor(firstWord.length))];
		document.getElementById("secondword").textContent = secondWord[Math.floor(Math.random() * Math.floor(secondWord.length))];
	}
}
