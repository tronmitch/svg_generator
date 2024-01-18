// shapes.test.js
const Shapes = require('./shapes');


describe('Shapes', () => {
    let shapes;

    beforeEach(() => {
        shapes = new Shapes.SVGshape();
    });

    it('creates an SVG with a circle shape', () => {
        expect(shapes.circle()).toBe('circle cx="150" cy="110" r="80"');
    });

    it('creates an SVG with a square shape', () => {
        expect(shapes.square()).toBe('polygon points="150,10 0,160 300,160"');
    });

    it('creates an SVG with a triangle shape', () => {
        expect(shapes.triangle()).toBe('rect x="50" y="10" width="200" height="200"');
    });
});
