const atoi = (str: string): number => {
    const parsed = Number.parseInt(str);

    // check if parsed is not `NaN`
    if (parsed !== parsed) {
        return 0;
    }

    const max_int = 0x7fffffff;
    const min_int = -0x80000000;

    if (parsed > max_int) {
        return max_int;
    }

    if (parsed < min_int) {
        return min_int;
    }

    return parsed;
};

export default atoi;
