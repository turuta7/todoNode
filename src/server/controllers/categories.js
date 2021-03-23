import Categories from '../models/categories.js'

const urlRedirect = '/tasks'
const getAll = async (req, res) => {

    try {
        const allTasks = await Categories.find()
        res.send(allTasks);

    } catch (err) {
        res.send(err.message || err);
    }
}

const getCategoryById = async (id) => {
    try {
        const allTasks = await Categories.findOne({_id: id})
        return allTasks;
    } catch (err) {
        console.error(err.message || err);
    }
}

const create = async (req, res) => {
    const {newCategory} = req.body;
    try {
        await Categories.create({
            category: newCategory
        })
        res.redirect(urlRedirect)
    } catch (err) {
        res.send(err.message || err);
    }
}

const deleteCategory = async (req, res) => {
    const {category} = req.body;
    try {
        await Categories.deleteOne({
            category
        })
        res.redirect(urlRedirect);
    } catch (err) {
        res.send(err.message || err);
    }
}

const sortCategory = async (req, res) => {
    const {sortCategory} = req.body;
    if (sortCategory === 'default') global.filter = {};
    else if (sortCategory) global.filter = {categoryName: sortCategory};
    res.redirect(urlRedirect);
}


export default {getAll, create, deleteCategory, getCategoryById, sortCategory}