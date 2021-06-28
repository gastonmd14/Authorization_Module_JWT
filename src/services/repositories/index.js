const { body } = require('express-validator');
const {User} = require('../../models');

const findOne = async (emailValue) => await User.findOne({
    where: {
        email: emailValue
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