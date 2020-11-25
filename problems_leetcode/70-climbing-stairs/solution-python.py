from typing import List


def climbing_stairs(n: int) -> int:
    """
    >>> climbing_stairs(2)
    2
    >>> climbing_stairs(3)
    3
    """
    dp: List[int] = [0]*(n+1)

    dp[0], dp[1], dp[2] = 0, 1, 2

    for i in range(3, n+1):
        dp[i] = dp[i-1]+dp[i-2]

    return dp[n]


if __name__ == "__main__":
    import doctest

    doctest.testmod(verbose=True)
