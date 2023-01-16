
const { create, findById } = require('../Models/User')

const Post = require('../Models/Post')

module.exports = {

    async createPost(req, res) {
        const {
            picture,
            description
        } = req.body

        const { user } = req.headers

        try {

            const newPost = await Post.create({
                picture,
                description,
                user
            })

            return res.status(200).send({
                message: 'Post created successfully',
                data: newPost
            })


        } catch (error) {
            return res.status(400).send(error)
        }

    },

    async listAllPosts(req, res) {

        try {
            const allPosts = await Post.find().populate("user")

            return res.status(200).send({
                message: 'All Post',
                data: allPosts
            })

        } catch (error) {
            return res.status(400).send(error)
        }
    },

    async deletePost(req, res) {
        const { post_id } = req.params

        try {

            const deletedPost = await Post.findByIdAndDelete(post_id)

            return res.status(200).send({

                message: "post deleted successfully",
                data: deletedPost
            })

        } catch (error) {
            return res.status(400).send(error)
        }
    },

    async editPost(req, res) {

    }

}