import Tasks from '../models/tasks.js'
import Categories from "../models/categories.js";

const dataTime = [1, 2, 3, 5, 10, 22, 24];
const dataValue = ['days', 'hours'];
const CATEGORY = ['news'];

const urlRedirect = '/tasks'

const getAll = async (req, res) => {

    try {
        const allTasks = await Tasks.find().sort({'updatedAt': -1})
        if (allTasks) {
            res.render('index', {
                CATEGORY,
                dataTime,
                dataValue,
                tasks: allTasks,
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
    try {
        const cat = await Categories.findOne({category})
        if (!cat) {
            await Categories.create({
                category
            })
        }
        res.send(await Tasks.create({
            title,
            description,
            actualDate,
        }))


    } catch (err) {
        res.send(err.message || err)
    }
}

const deleteTask = async (req, res) => {
    if (Object.values(req.body)[0] === 'edit') {
        res.redirect('/edit')
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