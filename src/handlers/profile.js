const repositorie = require('../services/repositories/profile');

const getAllUser = async () => await repositorie.getAll();

const getOneUser = async (id) => await repositorie.getOne(id);


module.exports = {
    getAllUser,
    getOneUser
}