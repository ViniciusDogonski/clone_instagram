const { Router } = require("express");

const router = Router()

//criando usuario

//login

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