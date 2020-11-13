export default function reverseVowels(s: string): string {
    const vowels = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
        A: true,
        E: true,
        O: true,
        U: true,
    };

    const splitString = s.split('');
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (!(splitString[i] in vowels)) {
            i++;
            continue;
        }

        if (!(splitString[j] in vowels)) {
            j--;
            continue;
        }

        [splitString[i], splitString[j]] = [splitString[j], splitString[i]];
        i++;
        j--;
    }

    return splitString.join('');
}
