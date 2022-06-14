
const express = require("express")

const app = express()
const cors = require("cors")

app.use(express.json()); // należy pamiętać o nagłówku w fetch-u
app.use(cors());
// app.use(express.text()) // w razie problemów z danymi użyj text()

const PORT = 3000;

let usersList = [{ id: 0, login: 'maciek', pass: "japko", time: '2020/10/17 12:12:42' }]

let id_user = 1



app.get('/', function (req, res) {
    res.send(usersList)

})
app.post("/", function (req, res) {
    let login = req.body.login
    let password = req.body.pass
    let bullBenek = true
    console.log("login: ", login);
    console.log("hasło: ", password);

    for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].login == login) {
            bullBenek = false

            break
        }


    }
    if (bullBenek == true) {
        let czas = new Date()
        let time = ""
        time = czas.getFullYear() + '/' + czas.getMonth() + '/' + czas.getDate() + " " + czas.getHours() + ":" + czas.getMinutes() + ":" + czas.getSeconds()
        usersList.push({ id: id_user, login: login, pass: password, time: time })
        id_user += 1
        res.send({ dodano: true })

    } else {
        res.send({ dodano: false })
    }
})
app.post("/del", function (req, res) {
    let id = req.body.id
    for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].id == id) {
            usersList.splice(i, 1)
            break
        }

    }
    res.send(usersList)

})




app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})