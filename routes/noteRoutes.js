import { Router } from "express";
import {
    createNote,
    getNotes,
    updateNotes,
    deleteNote
} from "../controllers/noteController.js";

const router = Router();

router.route("/notes").post(createNote);
router.route("/notes").get(getNotes);
router.route("/notes/:id").put(updateNotes);
router.route("/notes/:id").delete(deleteNote);

export default router;