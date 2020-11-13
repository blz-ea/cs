export default function naiveStringSearch(text: string, pattern: string): number {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (pattern[j] !== text[i + j]) {
                break;
            }

            if (j === pattern.length - 1) {
                count++;
            }
        }
    }

    return count;
}
