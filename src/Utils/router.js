const { Router } = require("express");
const LoginController = require("../Controllers/LoginController");
const UserController = require("../Controllers/UserController");

const router = Router()

//criando usuario
router.post('/users', UserController.createUser)

//listando users
router.get('/users', UserController.listUsers)

//login
router.post('/login', LoginController.login)

// logout

//feed

//postar foto

//deletar foto

//edit foto

//visualizar perfil de um user

//like em fotos

router.get("/", (req, res) => {
    return res.send("hellow wolrd")
})

module.exports = router