class Shape {
    constructor(id, value) {
        this.id = id;
        this.value = value;
    }
}

const myShapes = [
    new Shape('Circle', `circle cx="150" cy="110" r="80"`),
    new Shape('Triangle', `polygon points="150,10 0,160 300,160"`),
    new Shape('Square', 'rect x="50" y="10" width="200" height="200"')
]

module.exports = {
    myShapes
};