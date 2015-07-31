images = [
	1,
	"chibiRyuko",
	"kurisu",
	"yoko",
	5,
	6,
	7,
	"mio",
	9,
	10,
	"chibiKurisu",
	"kaori",
	"kaori2",
];

random = images.length*Math.random();
random -= random%1

image = images[random];

$('body').css('background-image', 'url("img/'+image+'.png")');
