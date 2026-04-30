import mongoose from "mongoose"

// schema

const schema = mongoose.Schema({
    shortId: {                              // shortId
        type: String,
        required: true,
        unique: true
    },

    redirectURL: {                              // URL to which user will get redirected
        type: String,
        required: true
    },

    visitHistory: [ { timestamp: { type: Number } } ]  // array of timestamps (url was clicked at)
}, { timestamps: true })

// model

export const URL = mongoose.model("url", schema)
