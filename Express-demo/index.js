const express = require('express');
const app = express();
const exphbs=require('express-handlebars');
const path=require('path');
const members=require('./members');
const cors=require('cors');


// app.get('/',(req,res) => res.end("<h1>hello</h1>"))

// app.get('/api/members',(req,res) => res.json(members))

// app.get('/api', (req,res) => {
//   const vehicle=req.query.v;
//   const person=req.query.name;

//   const found = members.some(member => member.v === vehicle);
//   if(found){
//     res.json(members.filter(member => member.v === vehicle ));
//   } else {
//     res.status(400).json({ msg: `No member with the id of ${req.query.id}` });
//   }
// })


app.use(cors())

// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members
  })
);
app.get('/api/members', cors(),(req, res) => res.json(members));

app.get('/api/members/:v/:name', (req, res) => {
  let id=parseInt(req.params.id);
  let v=req.params.v;
  let name=req.params.name;
  
  const found = members.some(member => member.v === v || member.id===name);

  if (found) {
    res.json(members.filter(member => member.v === v || member.id===name));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.query.id}` });
  }
});


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));


// // Get Single Member
// app.get('/api/members/:v/:name', (req, res) => {
    
//     const found = members.some(member => member.v === req.params.v );
  
//     if (found) {
//       res.json(members.filter(member => member.v === req.params.v ));
//     } else {
//       res.status(400).json({ msg: `No member with the id of ${req.query.id}` });
//     }
//   });


// //set static folder
// app.use(express.static(path.join(__dirname,'public')));

// //members API routes
// app.use('/api/members',require('./routes/api/members'))

 const PORT = 5000;

app.listen(5000,console.log(`server is running on ${PORT}`))
