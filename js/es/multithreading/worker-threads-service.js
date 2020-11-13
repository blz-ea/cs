const { workerData, parentPort } = require('worker_threads');

// Perform heavy stuff without blocking the main thread

parentPort.postMessage({ hello: workerData });