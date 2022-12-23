const router = require('express').Router()

const followServices = require('./follows.services')
const passportJWT = require('../middlewares/auth.middleware')

router.get('/followers', passportJWT.authenticate('jwt', {session: false}) , followServices.getMyFollowers)     // muestra los seguidores (usuario logueado)
router.get('/follows', passportJWT.authenticate('jwt', {session: false}), followServices.getMyFollowings)       // muestra a quien sigue (usuario logueado)

module.exports = router