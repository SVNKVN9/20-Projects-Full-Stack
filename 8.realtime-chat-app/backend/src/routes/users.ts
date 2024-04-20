import { Router } from "express";
import { getUser } from "../controller/users";

const router = Router()

router.get('/:id', getUser)

export default router