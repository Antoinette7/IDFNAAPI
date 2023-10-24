// Get all Users Registered
/**
 * @swagger
 * /api/klab/blog/create:
 *   post:
 *     summary: Create a new blog post
 *     tags:
 *       - Blog
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               blogImage:
 *                 type: string
 *                 format: binary  
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *              
 *     responses:
 *       200:
 *         description: Blog post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "200"
 *                 message:
 *                   type: string
 *                   example: "Blog post created successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     blogImage:
 *                       type: string
 *                       example: http://example.com/blog_image.jpg
 *                     title:
 *                       type: string
 *                       example: "Title of the Blog"
 *                     content:
 *                       type: string
 *                       example: "Content of the blog post"
 */




 /**
 * @swagger
 * /api/klab/blog/read:
 *   get:
 *     summary: Get all blog posts
 *     tags:
 *       - Blog
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: List of all blog posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   blogImage:
 *                     type: string
 *                     example: http://example.com/blog_image.jpg
 *                   title:
 *                     type: string
 *                     example: "Title of the Blog"
 *                   content:
 *                     type: string
 *                     example: "Content of the blog post"
 *       404:
 *         description: No blogs found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "404"
 *                 message:
 *                   type: string
 *                   example: "No blogs found"
 */


 /**
 * @swagger
 * /api/klab/blog/read/{id}:
 *   get:
 *     summary: Get a blog post by ID
 *     tags:
 *       - Blog
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Blog ID to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog post found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 blogImage:
 *                   type: string
 *                   example: http://example.com/blog_image.jpg
 *                 title:
 *                   type: string
 *                   example: "Title of the Blog"
 *                 content:
 *                   type: string
 *                   example: "Content of the blog post"
 *       404:
 *         description: Blog post not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "404"
 *                 message:
 *                   type: string
 *                   example: "Blog post not found"
 */


 /**
 * @swagger
 * /api/klab/blog/update/{id}:
 *   put:
 *     summary: Update a blog post by ID
 *     tags:
 *       - Blog
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Blog ID to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               blogImage:
 *                 type: string
 *                 format: binary  # This indicates that it's expecting a file
 *               title:
 *                 type: string
 *                 example: "Updated Title of the Blog"
 *               content:
 *                 type: string
 *                 example: "Updated Content of the blog post"
 *     responses:
 *       200:
 *         description: Blog post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "200"
 *                 message:
 *                   type: string
 *                   example: "Blog post updated successfully"
 *       404:
 *         description: Blog post not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "404"
 *                 message:
 *                   type: string
 *                   example: "Blog post not found"
 */


 /**
 * @swagger
 * /api/klab/blog/delete/{id}:
 *   delete:
 *     summary: Delete a blog post by ID
 *     tags:
 *       - Blog
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Blog ID to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog post deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "200"
 *                 message:
 *                   type: string
 *                   example: "Blog post deleted successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     blogImage:
 *                       type: string
 *                       example: http://example.com/blog_image.jpg
 *                     title:
 *                       type: string
 *                       example: "Title of the Blog"
 *                     content:
 *                       type: string
 *                       example: "Content of the blog post"
 *       404:
 *         description: Blog post not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "404"
 *                 message:
 *                   type: string
 *                   example: "Blog post not found"
 */



 //Users


 

// Get all Users Registered


/**
 * @swagger
 * /api/klab/user/signup:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               profile:
 *                 type: string
 *                 format: binary  # This indicates that it's expecting a file
 *             required:
 *               - firstname
 *               - lastname
 *               - email
 *               - password
 *               - profile
 *     responses:
 *       201:
 *         description: User Registration Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "201"
 *                 message:
 *                   type: string
 *                   example: "User Registration Success"
 *                 data:
 *                   type: object
 *                   properties:
 *                     firstname:
 *                       type: string
 *                     lastname:
 *                       type: string
 *                     email:
 *                       type: string
 *                     Profile:
 *                       type: string
 */


 /**
 * @swagger
 * /api/klab/user/read:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   firstname:
 *                     type: string
 *                     example: John
 *                   lastname:
 *                     type: string
 *                     example: Doe
 *                   email:
 *                     type: string
 *                     example: john.doe@example.com
 *                   Profile:
 *                     type: string
 *                     example: http://example.com/profile.jpg
 */


 /**
 * @swagger
 * /api/klab/user/login:
 *   post:
 *     tags:
 *       - User
 *     summary: User Login in 
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 name: email
 *               password:
 *                 type: string
 *                 name: Password
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "200"
 *                 message:
 *                   type: string
 *                   example: "User logged in successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     firstname:
 *                       type: string
 *                       example: John
 *                     lastname:
 *                       type: string
 *                       example: Anto
 *                     email:
 *                       type: string
 *                       example: igihozo.anto@example.com
 *                     profile:
 *                       type: string
 *                       example: http://example.com/profile.jpg
 *       401:
 *         description: Incorrect email or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "401"
 *                 message:
 *                   type: string
 *                   example: "Incorrect email or password"
 */


 /**
 * @swagger
 * /api/klab/user/update/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 required: true
 *               profile:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "200"
 *                 message:
 *                   type: string
 *                   example: "User updated successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     firstname:
 *                       type: string
 *                       example: anto
 *                     lastname:
 *                       type: string
 *                       example: Anto
 *                     email:
 *                       type: string
 *                       example: Anto.igihozo@example.com
 *                     profile:
 *                       type: string
 *                       example: http://example.com/new_profile.jpg
 */


 /**
 * @swagger
 * /api/klab/user/delete/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID to delete
 *         schema:
 *           type: string
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "200"
 *                 message:
 *                   type: string
 *                   example: "User deleted successfully"
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "404"
 *                 message:
 *                   type: string
 *                   example: "User not found"
 */

/**
 * @swagger
 * /api/klab/comment/create/{id}:
 *   post:
 *     summary: comment add
 *     tags:
 *       - Comment
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Blog ID to comment
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: " comment added on  blog post"
 *     responses:
 *       200:
 *         description: comment added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "200"
 *                 message:
 *                   type: string
 *                   example: "comment added successfully"
 *       404:
 *         description: Blog post not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "404"
 *                 message:
 *                   type: string
 *                   example: "failed to add comment"
 */


 