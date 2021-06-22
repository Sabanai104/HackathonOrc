import { model, Schema } from "mongoose";



const PostSchema = new Schema({

    posts:{
        type:String
    },
})

export default model('Post', PostSchema)