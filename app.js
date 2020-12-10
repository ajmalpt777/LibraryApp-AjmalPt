const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const nav = [
    {
        link:'/books',name:'BOOKS'
    },
    {
        link:'/authors',name:'AUTHORS'
    },
    {
        link:'/signin',name:'SIGN IN'
    },
    {
        link:'/signup',name:'SIGN UP'
    },
    {
        link:'/addbook',name:'ADD BOOK'
    },
    {
        link:'/addauthor',name:'ADD AUTHOR'
    },
    {
        link:'/home',name:'HOME'
    }
]
const booksRouter= require('./src/routes/bookRoutes')(nav)
const authorsRouter= require('./src/routes/authorsRoutes')(nav)
const signinRouter= require('./src/routes/signinRoutes')(nav)
const signupRouter= require('./src/routes/signupRoutes')(nav)


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);

app.get('/', function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});

app.get('/home', function(req,res){
    res.render("home",
    {
        nav,
        title:'Library'
    });
});



app.listen(port,()=>{
    console.log("Server Ready at "+ port)
});


