const express = require("express");
const path = require("path");
const http = require('http');
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./utils/users');
let URI = "mongodb+srv://deepank:deepank@cluster0.wopim.mongodb.net/deepank?retryWrites=true&w=majority"
mongoose.connect( URI, {useNewUrlParser: true, useUnifiedTopology: true});


const fs = require("fs");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const port = process.env.PORT ||3000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded(true))

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected To Database");
});
const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
  });
  const messages = mongoose.model('Message', messageSchema);
  const credentialSchema = new mongoose.Schema({
    username: String,
    password:String,
    admin:{
       type: Boolean,
    default:false},
    });
    const credential = mongoose.model('User', credentialSchema);

app.get('/',(req,res)=>{
res.status(200).render('index')
});
app.get('/signup',(req,res)=>{
    res.status(200).render('signup')
    })
app.get('/index.html',(req,res)=>{
    res.status(200).render('index')
});
app.get('/calculator',(req,res)=>{
    res.status(200).render('calculator')
});
app.get('/rgb',(req,res)=>{
    res.status(200).render('rgb')
});
app.get('/login',(req,res)=>{
    res.status(200).render('login')
});
app.get('/chat.html',(req,res)=>{
    const botName = 'Rx Bot';

// Run when client connects
io.on('connection', socket => {
  socket.on('joinRoom', ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user
    socket.emit('message', formatMessage(botName, 'Welcome to Rx - Chat!'));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        'message',
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // Send users and room info
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });
  });

  // Listen for chatMessage
  socket.on('chatMessage', msg => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit('message', formatMessage(user.username, msg));
  });

  // Runs when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        'message',
        formatMessage(botName, `${user.username} has left the chat`)
      );

      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    }
  });
});

    res.status(200).render('chat')
});
app.post('/signup',(req,res)=>{
    var signup_data = new credential(req.body);
    signup_data.save().then(()=>{
     res.status(200).render('login')
    }).catch(()=>{
     res.status(200).render('404')
});





});
app.post('/login',(req,res)=>{
    const username_ = req.body.username_;
    const password_ = req.body.password_;
    credential.findOne({username : username_},
       function(err,userFound){
           if(err){
               console.log(err);
               res.send("user not found");
           }
           
           else {
            
           if(userFound){
               if(userFound.password === password_ && userFound.admin){
                 
                   credential.find({username: username_},
                       function(err,foundDetails){
                           if(err){
                               console.log(err);
                               res.send("not found");
                           }else{
                                  credential.find({},function(err,foundUserDetails){
                                    if(err){
                                       res.send("User Not Found")
                                    }
                                    else{
                                      let userlist = foundUserDetails;
                                   
                                messages.find({},function(err,foundData){
                                    if(err)
                                    {
                                        console.log("error in post");
                                    }
                                    else{
                                        res.status(200).render('messages',{foundData,userlist})
                                    }
                                          
                                }) }});
                              
                           
                           } })   }
                           else{
                               res.status(200).render('chat_home')
                           }
                        
                        }  } } );
});
app.post('/', (req, res)=>{
    var myData = new messages(req.body);
       myData.save().then(()=>{
        res.status(200).render('index')
       }).catch(()=>{
        res.status(200).render('404')
});
});
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// app.listen(port, ()=>{
//     console.log(`The application started successfully on port ${port}`);
// });