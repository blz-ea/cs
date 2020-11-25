const restoreIpAddresses = (s: string): string[] => {
    const res: string[] = [];
    const len = s.length;

    for (let a = 1; a <= 3; a++) {
        for (let b = 1; b <= 3; b++) {
            for (let c = 1; c <= 3; c++) {
                const d = len - a - b - c;
                if (d > 0 && d <= 3) {
                    const Octet1 = Number.parseInt(s.slice(0, a));
                    const Octet2 = Number.parseInt(s.slice(a, a + b));
                    const Octet3 = Number.parseInt(s.slice(a + b, a + b + c));
                    const Octet4 = Number.parseInt(s.slice(a + b + c));

                    if (Octet1 <= 255 && Octet2 <= 255 && Octet3 <= 255 && Octet4 <= 255) {
                        const ip = `${Octet1}.${Octet2}.${Octet3}.${Octet4}`;
                        if (ip.length === len + 3) {
                            res.push(ip);
                        }
                    }
                }
            }
        }
    }

    return res;
};

export { restoreIpAddresses };
