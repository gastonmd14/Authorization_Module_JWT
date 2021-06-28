const repositorie = require('../services/repositories/index');

const findOneUser = async (emailValue) => await repositorie.findOne(emailValue);

const getOneUser = async () => await repositorie.getOne();

const createOneUser = async (body) => await repositorie.create(body);


module.exports = {
    findOneUser,
    getOneUser,
    createOneUser
}