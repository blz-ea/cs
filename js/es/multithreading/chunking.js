const crypto = require('crypto');

const arr = new Array(200).fill('something');

function doHeavyStuff(item) {
    crypto.createHmac('sha256', 'secret').update(new Array(10000).fill(item).join('.')).digest('hex');
}

function processChunk() {
    if (arr.length === 0) {
        // code that runs after the whole array is executed
        return;
    }

    console.log('processing chunk');
    // pick 10 items and remove them from array
    const subarr = arr.splice(0, 10);
    for (const item of subarr) {
        doHeavyStuff(item);
    }
    // Put the function back in the queue
    setImmediate(processChunk);
}

processChunk();

//This is just for confirming that we can continue doing stuff
let interval = setInterval(() => {
    console.log('tick');
    if (arr.length === 0) clearInterval(interval);
});
