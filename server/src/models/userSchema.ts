import {Schema, model, Document} from 'mongoose';
import * as bcrypt from "bcryptjs";

interface IUser extends Document {
    name: string;
    userName: string;
    email: string;
    password:string;
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String, 
        required: true,
        select: false
    }
});

userSchema.pre<IUser>('save', async function (next) {
    const user = this;

    if (!user.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(this.password, salt);

    this.password = hash;

    next();
});

export default model('User', userSchema);