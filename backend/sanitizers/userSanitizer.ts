import { emailValid } from "../schema/userSchema";
import { UserType } from "../types/userType";
import HttpException from "../utils/httpException";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const sanitizeUser = async (user: UserType): Promise<UserType> => {
  let sanitizedUser = <UserType>{};

  sanitizedUser.email = sanitizeEmail(user.email);
  sanitizedUser.isAdmin = sanitizeAdmin(user.isAdmin);
  sanitizedUser.userName = sanitizeNameUser(user.userName);
  sanitizedUser.password = await sanitizePassword(user.password);

  return sanitizedUser;
};

export const sanitizeLoginUser = async (
  email: string,
  password: string
): Promise<UserType> => {
  let sanitizedUser = <UserType>{};
  sanitizedUser.email = sanitizeEmail(email);
  sanitizedUser.password = await sanitizePassword(password);

  return sanitizedUser;
};

const sanitizeNameUser = (userName: string): string => {
  if (userName === undefined) {
    throw new HttpException("Name User is required", 400);
  }
  if (typeof userName !== "string") {
    throw new HttpException("Name User is not string", 400);
  }
  userName = userName.trim();
  if (userName.length < 3) {
    throw new HttpException("Name User must be at least 3 characters", 400);
  }
  if (userName.length > 50) {
    throw new HttpException("Name User must be less then 50 characters", 400);
  }
  return userName;
};

const sanitizeAdmin = (isAdmin: boolean): boolean => {
  if (!isAdmin) isAdmin = false;
  return isAdmin;
};

const sanitizePassword = async (password: string): Promise<string> => {
  if (password === undefined) {
    throw new HttpException("password is required", 400);
  }
  if (typeof password !== "string") {
    throw new HttpException("password is not string", 400);
  }
  password = password.trim();
  if (password.length < 6) {
    throw new HttpException("password must be at least 6 characters", 400);
  }
  if (password.length > 50) {
    throw new HttpException("password must be less then 50 characters", 400);
  }
  return password;
};

const sanitizeEmail = (email: string): string => {
  if (email === undefined) {
    throw new HttpException("email is required", 400);
  }
  if (typeof email !== "string") {
    throw new HttpException("email is not string", 400);
  }
  email = email.trim();
  if (email.length < 3) {
    throw new HttpException("email must be at least 3 characters", 400);
  }
  if (email.length > 50) {
    throw new HttpException("email must be less then 50 characters", 400);
  }
  if (!email.match(emailValid)) {
    throw new HttpException("Please add a valid email", 500);
  }
  return email;
};
