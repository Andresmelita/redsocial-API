const Comments = require("../models/comments.models")
const Post = require('../models/posts.models')
const Users = require('../models/users.models')
const uuid = require('uuid')

const createComment = async (obj) => {
    const data = await Comments.create({
        id: uuid.v4(),
        userId : obj.userId,
        postId: obj.postId,
        comment: obj.comment
    })
    return data
}

const findComments = async (postId) => {
    const data = await Comments.findAll({
        where: {
            postId: postId
        },
        attributes: {
            exclude: ['updatedAt']
        }
    })
    return data
}

module.exports = {
    createComment,
    findComments
}