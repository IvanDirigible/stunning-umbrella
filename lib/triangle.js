const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(shapeFill, text, textFill) {
        super(shapeFill, text, textFill)
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,0 300,180 0,180" fill="${this.shapeFill}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>
      
      </svg>`
    }
};

module.exports = Triangle;