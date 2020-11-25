from typing import List


def restore_ip_addresses(s: str) -> List[str]:
    res: List[str] = []
    ip = ''
    s_len = len(s)

    for a in range(1, 4):
        for b in range(1, 4):
            for c in range(1, 4):
                d = s_len - a - b - c
                if 0 < d <= 3:
                    octet_1 = int(s[0:a])
                    octet_2 = int(s[a:a+b])
                    octet_3 = int(s[a+b:a+b+c])
                    octet_4 = int(s[a+b+c:])

                    if octet_1 <= 255 and octet_2 <= 255 and octet_3 <= 255 and octet_4 <= 255:
                        ip = f"{octet_1}.{octet_2}.{octet_3}.{octet_4}"
                        if len(ip) == s_len + 3:
                            res.append(ip)

    return res


def test():
    """
    >>> restore_ip_addresses('0000')
    ['0.0.0.0']
    >>> restore_ip_addresses('1111')
    ['1.1.1.1']
    >>> restore_ip_addresses('010010')
    ['0.10.0.10', '0.100.1.0']
    >>> restore_ip_addresses('101023')
    ['1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3']
    """


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
