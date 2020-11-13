/** We create frequency object of `first`
 * and on second iteration we subtract on character occurrence if we
 * reached zeo and on next iteration we're trying to subtract from 0 we return false
 * O(n)
 **/
function validAnagram(first, second) {
    if (first.length !== second.length) return false;

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        const letter = first[i];
        lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }

    for (let i = 0; i < second.length; i++) {
        const letter = second[i];

        if (!lookup[letter]) return false;
        else {
            lookup[letter] -= 1;
        }
    }

    return true;
}
