class Shape {
    constructor(shapeFill, text, textFill) {
        this.shapeFill = shapeFill;
        this.text = text;
        this.textFill = textFill;
    }

    render() {
        
    }
};

class Circle extends Shape {
    constructor(shapeFill, text, textFill) {
        super(shapeFill, text, textFill)
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeFill}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>
      
      </svg>`
    }
};

class Triangle extends Shape {
    constructor(shapeFill, text, textFill) {
        super(shapeFill, text, textFill)
    }

    render() {
        return `<polygon points="150,0 300,180 0,180" fill="${this.shapeFill}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>
      
      </svg>`
    }
};

class Square extends Shape {
    constructor(shapeFill, text, textFill) {
        super(shapeFill, text, textFill)
    }

    render() {
        return `<rect width="200" height="200" fill="${this.shapeFill}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>
      
      </svg>`
    }
};

module.exports = { Circle, Triangle, Square };