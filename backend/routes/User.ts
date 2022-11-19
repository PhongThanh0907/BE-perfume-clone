
import express from 'express'
import { protect, verifyTokenAndAdmin } from '../model/authMiddleware';

const router = express.Router();
const { getUsersHandler, createUserHandler, deleteUserHandler, getUserHandler, updateUserHandler, loginUserHandler } = require('../controller/User')

router.get("/",verifyTokenAndAdmin, getUsersHandler);

router.get("/:id",protect, getUserHandler)

router.post("/" , createUserHandler)

router.delete("/:id",protect, deleteUserHandler)

router.put("/:id",protect, updateUserHandler)

router.post("/login", loginUserHandler)

module.exports = router;
