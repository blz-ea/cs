# Reverse Bits #

**Difficulty:** Easy 

Reverse bits of a given 32 bits unsigned integer.

Note:

- Note that in some languages such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
- In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
Follow up:

If this function is called many times, how would you optimize it?

**Example 1:**

```
Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
```

**Example 2:**

```
Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
```

**Constraints:**

- The input must be a binary string of length 32

## Solutions ##

- [TypeScript](./solution-ts.ts)
- [Python](./solution-python.py)

## References ##

- [LeetCode](https://leetcode.com/problems/reverse-bits/)

## Explanation ##

Create number out, process original number bit by bit from end and add this bit to the end of our out number, and that is all! Why it is works?

- `out = (out << 1) + (n & 1)` adds last bit of n to out
 - `n >>= 1` removes last bit from n.
Imagine number `n = 11011010`, and `out = 0`

```
out = 0, n = 1101101
    (0 << 1) + (1101101 & 1)
        0000000 out
      <<0000001 
      ->0000000 step_1

        1101101 n
       &0000001
        0000001 step_2

        0000000 step_1
       +0000001 step_2
        0000001 new_out

        1101101
      >>0000001
        0110110 new_n  

out = 01, n = 110110
        0000001 out
      <<0000001
        0000010 step_1

        0110110 n
       &0000001
        0000000 step_2

        0000010 step_1
       +0000000 step_2
        0000010 new_out

        0110110
      >>0000001
        0011011 new_n

out = 010, n = 11011
        0000010 out
      <<0000001
        0000100 step_1
        
        0011011 n
       &0000001
        0000001 step_2
        
        0000100 step_1
       +0000001 step_2
        0000101 new_out
        
        0011011
      >>0000001
        0001101 new_n

out = 0101, n = 1101
        0000101 out
      <<0000001
        0001010 step_1
        
        0001101 n
       &0000001
        0000001 step_2
        
        0001010 step_1
       +0000001 step_2
        0001011 new_out

        0001101
      >>0000001
        0000110 new_n

out = 01011, n = 110
        0001011 out
      <<0000001
        0010110 step_1
        
        0000110 n
       &0000001
        0000000 step_2
        
        0010110 step_1
       +0000000 step_2
        0010110 new_out

        0000110
      >>0000001
        0000011 new_n

out = 010110, n = 11
        0101100 out
      <<0000001
        0101100 step_1
        
        0000011 n
       &0000001
        0000001 step_2
        
        0101100 step_1
       +0000001 step_2
        0101101 new_out

        0000011
      >>0000001
        0000001 new_n

out = 0101101, n = 1
        1011010 out
      <<0000001
        1011010 step_1
        
        0000001 n
       &0000001
        0000001 step_2
        
        1011010 step_1
       +0000001 step_2
        1011011 new_out

        0000001
      >>0000001
        0000000 new_n

out = 01011011, n = 0
```

**Compexity:** time complexity is `O(32)`, space complexity is `O(1)`.