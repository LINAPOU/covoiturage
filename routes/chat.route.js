import express from "express";
import {
  getChats,
  getChat,
  addChat,
  readChat,initiateChat,} from "../Controllers/chat.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, getChats);
router.get("/:id", verifyToken, getChat);
router.post("/", verifyToken, addChat);
router.put("/read/:id", verifyToken, readChat);
router.post("/initiate/:receiverId", verifyToken, initiateChat);

export default router;