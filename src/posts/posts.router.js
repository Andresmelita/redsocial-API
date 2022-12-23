const router = require('express').Router()

const postServices = require('./posts.services')
const likeServices = require('../likes/likes.services')
const passportJWT = require('../middlewares/auth.middleware')

router.route('/')
    .get(postServices.getAllPosts)                                                          // muestra todos los posts
    .post(passportJWT.authenticate('jwt', {session: false}), postServices.postNewPost)      // permite crear un nuevo post (usuario logueado)

router.route('/:id')
    .get(postServices.getPostById)                                                          // muestra un post específico
    .patch(passportJWT.authenticate('jwt', {session: false}), postServices.patchPost)       // edita un post específico
    .delete(passportJWT.authenticate('jwt', {session: false}), postServices.deletePost)     // permite eliminar un post específico

router.route('/:id/likes')
    .get(likeServices.getAllLikesByPost)                                                    // muestra los likes de un post en específico            
    .post(passportJWT.authenticate('jwt', {session: false}), likeServices.postLike)         // permite darle like a un post específico


module.exports = router