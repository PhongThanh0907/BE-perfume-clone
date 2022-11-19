import { Response, Request } from "express";
import {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
  loginUser,
} from "../service/userService";
const asyncHandler = require("express-async-handler");

const getUsersHandler = asyncHandler(async (req: Request, res: Response) => {
  const users = await getUsers();
  res.status(200).json(users);
});

const getUserHandler = asyncHandler(async (req: Request, res: Response) => {
  const user = await getUserById(req.params.id);
  res.status(200).json(user);
});

const createUserHandler = asyncHandler(async (req: Request, res: Response) => {
  const createdUser = await createUser(req.body);
  res.status(200).json(createdUser);
});

const deleteUserHandler = asyncHandler(async (req: Request, res: Response) => {
  await deleteUser(req.params.id);
  res.status(200).json({
    message: `User ${req.params.id} have been deleted`,
  });
});

const updateUserHandler = asyncHandler(async (req: Request, res: Response) => {
  const user = await updateUser(req.params.id, req.body);
  res.status(200).json(user);
});

const loginUserHandler = asyncHandler(async (req: Request, res: Response) => {
  const user = await loginUser(req.body.email, req.body.password);
  res.status(201).json(user);
});

module.exports = {
  getUsersHandler,
  createUserHandler,
  getUserHandler,
  deleteUserHandler,
  updateUserHandler,
  loginUserHandler,
};
