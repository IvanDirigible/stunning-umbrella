const { Circle, Triangle, Square } = require('./shapes')

describe('Circle', () => {
    it('should return a circle with blue text, "CBR", and a red background', () => {
        const shape = new Circle("red", "CBR", "blue");
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="red" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">CBR</text>

</svg>`
        )
    })
});

describe('Triangle', () => {
    it('should return a triangle with lime-green text, "TLB", and a black background', () => {
        const shape = new Triangle("black", "TLB", "limegreen");
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon y="25" points="150,18 244,182 56,182" fill="black" />

    <text x="150" y="150" font-size="60" text-anchor="middle" fill="limegreen">TLB</text>

</svg>`
        )
    })
});

describe('Square', () => {
    it('should return a square with burnt sienna text, "$@3", and a lilac background', () => {
        const shape = new Square("#C8A2C8", "$@3", "#e97451");
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="70" y="25" width="160" height="160" fill="#C8A2C8" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="#e97451">$@3</text>

</svg>`
        )
    })
});