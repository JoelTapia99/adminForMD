const MockPremios = [
    {'nombre': 'Premio 1', 'precio': 2},
    {'nombre': 'Premio 2', 'precio': 6},
    {'nombre': 'Premio 3', 'precio': 3}
];

function getPremios(){
    return MockPremios;
}

module.exports = {
    premios: getPremios
}