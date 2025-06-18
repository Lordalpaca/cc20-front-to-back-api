import express from "express";
const router = express.Router();

//Controllers
import { deleteUser, listUser, postUser, readUser, updateRoleUser} from '../controllers/user.js'

//ENDPOINT http://localhost:8000/api/users
router.get("/users", listUser);
//ENDPOINT http://localhost:8000/api/user
router.get("/user", readUser);
//ENDPOINT http://localhost:8000/api/user
router.post("/user", postUser);
//ENDPOINT http://localhost:8000/api/user/role/1
router.patch("/user/role/:id", updateRoleUser);
http://localhost:8000/api/user/100
router.delete('/user/:id', deleteUser)

//Export
export default router;
