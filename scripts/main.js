if (window.Worker) {
	try {
		console.log("Spawning web worker from origin of this script");
		const myWorker = new Worker("scripts/worker.js");
		console.log("Sending message to web worker from origin of this script")
		myWorker.postMessage("Hello");
	} catch (e) {
		console.error("Failed to spawn worker from origin of this script");
		console.error(e);
	}

	try {
		console.log("Spawning web worker from origin of this script using import scripts");
		const content = `importScripts("https://22-04-80.github.io/web-workers-2/scripts/worker.js")`;
		const workerUrl = URL.createObjectURL(new Blob([content], {type: "text/javascript"}));
		const worker = new Worker(workerUrl);

		console.log("Sending message to web worker from origin of this script")
		worker.postMessage("Hello");
	} catch (e) {
		console.error("Failed to spawn worker from origin of this script using import scripts");
		console.error(e);
	}

	try {
		console.log("Spawning web worker from origin of this script using import scripts");
		const content = `importScripts("scripts/worker.js")`;
		const workerUrl = URL.createObjectURL(new Blob([content], {type: "text/javascript"}));
		const worker = new Worker(workerUrl);

		console.log("Sending message to web worker from origin of this script")
		worker.postMessage("Hello");
	} catch (e) {
		console.error("Failed to spawn worker from origin of this script using import scripts");
		console.error(e);
	}


	try {
		console.log("Spawning web worker from third origin using import scripts");
		const content = `importScripts("https://mdn.github.io/simple-web-worker/worker.js")`;
		const workerUrl = URL.createObjectURL(new Blob([content], {type: "text/javascript"}));
		const worker = new Worker(workerUrl);

		console.log("Sending message to web worker from third origin")
		worker.postMessage("Hello");
	} catch (e) {
		console.error("Failed to spawn worker from third origin");
		console.error(e);
	}
} else {
	console.log('Your browser doesn\'t support web workers.');
}
