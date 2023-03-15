// category model

let categories = require('../data/category.json');

const {
    writeData
} = require('../utils/dataRequest');

// get all categories
function findAll() {
    return new Promise((resolve, reject) => {
        if (categories.length === 0) {
            reject({
                message: 'No categories available',
                status: 202
            });
        }
        resolve(categories);
    });
}

function create(category) {
    return new Promise((resolve, reject) => {
        const newCategory = {
            id: Math.floor(Math.random() * 1000000),
            name: category.name
        };
        categories.push(newCategory);
        writeData('./data/category.json', categories);
        resolve(newCategory);
    });
}

function remove(id) {
    return new Promise((resolve, reject) => {
        categories = categories.filter(category => category.id != id);
        writeData('./data/category.json', categories);
        resolve();
    });
}

module.exports = {
    findAll,
    create,
    remove
};