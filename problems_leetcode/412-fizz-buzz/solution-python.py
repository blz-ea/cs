def fizz_buzz(n: int) -> None:
    """
    >>> fizz_buzz(15)
    1
    2
    Fizz
    4
    Buzz
    Fizz
    7
    8
    Fizz
    Buzz
    11
    Fizz
    13
    14
    FizzBuzz
    """
    for number in range(1, n+1):
        statement = ""
        
        if number % 3 == 0:
            statement += "Fizz"
        
        if number % 5 == 0:
            statement += "Buzz"
        
        if not statement:
            statement = str(number)
        
        print(statement)


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
