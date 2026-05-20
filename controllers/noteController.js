import { Notes } from "../models/note.js";
import mongoose from "mongoose";

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res
                .status(400)
                .json({ error: "Title and content are required...!! " })
        }
        console.log("Notes created", `${title}. ${content}`)

        const note = await Notes.create({
            title,
            content
        })

        res.status(201).json({
            message: "Note Created Succesfully",
            note
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }
}

export const getNotes = async (req, res) => {
    try {
        const notes = await Notes.find();
        return res.status(200).json({
            message: "Notes fetched successfully",
            notes: notes
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
}

export const updateNotes = async (req, res) => {
    try {
        const _id = req.params.id;
        const { title, content } = req.body;

        if (!title || !content) {
            return res
                .status(400)
                .json({ error: "Title and content are required to update...!! " })
        }

        const note = await Notes.findByIdAndUpdate(
            _id,
            req.body,
            { new: true }
        );

        if (!note) {
            return res
                .status(404)
                .json({ message: "Invalid id or note not found" })
        }
        return res
            .status(200)
            .json({
                message: "Note updated Successfully....!",
                note: note
            })
    }
    catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
}

export const deleteNote = async (req, res) => {
    try {
        const _id = req.params.id;
        
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({
                message: "Invalid MongoDB ID",
            });
        }

        const note = await Notes.findByIdAndDelete(_id);

        if (!note) {
            return res
                .status(404)
                .json({ message: "Invalid id or note not found" })
        }

        return res
            .status(200)
            .json({
                message: "Note deleted Successfully....!",
                note: note
            })

    }
    catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
}