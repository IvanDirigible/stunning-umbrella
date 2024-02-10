class Shape {
    constructor(shapeFill, text, textFill) {
        this.shapeFill = shapeFill;
        this.text = text;
        this.textFill = textFill;
    }
};

class Circle extends Shape {
    constructor(shapeFill, text, textFill) {
        super(shapeFill, text, textFill);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeFill}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>
      
      </svg>`
    }
};

class Triangle extends Shape {
    constructor(shapeFill, text, textFill) {
        super(shapeFill, text, textFill)
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <polygon y="25" points="150,18 244,182 56,182" fill="${this.shapeFill}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>
      
      </svg>`
    }
};

class Square extends Shape {
    constructor(shapeFill, text, textFill) {
        super(shapeFill, text, textFill)
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <rect x="65" y="25" width="160" height="160" fill="${this.shapeFill}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>
      
      </svg>`
    }
};

module.exports = { Circle, Triangle, Square };