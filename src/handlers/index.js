const repositorie = require('../services/repositories/index');

const findOneUser = async (body) => await repositorie.findOne(body);

const getOneUser = async () => await repositorie.getOne();

const createOneUser = async (body) => await repositorie.create(body);


module.exports = {
    findOneUser,
    getOneUser,
    createOneUser
}