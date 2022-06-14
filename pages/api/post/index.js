import dbConnect from "../../../db/dbconnect"
import dbconect from "../../../db/dbconnect"
import Post from "../../../models/Post"

dbConnect()

const out=  async(req,res)=>{
    const {method}=req

    switch (method) {
        case 'GET':
            try {
                const posts = await Post.find({})
                res.status(200).json({sucess:true, posts:posts})
            } catch (error) {
                res.status(400).json({sucess:false})
            }
            break;
        case 'POST':
            try {
                const post = await Post.create(req.body)
                res.status(200).json({sucess:true, post:post})
            } catch (error) {
                res.status(400).json({sucess:false})
            }
            break;
        default:
            break;
    }

}
export default out;