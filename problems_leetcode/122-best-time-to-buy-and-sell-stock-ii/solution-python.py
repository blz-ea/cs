from typing import List


def max_profit(prices: List[int]) -> int:
    """
    >>> max_profit([1,2,3,4,5])
    4
    >>> max_profit([7,1,5,3,6,4])
    7
    >>> max_profit([7,6,4,3,1])
    0
    """
    maxProfit = 0
    
    for i in range(1, len(prices)):
        if prices[i] > prices[i-1]:
            maxProfit += prices[i] - prices[i-1]        
        
    return maxProfit


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
