const express = require('express');
const booksRouter = express.Router();
function router(nav){
    var books=[
        {
            title:'Harry Potter',
            auther:'J K Rowling',
            genre:'Fantasy',
            img:"b1.jpg"
        },
        {
            title:'The Fault In Our Stars',
            auther:'John Green',
            genre:'Novel',
            img:"b2.jpg"
        },
        {
            title:'The Alchemist',
            auther:'Paulo Coelho',
            genre:'Novel',
            img:"b3.jpg"
        },
        {
            title:'Pride And Prejudice',
            auther:'Jane Austen',
            genre:'Novel',
            img:"b4.jpg"
        }
    ]


 
    
    booksRouter.get('/addbook', function(req,res){
        res.render("addbook",
        {
            nav,
            title:'Library',
            action: "/books"
        });
    });

    booksRouter.get('/:id', function(req,res){
        const id= req.params.id
        res.render("book",
        {
            nav,
            title:'Book',
            book:books[id],
            action: '#'
        });
    });
    
    booksRouter.get('/', function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
        });
    });
    
    return booksRouter;
}

module.exports=router;