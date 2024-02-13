const express = require ("express");
const { createUser, loginUserCtrl, getalluser, getauser, getauserdelete, getauserupdated } = require("../controller/userCtrl");
const router = express.Router();
router.post('/resister', createUser);
router.post('/loginuserctrl', loginUserCtrl);
router.get('/all_user', getalluser);
router.get('/:id', getauser);
router.delete('/:id', getauserdelete);
router.put('/:id', getauserupdated);
module.exports = router;