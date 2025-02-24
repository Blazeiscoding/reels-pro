import mongoose, { Schema , model, models} from "mongoose";
import User from "./User";
export const VIDEO_DIMENSTIONS = {
    width : 1080,
    height : 1920,
} as const 
export interface IVideo {
    _id?: mongoose.Types.ObjectId
    title: string;
    uploadedBy: mongoose.Types.ObjectId;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    controls?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    transformation?: {
        height: number;
        width: number;
        quality?: number;
    }
}

const videoSchema = new Schema<IVideo>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    thumbnailUrl: {
        type: String,
        required: true,
    },
    uploadedBy: {
        type: Schema.Types.ObjectId, // Change to ObjectId
        ref: 'User', // Reference the User model
        required: true,
    },

    controls: {
        type: Boolean,
        default: true,
    },
    transformation:{
        height: {
            type: Number,
            default: VIDEO_DIMENSTIONS.height,
        },
        width: {
            type: Number,
            default: VIDEO_DIMENSTIONS.width,
        },
        quality: {
            type: Number,
            min:1,
            max:100
        }
    }
},{
    timestamps: true,})

const Video = models?.Video || model<IVideo>("Video", videoSchema);

export default Video;
