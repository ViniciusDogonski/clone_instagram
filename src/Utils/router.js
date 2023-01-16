const { Router } = require("express");
const LoginController = require("../Controllers/LoginController");
const PostController = require("../Controllers/PostController");
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
router.post('/posts', PostController.createPost)
router.get('/posts', PostController.listAllPosts)
router.delete('/post/:post_id', PostController.deletePost)
router.put('/post/:post_id', PostController.editPost)

//postar foto

//deletar foto

//edit foto

//visualizar perfil de um user

//like em fotos

router.get("/", (req, res) => {
    return res.send("hellow wolrd")
})

module.exports = router