// Get all Users
/**
 * @swagger
 * /api/user/selectUsers:
 *   get:
 *     tags:
 *       - Get All Users
 *     description: Returns all Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of posts
 *         schema:
 *           type: array
 *       500:
 *         description: Internal server error
 */

// Get all blogs
/**
 * @swagger
 * /api/blog/select:
 *   get:
 *     tags:
 *       - Get All Blogs
 *     description: Returns all Blogs
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of posts
 *         schema:
 *           type: array
 *       500:
 *         description: Internal server error
 */

// Insert blogs
/**
 * @swagger
 * /api/blog/create:
 *   post:
 *     tags:
 *       - Insert New Blog
 *     description: adding new blog successfully
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of posts
 *         schema:
 *           type: array
 *       500:
 *         description: Internal server error
 */

// Delete blog by Id
/**
 * @swagger
 * /api/blog/delete/{Id}:
 *   delete:
 *     tags:
 *       - Delete Blog
 *     description: Delete a blog by ID
 *     parameters:
 *       - name: blogId
 *         in: path
 *         description: ID of the blog to delete
 *         required: true
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Blog deleted successfully
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Internal server error
 */




