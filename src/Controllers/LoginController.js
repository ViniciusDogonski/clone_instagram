const User = require('../Models/User')

module.exports = {

    async login(req, res) {

        const { username, password } = req.body

        try {

            const validUsername = await User.findOne({
                username
            })

            if (!validUsername) return res.status(400).send({ message: 'User not exist' })

            const validPassword = await User.findOne({
                password: password
            }).where({
                username: username
            })

            if (!validPassword) return res.status(400).send({ message: 'password not exist' })

            const loggedin = validPassword

            return res.status(200).send({ message: 'sucess', data: loggedin })

        } catch (error) {

            return res.status(400).send(error)
        }


    }

}