const { body } = require('express-validator');
const {User} = require('../../models');

const findOne = async (body) => await User.find({
    where: {
        email: body.email
    }
});

const getOne = async (id) => await User.findByPk(id);

const create = async (body) =>  await User.create(
    {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password
    }
);


module.exports = {
    findOne,
    getOne,
    create
}