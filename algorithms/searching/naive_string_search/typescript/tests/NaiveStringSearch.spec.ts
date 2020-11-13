import naiveStringSearch from '../NaiveStringSearch';

test('seeks for short string in a long string', () => {
    expect(naiveStringSearch('lorie loledlolo', 'lol')).toBe(2);
});
