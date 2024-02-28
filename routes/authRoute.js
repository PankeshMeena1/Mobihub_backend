const express = require ("express");
const { createUser, loginUserCtrl, getalluser, getauser, getauserdelete, getauserupdated,ManageAddress} = require("../controller/userCtrl");
const {ProductAdd, DisplayProduct} = require("../controller/AdminControler")
const router = express.Router();
router.post('/resister', createUser);
router.post('/loginuserctrl', loginUserCtrl);
router.get('/all_user', getalluser);
router.get('/:id', getauser);
router.delete('/:id', getauserdelete);
router.put('/:id', getauserupdated);
router.post('/ProdoctAdd', ProductAdd);
router.get('/DisplayProduct', DisplayProduct);
router.post('/ManagedlyAddress', ManageAddress);
module.exports = router;