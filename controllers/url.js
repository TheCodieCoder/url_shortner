import express from "express"
import { nanoid } from "nanoid"
import { URL } from "../models/url.js"

export const generateShortURL = async (req, res) => {
    const body = req.body
    if(!body.url) {             // checks if user entered redirectURL or not
        res.status(400).json({ message: "URL NOT FOUND" })
    }

    const shortID = nanoid(6)               // generates random 6-characters nanoID

    await URL.create({              // adds to DB
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: []
    })

    res.status(201).json({
        message: "ShortID",
        shortId: shortID
    })
}

export const getShortenedURL = async (req, res) => {
    const { shortId } = req.params
    const entry = await URL.findOneAndUpdate({ shortId }, { 
        $push : { visitHistory: {timestamp: Date.now()} }
     })

     res.redirect(entry.redirectURL)
}

export const getAnalytics = async (req, res) => {
    const { shortId } = req.params
    const result = await URL.findOne({ shortId })
    return res.json ( {
        totalClicks : result.visitHistory.length,
        analytics: result.visitHistory
    } )
}

export const getHome = (req, res) => res.render("home")
export const getAbout = (req, res) => res.render("about")
export const getAnalyticsPage = (req, res) => res.render("analytics")
