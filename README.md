## Red Social API

/auth
    -/login                 -> POST - Login con las credenciales del usuario para autenticar
    -/recovery-password     -> POST - Recuperación de contraseña

/posts
    - /me                   -> Mis propias publicaciones
    - /user/:id             -> Publicaciones de usuarios en particular
    - /:id                  -> Una publicación en especifico
    - /:id/comments         -> Los comentarios de una publicación en especifico
    - /:id/likes            -> Los likes de una publicación en especifico

/users
    - /me                   -> GET | PATCH  | DELETE  - Mi informacion de usuario (con sesión iniciada)
    - /:id                  -> GET | PATCH* | DELETE* - Un usuario en especifico (* peticiones para administradores)
    - /:id/follow           -> POST - Seguir a un usuario en específico

/follows                  -> GET - muestra a quien sigues (usuario logueado)
/followers                -> GET - muestra los seguidores (usuario logueado)

#### Controllers Posts
- [x] findAllPosts
- [x] findPostById
- [x] createPost
- [x] updatePost
- [x] removePost

#### Services Posts
- [x] getAllPosts
- [x] getPostById
- [x] postNewPost 
- [x] patchPost
- [x] deletePost



