const noteModel = require('../models/statusModel');

const getNotes = async (req,res) => {
  try {
    const notes = await noteModel.getAllNotes();
    //console.log(notes);
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { getNotes };



