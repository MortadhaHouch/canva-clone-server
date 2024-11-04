const {model,Schema} = require("mongoose")
const postSchema = new Schema({
    content:{
        type:String,
        required:true
    },
    from:{
        type:Schema.Types.ObjectId,
    },
    likes:{
        type:Number,
        default:0
    },
    dislikes:{
        type:Number,
        default:0
    }
})
module.exports = model("Post",postSchema)