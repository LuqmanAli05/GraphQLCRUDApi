import express from 'express'
import { graphqlHTTP } from "express-graphql"
import graphQlSchema from "./schema/index.js"
import {posts, post, createPost, updatePost, deletePost} from "./resolvers/index.js"
import mongoose from "mongoose"

const app = express()

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: {posts, post, createPost, updatePost, deletePost},
    graphiql: true,
  })
)

const uri = 'mongodb://127.0.0.1:27017/graphqldb'
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
  .connect(uri, options)
  .then(() => app.listen(4000, console.log("Server is listening on 4000")))
  .catch(error => {
    throw error
  })