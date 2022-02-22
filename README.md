# GraphQL CRUD API 
Example API using Nodejs, MongoDB, GraphQL

## CRUD GRAPH QUERIES

### 1. GETTING ALL POSTS
```
{
  posts{
    _id,
    body,
    createdAt
  }
    
}
```

### 2. GETTING SINGLE POST
```
{
   post(_id: "621512a6b5a86a84b49fea00"){
     _id,
     body,
     createdAt
   }
}
```

### 3. CREATING POST
```
mutation{
   createPost(post: {body:"GraphQL MongoDB Node Express CRUD API"}){
     _id,
     bdy,
     createdAt
   }
}
```


### 4. UPDATING POST
```
mutation{
   updatePost(_id:"621512a6b5a86a84b49fea00", body:"Updated POSTS")
}
```


### 5. DELETING POST
```
mutation {
   deletePost(_id: "621512a6b5a86a84b49fea00"){
   	_id
   }
}
```
