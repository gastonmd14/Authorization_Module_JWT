const {User} = require('../../models');

const getOne = async (id) => await User.findByPk(id);

const create = async (body) =>  User.create(body);


module.exports = {
    getOne,
    create
}