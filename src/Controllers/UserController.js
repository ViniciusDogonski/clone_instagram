const { create } = require('../Models/User')
const User = require('../Models/User')



module.exports = {
    async createUser(req, res) {

        const {
            email,
            password,
            username,
            name,
            description
        } = req.body

        try {

            console.log("to aq")
            const createdUser = await User.create({
                email,
                password,
                username,
                name,
                description
            })

            return res.status(200).send({
                message: "User created",
                data: createdUser
            })

        } catch (error) {
            return res.status(400).send(error)
        }

    }
}