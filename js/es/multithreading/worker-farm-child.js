module.exports = (input, callback) => {
    callback(null, input + ` BAR (${process.pid}) `);
};