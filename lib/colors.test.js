const colorKeywords = require('./colorKeywords');
class Validate {}

Validate.prototype.isColor = (color) => {

    if (color === colorKeywords.includes(color.toLowerCase())) {
        return true;
    }
    
    // const pattern = new RegExp('/^#?([a-f0-9]{6}|[a-f0-9]{3})$/');
    const pattern = new RegExp('/0x[\da-f]/i');
    
    if (pattern.test(color)) {
        return true;
    }
    return false;
}

describe('Validate', () => {

    describe('Hex hash check', () => {
        it('should return true for an actual color hexidecimal number with hash', () => {
            const validate = new Validate();
            const result = validate.isColor('#ff0000')

            expect(result).toEqual(true);
        });
    });

    describe('Hex hashless check', () => {
        it('should return true for an actual color hexidecimal number without hash', () => {
            const validate = new Validate();
            const result = validate.isColor('ff0000')

            expect(result).toEqual(true);
        });
    });

    describe('Color lowercase check', () => {
        it('should return true for an actual color from the color keywords', () => {
            const validate = new Validate();
            const result = validate.isColor('red')

            expect(result).toEqual(true);
        });
    });

    describe('Color lowercase check', () => {
        it('should still return true for an actual color from the color keywords regardless of capitalization', () => {
            const validate = new Validate();
            const result = validate.isColor('REd')

            expect(result).toEqual(true);
        });
    });

    describe('Non-color check', () => {
        it('should return false for anything else', () => {
            const validate = new Validate();
            const result = validate.isColor('dlue')

            expect(result).toEqual(false);
        });
    });
});