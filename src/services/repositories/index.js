const {User} = require('../../models');

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
    getOne,
    create
}