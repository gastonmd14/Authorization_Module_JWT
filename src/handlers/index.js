const repositorie = require('../services/repositories/index');

const getOneUser = async () => await repositorie.getOne();

const createOneUser = async (body) => await repositorie.create(body);


module.exports = {
    getOneUser,
    createOneUser
}