const {model,Schema} = require("mongoose")
const fileSchema = new Schema({
    filename: {type: String, required: true},
    filePath: {type: String, required: true},
},{
    timestamps: true,
})
module.exports = model("File",fileSchema)