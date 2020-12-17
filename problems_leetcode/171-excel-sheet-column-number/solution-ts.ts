export const excelTitleToNumber = (title: string): number => {
    let result = 0;

    for (const char of title) {
        result = result * 26 + char.charCodeAt(0) - 65 + 1;
    }

    return result;
};
