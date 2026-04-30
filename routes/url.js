import express from "express"
import { generateShortURL, getShortenedURL, getAnalytics, getHome, getAbout, getAnalyticsPage } from "../controllers/url.js"

export const router = express.Router()

// Page routes
router.route("/").get(getHome)
router.route("/about").get(getAbout)
router.route("/analytics").get(getAnalyticsPage)

// API routes
router.route("/url").post(generateShortURL)
router.route("/url/:shortId/analytics").get(getAnalytics)   
router.route("/url/:shortId").get(getShortenedURL)          
router.route("/:shortId").get(getShortenedURL)               
