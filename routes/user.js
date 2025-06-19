import express from "express";
const router = express.Router();

//Controllers
import { deleteUser, listUser, postUser, readUser, updateRoleUser} from '../controllers/user.js'
//Middleware
import { authCheck } from "../middlewares/auth.middleware.js";

//ENDPOINT http://localhost:8000/api/users
router.get("/users", authCheck, listUser);
//ENDPOINT http://localhost:8000/api/user/role/1
router.patch("/user/role/:id", authCheck, updateRoleUser);
http://localhost:8000/api/user/100
router.delete('/user/:id', authCheck, deleteUser)


//ENDPOINT http://localhost:8000/api/user
router.get("/user", readUser);
//ENDPOINT http://localhost:8000/api/user
router.post("/user", postUser);


//Export
export default router;
