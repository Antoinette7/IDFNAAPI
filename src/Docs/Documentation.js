/**
 * @swagger
 * /api/klab/user/signup:
 *   post:
 *     summary: Create a new user with image upload.
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 description: First name of the user.
 *               lastname:
 *                 type: string
 *                 description: Last name of the user.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email address of the user.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password.
 *               profile:
 *                 type: string
 *                 format: binary
 *                 description: User's profile picture.
 *     responses:
 *       '201':
 *         description: User created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Status message (e.g., '201').
 *                 message:
 *                   type: string
 *                   description: A message indicating success.
 *                 data:
 *                   type: object
 *                   description: The user data.
 *       '500':
 *         description: Failed to create user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Status message (e.g., '500').
 *                 message:
 *                   type: string
 *                   description: A message indicating failure.
 *                 error:
 *                   type: string
 *                   description: A description of the error.
 */



/**
 * @swagger
 * /api/klab/user/login:
 *   post:
 *     summary: Log in a user with email and password.
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email address of the user.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password.
 *     responses:
 *       '200':
 *         description: User logged in successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Status message (e.g., '200').
 *                 message:
 *                   type: string
 *                   description: A message indicating success.
 *                 users:
 *                   type: object
 *                   description: User data.
 *                 token:
 *                   type: string
 *                   description: Authentication token.
 *       '404':
 *         description: User not found or incorrect password.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Status message (e.g., '404').
 *                 message:
 *                   type: string
 *                   description: A message indicating failure.
 */




