
def naive_string_search(text: str, pattern: str) -> int:
    """
    >>> naive_string_search('lorie loledlolo', 'lol')
    2
    """
    len_text = len(text)
    len_pattern = len(pattern)
    count = 0

    for i in range(len_text - len_pattern + 1):
        j = 0

        while j < len_pattern:
            if text[i + j] != pattern[j]:
                break

            if len_pattern - 1 == j:
                count += 1

            j += 1

    return count