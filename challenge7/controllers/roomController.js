const {rooms} = require('../models');
const roomController = {
    create: (req, res) =>{
        const {name} = req.body;
        rooms
            .create({name: name})
            .then ((result) =>{
                res.json({roomId: result.id});
            })
            .catch((err) => {
                res.json({error: err.message});
            });
    },
};

module.exports = roomController;
