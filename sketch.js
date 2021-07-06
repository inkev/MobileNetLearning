let mobilenet;
let cat;

function modelReady() {
	console.log('Model is ready!!');
	mobilenet.predict(cat, gotResults);
}

function gotResults(error, results) {
	if (error) {
		console.error(error);
	} else {
		console.log(results);
	}
}

function imageReady() {
	image(cat, 0, 0, width, height)
}

function setup() {
	createCanvas(640, 480);
	background(0);
	cat = createImg('images/cat.jpg', imageReady);
	cat.hide();

	mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}