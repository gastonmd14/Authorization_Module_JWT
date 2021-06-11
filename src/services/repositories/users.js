const {User} = require('../../../src/models');


const getAll = async () =>  await User.findAll();

const getOne = async (id) => await User.findByPk(id);

const create = async () =>  User.create();

const update = async () => await User.update();

const destroy = async () => await User.destroy();

module.exports = {
    getAll,
    getOne,
    create,
    update,
    destroy
}