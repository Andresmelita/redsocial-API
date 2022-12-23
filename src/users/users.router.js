const router = require('express').Router()

const userServices = require('./users.services')
const followServices = require('../follows/follows.services')

const passportJWT = require('../middlewares/auth.middleware')
const roleMiddleware= require('../middlewares/role.middleware')

router.route('/') 
    .get(userServices.getAllUsers)  // obtener todos los usuarios
    .post(userServices.postUser)    // agregar un nuevo usuario

router.route('/me')
    .get(passportJWT.authenticate('jwt', {session: false}), userServices.getMyUser)         // muestra información de mi usuario logueado
    .patch(passportJWT.authenticate('jwt', {session: false}), userServices.patchMyUser)     // modificación de mi usuario
    .delete(passportJWT.authenticate('jwt', {session: false}), userServices.deleteMyUser)   // eliminación de mi usuario

router.route('/:id') 
    .get(userServices.getUserById)                                                                          // Muestra usuario por id
    .patch(passportJWT.authenticate('jwt', {session: false}), roleMiddleware, userServices.patchUser)       // Modificación de usuario por id (admin)
    .delete(passportJWT.authenticate('jwt', {session: false}), roleMiddleware, userServices.deleteUser)     // Eliminación de usuario por id (admin)

router.route('/:id/follow')
    .post(passportJWT.authenticate('jwt', {session: false}), followServices.postFollower)   // seguir usuario

module.exports = router

