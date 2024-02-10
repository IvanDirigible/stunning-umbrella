const colorValidate = require('./colorKeywords');

describe('Hex hash check', () => {
    it('should return true for an actual color hexidecimal number with hash', () => {
        const res = "#000000"
        expect(colorValidate(res)).toBeTruthy();
    });
});

describe('Short hex check', () => {
    it('should return true for short hexidecimal numbers as well', () => {
        const res = "#000"
        expect(colorValidate(res)).toBeTruthy();
    });
});

describe('Non-hex check', () => {
    it('should return false for any non-valid color hexidecimal numbers', () => {
        const res = "#ZZ0000"
        expect(colorValidate(res)).not.toBeTruthy();
    });
});

describe('Hex hashless check', () => {
    it('should return false for an actual color hexidecimal number if the hash is missing', () => {
        const res = "000000"
        expect(colorValidate(res)).not.toBeTruthy();
    });
});

describe('Color lowercase check', () => {
    it('should return true for an actual color from the color keywords', () => {
        const res = "darkgreen"
        expect(colorValidate(res)).toBeTruthy();
    });
});

describe('Color uppercase check', () => {
    it('should still return true for an actual color from the color keywords regardless of capitalization', () => {
        const res = "darkgreen"
        expect(colorValidate(res)).toBeTruthy();
    });
});

describe('Non-color keyword check', () => {
    it('should return false for any colors not in the keywordlist', () => {
        const res = "dlue"
        expect(colorValidate(res)).not.toBeTruthy();
    });
});