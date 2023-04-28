const databaseConfig = require('./knexfile'); //относительный путь к файлу настроек
var knex = require('knex')(databaseConfig);
const express = require('express'); //Импорт модуля express
const app = express(); //объявление express приложения
app.use(express.json())
const port = 8083; //порт, на котором будет работать приложение
const uuid = require('uuid').v4;

app.get("/users", async (req, res) => {
    const UsersList = await knex
        .select("*")
        .from("Users")
    res.json(UsersList);
});


app.get("/user/:User_id", async (req, res) => {
    const UsersList = await knex
        .select("*")
        .from("Users")
        .where("User_id", req.params.User_id)
    res.json(UsersList);
});


app.post("/users/create", (req, res) => {
    console.log(req.body)
    knex("Users").insert(
        {
            User_id: req.body.User_id,
            Name: req.body.Name,
            Date_of_Birth: req.body.Date_of_Birth,
            Login: req.body.Login,
            Password: req.body.Password,
            Phone: req.body.Phone,
        })
        .then(() => { res.json({ message: "Успешно добавлен пользователь" }); })
        .catch(err => { res.json({ message: "Произошла ошибка", error: err }); })
});

app.put('/users/update/:User_id', async (req, res) => {
    const User_id = req.params.User_id;
    const { Name, Date_of_Birth, Login, Password, Phone } = req.body
    knex.select('*')
        .from('Users')
        .where('User_id', User_id)
        .update({
            User_id: User_id, Name: Name, Date_of_Birth: Date_of_Birth, Login: Login, Password: Password, Phone: Phone
        })
        .orderBy("id")
        .then(() => { res.json({ message: "Успешно обновлен пользователь" }); })
        .catch(err => { res.json({ message: "Произошла ошибка", error: err }); })
});

app.delete("/users/delete/:User_id", (req, res) => {
    console.log(req.params)
    const User_id = req.params.User_id;
    knex("Users")
        .where("User_id", User_id)
        .del()
        .then(() => res.json({ message: "Пользователь успешно удалён" }));
});

app.get("/subscriptions", async (req, res) => {
    const SubscriptionsList = await knex
        .select("*")
        .from("Subscription")
    res.json(SubscriptionsList);
});


app.get("/subscription/:Subscription_ID", async (req, res) => {
    const SubscriptionsList = await knex
        .select("*")
        .from("Subscription")
        .where("Subscription_ID", req.params.Subscription_ID)
    res.json(SubscriptionsList);
});


app.post("/subscriptions/create", (req, res) => {
    console.log(req.body)
    knex("Subscription").insert(
        {
            Subscription_ID: req.body.Subscription_ID,
            User_ID: req.body.User_id,
            Name: req.body.Name,
            Date_Start: req.body.Date_Start,
            Date_End: req.body.Date_End,
            Price: req.body.Price
        })
        .then(() => { res.json({ message: "Успешно добавлен абонемент" }); })
        .catch(err => { res.json({ message: "Произошла ошибка", error: err }); })
});

app.put('/subscriptions/update/:Subscription_ID', async (req, res) => {
    const Subscription_ID = req.params.Subscription_ID;
    const { User_id, Name, Date_Start, Date_End, Price } = req.body
    knex.select('*')
        .from('Subscriptions')
        .where('Subscription_ID', Subscription_ID)
        .update({
            Subscription_ID: Subscription_ID, User_id: User_id, Name: Name, Date_Start: Date_Start, Date_End: Date_End, Price: Price
        })
        .orderBy("id")
        .then(() => { res.json({ message: "Успешно обновлен абонемент" }); })
        .catch(err => { res.json({ message: "Произошла ошибка", error: err }); })
});

app.delete("/subscriptions/delete/:Subscription_ID", (req, res) => {
    console.log(req.params)
    const Subscription_ID = req.params.Subscription_ID;
    knex("Subscriptions")
        .where("Subscription_ID", Subscription_ID)
        .del()
        .then(() => res.json({ message: "Абонемент успешно удалён" }));
});











app.listen(port, () => { //Запуск приложения. Веб-сервер начинает прослушивать указанный порт
    console.log(`Example app listening at http://localhost:${port}`)
})
module.exports = app;