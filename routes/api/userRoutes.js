const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addReaction,
  removeReaction,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// this route is prefixed with /api/users
router.route('/')
      .get(getUsers)
      .post(createUser);

//router.get('/', (req, res) => {
  // inside the route we run our DB logic

  // response to who called us
//})


router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);


router.route('/:userId/reactions').post(addReaction);


router.route('/:userId/reactions/:reactionId').delete(removeReaction);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
