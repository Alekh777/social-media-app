const adjective = [
    'merciful',
    'bumpy',
    'taboo',
    'sparkling',
    'federal',
    'impressive',
    'mysterious'
]

const objects = [
    'jam',
    'beef',
    'bulb',
    'glue',
    'jar',
    'tree',
    'whip'
]

function createRandomUsername(){
    const adj = adjective[Math.floor(Math.random() * 7)]
    const obj = objects[Math.floor(Math.random() * 7)]
    return `${adj}-${obj}`
}

module.exports = {
    createRandomUsername
}