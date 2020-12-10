const express = require('express');
const authorsRouter = express.Router();
function router(nav){
    var authors=[
        {
            name:'Paulo Coelho ',
            genre:'Poet',
            book1:'The Alchemist',
            book2:'Eleven Minutes',
            book3:'The Pilgrimage',
            img:"a1.jpg"
        },
        {
            name:'Leo Tolstoy',
            genre:'Novelist',
            book1:'War And Peace',
            book2:'Anna Karenina',
            book3:'Childhood',
            img:"a2.jpg"
        },
        {
            name:'J K Rowling',
            genre:'Fantasy',
            book1:'Harry Potter',
            book2:'The Casual Vacancy',
            book3:'Troubled Blood',
            img:"a3.jpg"
        },
        {
            name:'Vaikam Muhammed Basheer',
            genre:'Novelist',
            book1:'Balyakala Sakhi',
            book2:'Pathummayude Aadu',
            book3:'Mathilukal',
            img:"a4.jpg"
        }
    ]
    
    
  authorsRouter.get('/addauthor', function(req,res){
    res.render("addauthor",
    {
        nav,
        title:'Library',
        action: "/authors"
    });
   });

    authorsRouter.get('/:id', function(req,res){
        const id= req.params.id
        res.render("author",
        {
            nav,
            title:'Library',
            author:authors[id]
        });
    });
    
    authorsRouter.get('/', function(req,res){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors
        });
    });
    
    return authorsRouter;
}

module.exports=router;