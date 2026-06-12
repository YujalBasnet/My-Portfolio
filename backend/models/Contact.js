const db = require("../config/db");


const Contact = {


create:(data,callback)=>{


const sql = 
`
INSERT INTO contacts(name,email,message)

VALUES(?,?,?)
`;


db.query(

sql,

[
data.name,
data.email,
data.message
],

callback

);


},



getAll:(callback)=>{


const sql =
`
SELECT * FROM contacts
ORDER BY created_at DESC
`;


db.query(sql,callback);


}


};


module.exports = Contact;