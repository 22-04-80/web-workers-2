if (window.Worker) {
	console.log("Spawning web worker from origin of this script");
	const myWorker = new Worker("scripts/worker.js");
	console.log("Sending message to web worker from origin of this script")
	myWorker.postMessage("Hello");
} else {
	console.log('Your browser doesn\'t support web workers.');
}
