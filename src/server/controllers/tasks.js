import Tasks from '../models/tasks.js'
import Categories from '../models/categories.js'
import returnActualDate from '../util/actualDate.js'

const dataTime = [1, 2, 3, 5, 10, 22, 24];
const dataValue = ['days', 'hours'];
global.filter = {};
const urlRedirect = '/tasks';

const getAll = async (req, res) => {
    try {
        const allTasks = await Tasks.find(global.filter).sort({'actualDate': -1});
        let allCategory = await Categories.find();
        allCategory.push({category:'default'})
        console.log(allCategory)
        if (allTasks) {
            res.render('index', {
                dataTime,
                dataValue,
                tasks: allTasks,
                allCategory,
            })
        }
    } catch (err) {
        res.send(err.message || err);
    }
}

const create = async (req, res) => {
    const {title, description, category} = req.body;
    const newActualDate = returnActualDate(req.body.value)
    let newCategory;
    try {
        newCategory = await Categories.findOne({category});

        if (!newCategory) {
            newCategory = await Categories.create({
                category
            });
        }
        await Tasks.create({
            title,
            description,
            actualDate: new Date(newActualDate),
            categoryName: newCategory.category
        });
        res.redirect(urlRedirect);
    } catch (err) {
        res.send(err.message || err);
    }
}

const deleteTask = async (req, res) => {
    try {
        await Tasks.deleteOne({
            _id: Object.keys(req.body)[0]
        });
        res.redirect(urlRedirect);
    } catch (err) {
        res.send(err.message || err);
    }
}

const putTask = async (req, res) => {
    const _id = (Object.keys(req.body)[1]);
    if (_id) {
        try {
            switch (Object.keys(req.body)[0]) {
                case 'description':
                    await Tasks.updateOne(
                        {_id},
                        {description: req.body.description}
                    );
                    break;
                case 'title':
                    await Tasks.updateOne(
                        {_id},
                        {title: req.body.title}
                    );
                    break;
            }
            res.redirect(urlRedirect);
        } catch (err) {
            res.send(err.message || err);
        }
    }

}

export default {getAll, create, deleteTask, putTask}