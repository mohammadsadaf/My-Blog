import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000; 


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

let formData = {};

app.get('/', (req, res) =>{
    res.render('index.ejs');
});

app.get('/contact', (req, res)=>{
    res.render('pages/contact.ejs');
  });

app.get('/about', (req, res)=>{
    res.render('pages/about.ejs');
});

app.get('/posts', (req, res)=>{
    res.render('pages/posts.ejs');
});


app.post('/submit', (req, res) =>{
    const { name, title, text } = req.body;
    formData = { name, title, text };
    res.render('index.ejs', {name,  title, text});
});

app.get('/edit', (req, res) => {
    res.render('pages/edit.ejs', formData);
});

app.get('/delete', (req, res) => {
    formData = {};
    res.redirect('/');
});


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
});