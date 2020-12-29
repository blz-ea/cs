export const reverseBits = (num: number): number => {
    let out = 0;

    for (let i = 0; i < 32; i++) {
        out = (out << 1) + (num & 1);
        num >>= 1;
    }

    return out;
};
