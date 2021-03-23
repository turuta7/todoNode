import Categories from '../models/categories.js'


const getAll = async (req, res) => {

    try {
        const allTasks = await Categories.find()
        res.send(allTasks)

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
    const {category = 'news'} = req.body;
    try {
        res.send(await Categories.create({
            category
        }))
    } catch (err) {
        res.send(err.message || err)
    }
}

const deleteCategory = async (req, res) => {
    const {id} = req.params;
    console.log(id)
    try {
        res.send(await Categories.deleteOne({
            _id: id
        }))
    } catch (err) {
        res.send(err.message || err)
    }
}


export default {getAll, create, deleteCategory, getCategoryById}