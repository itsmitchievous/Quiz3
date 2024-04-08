const guards = [
    {   'id': 1,
        'name': 'Guard 1',
        'rank': 3,
        'yearsOfService': 5,
        'active': true,
    },

    {   'id': 2,
        'name': 'Guard 2',
        'rank': 1,
        'yearsOfService': 45,
        'active': true,
    },

    {   'id': 3,
        'name': 'Guard 3',
        'rank': 6,
        'yearsOfService': 29,
        'active': false,
    },

    {   'id': 4,
        'name': 'Guard 4',
        'rank': 7,
        'yearsOfService': 4,
        'active': true,
    }
 
]

module.exports = {
    getAllGuards: (req, res) => {
        res.json({'GUARDS': guards});
    },

    getGuardById: (req, res) => {
        const guardId = parseInt(req.params.id);
        const guard = guards.find(guard => guard.id === guardId);
        if (!guard) {
            return res.status(404).json({ error: 'Guard not found' });
        }
        res.json({ 'GUARD': guard });
    },

    getGuardDetails: (req, res) => {
        const guardId = parseInt(req.params.id);
        const guard = guards.find(guard => guard.id === guardId);
        if (!guard) {
            return res.status(404).json({ error: 'Guard not found' });
        }
        const { id, rank, yearsOfService } = guard;
        res.json({ 'id': id, 'rank': rank, 'yearsOfService': yearsOfService });
    },

    deleteGuardById: (req, res) => {
        const guardId = parseInt(req.params.id);
        const index = guards.findIndex(guard => guard.id === guardId);
        if (index === -1) {
            return res.status(404).json({ error: 'Guard not found' });
        }
        guards.splice(index, 1);
        res.json({ message: 'Guard deleted successfully', 'GUARDS': guards });
    }
};
