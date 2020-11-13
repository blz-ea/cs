# Multithreading #

Since the release of Node.js v10.5 there is a new `worked_threads` module available, and it has been stable since Node.js v12 LTS

The virtual machine and the operating system run the I/O in parallel for us, and when it's to send data back to our Javascript code, the Javascript part is the one that runs in a single thread

If we need to do synchronous-intense stuff, such as doing complex calculations in memory in a large dataset? Then we might have a synchronous code that takes a lot of time and will block the rest of the code.

```javascript
db.findAll('SELECT...', (err, results) => {
    if (err) return console.error(err);

    for (const encrypted of results) {
        const plainText = decrypt(encrypted);
        console.log(plainText);
    }
});
```

No other JS code is executed until our callback finishes its execution.
During that time any other JS execution is queued, which means we might be blocking all our users during that time.

One simple thing we can do is split our code into smaller synchronous cade blocks and call `setTimeout(callback)` to tell Node.js we are done and that it can continue executing pending things that are in the queue.

[Example](./es/multithreading/chunking.js)

`setImmediate()` may be OK for simple use cases, but it's far from ideal solution.
Also we didn't have threads.

We can utilize background processing (`child_process`), a way of running a task with input that could use whatever amount of CPU and time it needs and return a result back to the main application. The main process can communicate with the child process by sending and receiving events.

No memory is shared. All the data exchanged is "cloned".
This is a solution, but not ideal. Forking a process is an expensive process in terms of resources. At it is slow since we need to start new virtual machine from scratch.

We can use a pool of processes ready to be used, run a task at a time in each one, and reuse the process one the task has finished

[Example](./es/multithreading/worker-farm.js)

We solved the problem, but we still use a lot more memory than a multithreaded solution. Threads are still very lightweight in terms of resources compared to forked processes.

## Worker threads ##

Worker threads have isolated contexts. They exchange information with the main process using message passing, so we avoid the race conditions problem threads have and we use less memory since they live in the same process.

You can share memory with Worker Threads. You can pass `SharedArrayBuffer` objects to share large amounts of data to avoid serialization step of the data.

[Example](./es/multithreading/worker-threads.js)

More complex could be build on top, e.g. multiple messages from the Worker thread indicating the execution status, send partial results.

## Reference ##

- [Logrocket: Node.js Multithreading](https://blog.logrocket.com/node-js-multithreading-what-are-worker-threads-and-why-do-they-matter-48ab102f8b10/)
