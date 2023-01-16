let mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean,
    auteur: String,
    note: Number,
    remarque: String,
    matiere: {
        type: String,
        enum: ['Base de données', 'Maths pour Big data', 'Developpement web', 'Programmation java', 'planification de projet'],
        default: 'pending'
    },
    urlSubjectImage: String,
    urlTeacherImage: String
});

AssignmentSchema.plugin(aggregatePaginate);
// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
