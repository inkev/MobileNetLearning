let mobilenet;
let video;
let label = "";

function modelReady() {
	console.log('Model is ready!!');
	
}

function gotResults(error, results) {
	if (error) {
		console.error(error);
	} else {
		console.log(results);
		label = results[0].label;
		mobilenet.predict(gotResults);
	}
}

function setup() {
	createCanvas(640, 480);
	background(0);
	video = createCapture(VIDEO);
	video.hide();
	mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw() {
	image(video, 0, 0);	
	fill(0);
	textSize(32);
	text(label, 10, height - 100);
}