const {controlWrapper, HttpError} = require('../helpers');
const { Burger } = require('../models/burger');


const getAllBurgers = async (req, res) => {
    const burgers = await Burger.find();
    
    res.json({burgers});
}

module.exports = {getAllBurgers: controlWrapper(getAllBurgers)};