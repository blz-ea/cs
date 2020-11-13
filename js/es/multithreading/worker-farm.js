const workedFarm = require('worker-farm');
const workers = workedFarm(require.resolve('./worker-farm-child.js'));
let ret = 0;

for (let i=0; i < 10; i++) {
    workers(`# ${i} FOO`, (err, output) => {
        console.log(output);
        if (++ret === 10) {
            workedFarm.end(workers);
        }
    });
}