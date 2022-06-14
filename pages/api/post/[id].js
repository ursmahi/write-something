import dbConnect from "../../../db/dbconnect";
import Post from "../../../models/Post";

dbConnect()

export default async(req,res)=>{
    const {
        query :{id},
        method}=req
    switch (method) {
        case 'GET':
            try {
                const post = await Post.findById(id)
                if(!post){
                    res.status(400).json({sucess:false})
                }
                res.status(200).json({sucess:true,post:post})
            } catch (error) {
                res.status(400).json({sucess:false})
            }
            break;
        case 'PUT':
            try {
                const post = await Post.findByIdAndUpdate(id,req.body)
                if(!post){
                    res.status(400).json({sucess:false})
                }
                res.status(200).json({sucess:true,post:post})
            } catch (error) {
                res.status(400).json({sucess:false})
            }
            break;
        case 'DELETE':
            try {
                const post = await Post.deleteOne({_id:id})
                if(!post){
                    res.status(400).json({sucess:false})
                }
                res.status(200).json({sucess:true,post:post})
            } catch (error) {
                res.status(400).json({sucess:false})
            }
            break;               
        default:
            break;
    }
}