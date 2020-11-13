import fizzBuzz from './solution-ts';

test('Testing `fizzBuzz`', () => {
    const consoleLogRef = console.log;

    const outputArray = [];

    console.log = (output) => outputArray.push(output);

    fizzBuzz(15);

    expect(outputArray).toEqual([
        1,
        2,
        'Fizz',
        4,
        'Buzz',
        'Fizz',
        7,
        8,
        'Fizz',
        'Buzz',
        11,
        'Fizz',
        13,
        14,
        'FizzBuzz',
    ]);

    console.log = consoleLogRef;
});
