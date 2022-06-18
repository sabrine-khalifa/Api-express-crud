const mongoose  = require('mongoose')
const etudiantSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    prenom : {
        type : String,
        required : true
    },
    email : {
        type : string,
        required : true
    },
    numTelephone : {
        type : String,
        required : true
    },
    filiere : {
        type : String,
        required : true
    },
});


module.exports = Etudiant = mongoose.route("etudiant", etudiantSchema)