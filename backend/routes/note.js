const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/getuser')
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Notes using: GET "/api/notes/fetchnotes". Login required
router.get('/fetchnotes', fetchUser, async (req, res) => {
   
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
     console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/addnote', fetchUser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        
        // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

        try {
            const { title, description, tag } = req.body;

            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()

            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

    // ROUTE 3: update the existing Note using: PUT "/api/notes/updatenote". Login required

    router.put('/updatenote/:id', fetchUser, async (req, res) => {
        const {title, description, tag} = req.body
  try{
        // create a new note object
        const newNote = {}
        if(title){newNote.title = title}
        if(description){newNote.description = description}
        if(tag){newNote.tag = tag}

        // find note by id to update in database
        const note = await Note.findById(req.params.id)
        if(!note){
            return res.status(404).send('Note not found')
        }
        
        // checking that the note is of its own user or not
        if(note.user.toString() !== req.user.id){
            return res.status(401).send('Access denied!')
        }

        // updaing note
        const updateNote = await Note.findByIdAndUpdate(req.params.id , {$set : newNote}, {new: true})
        res.json({updateNote})
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

    })

    //  ROUTE 4: deleting the existing Note using: DELETE "/api/notes/deletenote". Login required
    
    router.delete('/deletenote/:id', fetchUser, async (req, res) => {
    try{
         // find note by id to update in database
         let note = await Note.findById(req.params.id)
         if(!note){
             return res.status(404).send('Note not found')
         }

          // checking that the note is of its own user or not
        if(note.user.toString() !== req.user.id){
            return res.status(401).send('Access denied!')
        }

        // deleting note
         await Note.findByIdAndDelete(req.params.id)
        res.json('successfully deleted')
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    })
module.exports = router;


