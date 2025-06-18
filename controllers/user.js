import { createError } from "../utils/createError.js";

export const listUser = (req, res, next) => {
  try {
    // 1. Check Email
    if (true) {
      createError(400, 'Email already in use!')
      throw new Error('Email already in use!')
    } else {
      throw new Error("Password is invalid.")
    }
    res.json({ message: "This is GET Users" });
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

export const updateRoleUser = (req, res) => {
  // console.log(req.params.id)
  const { id } = req.params;
  console.log(id);
  res.json({ message: "This is Update Role User" });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  res.json({ message: `This is DELETE user ${id}` });
};
