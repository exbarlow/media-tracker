import express from "express";
export const userRouter = express.Router();

// Getting all media
userRouter.get("/", (req, res) => {});
// Getting all movies
userRouter.get("/movies", (req, res) => {});
// Getting all books
userRouter.get("/books", (req, res) => {});
// Getting all book series
userRouter.get("/bseries", (req, res) => {});
// Getting all TV series
userRouter.get("/tv", (req, res) => {});
// Getting one movie
userRouter.get("/movies:id", (req, res) => {});
// Getting one book
userRouter.get("/books:id", (req, res) => {});
// Getting one book series
userRouter.get("/bseries:id", (req, res) => {});
// Getting all TV series
userRouter.get("/tv:id", (req, res) => {});
// Creating one movie
userRouter.post("/movies", (req, res) => {});
// Creating one book
userRouter.post("/books", (req, res) => {});
// Creating one book series
userRouter.post("/bseries", (req, res) => {});
// Creating one TV series
userRouter.post("/tv", (req, res) => {});
// Updating one movie
userRouter.patch("/movies:id", (req, res) => {});
// Updating one book
userRouter.patch("/books:id", (req, res) => {});
// Updating one book series
userRouter.patch("/bseries:id", (req, res) => {});
// Updating one TV series
userRouter.patch("/tv:id", (req, res) => {});
// Deleting one movie
userRouter.delete("/movies:id", (req, res) => {});
// Deleting one book
userRouter.delete("/books:id", (req, res) => {});
// Deleting one book series
userRouter.delete("/bseries:id", (req, res) => {});
// Deleting one TV series
userRouter.delete("/tv:id", (req, res) => {});
