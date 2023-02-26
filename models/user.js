const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
        name: {type: String, required:true},
        email: {type: String, required:true, unique: true },
        password: {type: String, required:true},
        adress: {type: String, default: ''},
        city: {type: String, default: ''},
        state: {type: String, default: ''},
        mobile: {type: String, default: ''}
        
}, {timestamps: true} );

export default mongoose.models.user || mongoose.model("user", userSchema);