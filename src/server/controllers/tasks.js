import Tasks from '../models/tasks.js'
import Categories from "../models/categories.js";

const dataTime = [1, 2, 3, 5, 10, 22, 24];
const dataValue = ['days', 'hours'];
const CATEGORY = ['news'];

const urlRedirect = '/tasks'

const getAll = async (req, res) => {
    try {
        const allTasks = await Tasks.find().sort({'updatedAt': -1});
        const allCategory = await Categories.find();
        if (allTasks) {
            res.render('index', {
                CATEGORY,
                dataTime,
                dataValue,
                tasks: allTasks,
                allCategory,
                message: 'Hello there!',
            })

        }
        ;

    } catch (err) {
        res.send(err.message || err);
    }

}

const create = async (req, res) => {

    const {title, description, actualDate, category} = req.body;
    console.log(req.body)
    let cat;
    try {
        cat = await Categories.findOne({category})
        console.log(cat)
        if (!cat) {
            cat = await Categories.create({
                category
            })
        }
        await Tasks.create({
            title,
            description,
            actualDate,
            categoryName: cat.category

        })
        res.redirect(urlRedirect)


    } catch (err) {
        res.send(err.message || err)
    }
}

const deleteTask = async (req, res) => {
    if (Object.values(req.body)[0] === 'edit') {
        console.log(req.body)
    } else {
        try {
            await Tasks.deleteOne({
                _id: Object.keys(req.body)[0]
            })
            res.redirect(urlRedirect)
        } catch (err) {
            res.send(err.message || err)
        }
    }

}


export default {getAll, create, deleteTask}