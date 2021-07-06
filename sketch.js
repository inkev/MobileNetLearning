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
		let label = results[0].label;
		fill(0);
		textSize(64);
		text(label, 10, height - 100);
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