const express = require('express');
const router = express.Router();
const members=require('../../members').Article;
const uuid=require('uuid')




// Gets All Members
router.get('/', (req, res) => res.json(member));

// Get Single Member
router.get('/:v/:name', (req, res) => {
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

router.post('/',(req,res) => {
  const newMember = {
    id : uuid.v4,
    name:req.body.name,
    email:req.body.email,
    status:'active'
  }

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({msg :'Please include name & emailAddress'})
  }
  members.push(newMember);
  res.json(members)
})

module.exports = router;