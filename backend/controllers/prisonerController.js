const prisoners = [
    {
        'name': 'Michelle',
        'age': 20,
        'crime': 'Drugs',
        'sentence': '100 years',
    },

    {
        'name': 'Liann',
        'age': 21,
        'crime': 'Murder',
        'sentence': '1000 years',
    },

    {
        'name': 'Sam',
        'age': 22,
        'crime': 'Syndicate',
        'sentence': '500 years',
    },
    
    {
        'name': 'Irish',
        'age': 29,
        'crime': 'Gun',
        'sentence': '10 years',
    },

    {
        'name': 'Alexene',
        'age': 26,
        'crime': 'Traffic Violation',
        'sentence': '5 years',
    }
]

module.exports.prisoners = (req, res) => {
    res.json({'PRISONERS': prisoners});
}