import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: {
                public_id: String,
                url: String
            },
            required: [true, 'Video is required!'],
        },
        thumbnail: {
            type: {
                public_id: String,
                url: String
            },
            required: [true, 'Thumbnail is required!'],
        },
        title: {
            type: String,
            required: [true, 'Title is required!'],
        },
        description: {
            type: String,
            required: [true, 'Desecription is required!'],
        },
        duration: {
            type: Number,
            required: [true, 'Duration is required!'],
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }

    }, { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);