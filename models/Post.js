import mongoose, { model, models } from "mongoose";

const PostSchema = new mongoose.Schema({
    newPost:{
        type:String,
        required:[true,"Should Not be blank"],
        maxlength:[256,"Only 256 Character allowed"]
    }
})

const Post = models.Post || model('Post',PostSchema)
export default Post;