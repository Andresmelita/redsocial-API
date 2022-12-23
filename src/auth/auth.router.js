const router = require('express').Router()
const authServices = require('./auth.services')

router.post('/login', authServices.postLogin)                           // Iniciar sesión
router.post('/recovery-password', authServices.postRecoveryToken)       //solicitud de cambio de contraseña 
router.patch('/recovery-password/:id', authServices.patchPassword)      //generación de nueva contraseña a través de token creado

module.exports = router
