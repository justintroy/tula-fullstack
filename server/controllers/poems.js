import mongoose from "mongoose";

import PoemMessage from '../models/poemMessage.js'

export const getPoems = async (req, res) => {
    try {
        const poemMessages = await PoemMessage.find();
        res.status(200).json(poemMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPoem = async (req, res) => {
    const poem = req.body;
    const newPoem = new PoemMessage({ ...poem, creator: req.userId });

    try {
        await newPoem.save()
        res.status(201).json(newPoem)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatePoem = async (req, res) => {
    const { id: _id } = req.params;
    const poem = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No poem with that ID')

    const updatedPoem = await PoemMessage.findByIdAndUpdate(_id, { ...poem, _id }, { new: true })

    res.json(updatedPoem)
}

export const deletePoem = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No poem with that ID')

    await PoemMessage.findByIdAndRemove(id)

    res.json({ message: 'Poem deleted successfully' })

}

export const likePoem = async (req, res) => {
    const { id } = req.params;

    if(!req.userId) return res.json({ message: 'Unauthenticated' })

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No poem with that ID')

    const poem = await PoemMessage.findById(id)
    const index = poem.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
        poem.likes.push(req.userId);
    } else {
        poem.likes = poem.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPoem = await PoemMessage.findByIdAndUpdate(id, poem, { new: true })

    res.status(200).json(updatedPoem)

}