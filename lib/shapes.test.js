const { Shape, Triangle, Circle, Square } = require('./shapes');

describe('Shape', () => {
    it('is expected to set the color of the shape', () => {
        const shape = new Shape();
        shape.setColor('blue');
        expect(shape.color).toEqual('blue');
    });
})

describe('Triangle', () => {
    it('is expected to render a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

describe('Circle', () => {
    it('is expected to render a green circle', () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
    })
})

describe('Square', () => {
    it('is expected to render a red square', () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
    })
})
