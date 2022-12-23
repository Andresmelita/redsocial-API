const commentsControllers = require('./comments.controllers')

const postComment = (req, res) => {
    const userId = req.user.id
    const postId = req.params.id 
    const { comment } = req.body

    commentsControllers.createComment({ userId, postId, comment})
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message, fields: {
                comment: 'text'
            }})
        })
}

const getComments = (req, res) => {
    const postId = req.params.id
    commentsControllers.findComments(postId)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    postComment,
    getComments
}