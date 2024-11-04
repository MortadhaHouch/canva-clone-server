const {model,Schema} = require("mongoose")
const feedbackSchema = new Schema({
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
    },
    replies:{
        type:[Schema.Types.ObjectId],
    }
})
module.exports = model("feedback",feedbackSchema)