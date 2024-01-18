// class SVGcontent {
//     constructor(version, anchor, text, text_color) {
//         this.version = version;
//         this.anchor = anchor;
//         this.text = text;
//         this.text_color = text_color;
//     }
// }

// class Circle extends SVGcontent{
//     constructor(shape, version, anchor, text, text_color) {
//         super(version, anchor, text, text_color)
//         this.shape = shape;
//     }
// }

// class Square extends SVGcontent{
//     constructor(shape, version, anchor, text, text_color) {
//         super(version, anchor, text, text_color)
//         this.shape = shape;
//     }
// }

// class Triangle extends SVGcontent{
//     constructor(shape, version, anchor, text, text_color) {
//         super(version, anchor, text, text_color)
//         this.shape = shape;
//     }
// }

// const version = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
// const anchor = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.logo_text_color}">${response.logo_text}</text>`
// const circleSVG = new Circle (`circle cx="150" cy="110" r="80"`, version, anchor)


// const myShapes = [
//     new Shape('Circle', ),
//     new Shape('Triangle', `polygon points="150,10 0,160 300,160"`),
//     new Shape('Square', 'rect x="50" y="10" width="200" height="200"')
// ]

class SVGshape {
    circle (){
        return `circle cx="150" cy="110" r="80"`
    }
    square (){
        return `polygon points="150,10 0,160 300,160"`
    }
    triangle (){
        return 'rect x="50" y="10" width="200" height="200"'
    }
}

module.exports = {
    SVGshape
};