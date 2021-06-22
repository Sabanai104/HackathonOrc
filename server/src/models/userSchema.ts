import { model, Schema} from 'mongoose';
import postSchema from './postSchema';



const UserSchema:any = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    myposts:[{
        type:Schema.Types.Mixed
    }]

    });

export default model('User', UserSchema)