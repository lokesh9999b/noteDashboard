const sql = require('../Config/config1');

const getAllNotes = async () => {
  try {
    const request = new sql.Request();
    const result = await request.query('SELECT * FROM note_master');
   // console.log(result.recordset);
    return result.recordset;
  } catch (err) {
    throw new Error('Database query error');
  }
};

module.exports = { getAllNotes };
