images = [
	5,
	10,
];

random = images.length*Math.random();
random -= random%1

image = images[random];

$('body').css('background-image', 'url("img/'+image+'.png")');
