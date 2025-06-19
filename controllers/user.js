import { createError } from "../utils/createError.js";
import prisma from "../config/prisma.js";

export const listUser = async (req, res, next) => {
  try {
    const user = await prisma.user.findMany({
      omit: {
        password: true,
      },
    });
    console.log(user);
    // // 1. Check Email
    // if (true) {
    //   createError(400, "Email already in use!");
    //   throw new Error("Email already in use!");
    // } else {
    //   throw new Error("Password is invalid.");
    // }
    res.json({ message: "This is List All User", result: user });
  } catch (error) {
    next(error);
  }
};

export const updateRoleUser = async (req, res, next) => {
  try {
    // 1. Read params & body
    // console.log(req.params.id)
    const { id } = req.params;
    const { role } = req.body;
    console.log(id, role);
    res.json({ message: "This is Update Role User" });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ message: `This is DELETE user ${id}` });
  } catch (error) {
    next(error);
  }
};

export const readUser = (req, res) => {
  //code body
  res.json({ message: "This is GET User" });
};

export const postUser = (req, res) => {
  //code body
  res.json({ message: "This is POST user" });
};
