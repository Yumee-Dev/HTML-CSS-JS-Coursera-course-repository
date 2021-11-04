var x = "A";
console.log(x);

var vladimirCity = new Object();
vladimirCity.name = "Vladimir";
vladimirCity["population of city"] = 350000;
vladimirCity.location = new Object();
vladimirCity.location.lat = 112.63;
vladimirCity.location.lon = -27.92;
console.log(vladimirCity);

var muromCity = {
	name: "Murom",
	location: {
		lat: 54.93,
		lon: -99.73
	},
	"population of city": 120000
};
console.log(muromCity);

function createMultiplierFunction(multiplier) {
	var uuu = function(arg) {
		return arg*multiplier;
	}

	return uuu;
}

var quadro = createMultiplierFunction(4);
var quinto = createMultiplierFunction(5);
console.log(quadro(25));
console.log(quinto(10));

function City (name, population) {
	this.name = name;
	this.population = population;
}

City.prototype.increasePopulation = function (incPop) {
	this.population += incPop;
	return this.population;
}

var kovrovCity = new City("Kovrov", 95000);
console.log(kovrovCity);
kovrovCity.increasePopulation(10000);
console.log(kovrovCity);
console.log(kovrovCity.increasePopulation(43000));

var kolchuginoCity = {
	name: "Kolchugino",
	population: 41000,

	increasePopulation: function (incPop) {
		this.population += incPop;
		// return this.population;
	}
};

console.log(kolchuginoCity.increasePopulation(2300));
console.log(kolchuginoCity);

var forestMassive = ["pine", "oak", "birch"];
for (var i=0; i<forestMassive.length; i++) {
	console.log(forestMassive[i]);
}
console.log(forestMassive);


forestMassive.area = 200;
for (var i=0; i<forestMassive.length; i++) {
	console.log(forestMassive[i]);
}
console.log(forestMassive);
console.log("forestMassive length is " + forestMassive.length);

for (var prop in forestMassive) {
	console.log(forestMassive[prop]);
}

window.addEventListener("devicemotion", function(event) {
	document.querySelector("#devicemotiondiv").textContent = event.acceleration.x + "m/s2";
});