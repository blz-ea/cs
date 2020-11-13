const fizzBuzz = (n: number): void => {
    for (let i = 1; i <= n; i++) {
        let statement: number | string = '';

        if (i % 3 === 0) {
            statement += 'Fizz';
        }

        if (i % 5 === 0) {
            statement += 'Buzz';
        }

        if (!statement) {
            statement = i;
        }

        console.log(statement);
    }
};

export default fizzBuzz;
