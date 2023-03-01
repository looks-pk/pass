const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
        title: {type: String, required:true},
        slug: {type: String, required:true, unique: true },
        desc: {type: String, required:true},
        sdesc: {type: String, required:true},
        img: {type: String, required:true},
        category: {type: String, required:true},
        size: {type: String},
        color: {type: String},
        price: {type: Number, required:true},
        availbleQty: {type: Number, required:true}

}, {timestamps: true});

export default mongoose.models.product || mongoose.model("product", productSchema);