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

            const userAlready = await User.findOne({
                email
            })

            if (userAlready) return res.status(400).send({ message: 'User alread exists. try another EMAIL' })

            // console.log("to aq")
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

    },

    async listUsers(req, res) {

        try {

            const allUsers = await User.find()

            return res.status(200).send({
                message: 'All users fond',
                data: allUsers
            })

        } catch (error) {
            return res.status(400).send(error)
        }
    }



}