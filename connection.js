const mongoose = require('mongoose');

async function connection() {
    try{
        await mongoose.connect('mongodb://localhost:27017/batch-2-20-sept');
        console.log("Connection Created")
    }catch(err){
        console.log(err)
    }
}
module.exports = connection