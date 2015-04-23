images = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12
];

random = images.length*Math.random();
random -= random%1

image = images[random];

$('body').css('background-image', 'url("img/'+image+'.png")');
