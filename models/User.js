const {model,Schema} = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    posts:{
        type:[Schema.Types.ObjectId],
    },
    likedPosts:{
        type:[Schema.Types.ObjectId],
    },
    dislikedPosts:{
        type:[Schema.Types.ObjectId],
    },
    feedbacks:{
        type:[Schema.Types.ObjectId],
    },
    likedFeedbacks:{
        type:[Schema.Types.ObjectId],
    },
    dislikedFeedbacks:{
        type:[Schema.Types.ObjectId],
    },
    comments:{
        type:[Schema.Types.ObjectId],
    },
    likedComments:{
        type:[Schema.Types.ObjectId],
    },
    dislikedComments:{
        type:[Schema.Types.ObjectId],
    },
    avatar:{
        type:Schema.Types.ObjectId
    }
},{
    timestamps:true
})
userSchema.pre("save",async function(){
    try {
        if(this.isNew || this.isModified("password")){
            const salt  = await bcrypt.getSalt(10)
            const hashedPassword = bcrypt.hash(this.password,salt)
            this.password = hashedPassword
        }
    } catch (error) {
        console.log(error);
    }
})
module.exports = model("user",UserSchema)