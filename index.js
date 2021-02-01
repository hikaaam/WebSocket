var mysql = require('mysql');
var db = "ta20hidroponik";
var user = "ta20ucup";
var pw = "naruto654321";
var moment = require("moment");
const fetch = require("node-fetch");
var firebase = require("firebase")
var https = require('https')

// var firebaseConfig = {
//     apiKey: "AIzaSyCCET55bZ2ZklUZ1zsoQAZkuFcocwhx4xc",
//     authDomain: "hidroponik-f9170.firebaseapp.com",
//     databaseURL: "https://hidroponik-f9170.firebaseio.com",
//     projectId: "hidroponik-f9170",
//     storageBucket: "hidroponik-f9170.appspot.com",
//     messagingSenderId: "923110173321",
//     appId: "1:923110173321:web:405b36232a817bbc86f458",
//     measurementId: "G-B00F6D1FQX"
// };
// firebase.initializeApp(firebaseConfig);

// var { google } = require('googleapis');
// var MESSAGING_SCOPE = 'https://www.googleapis.com/auth/firebase.messaging';
// var SCOPES = [MESSAGING_SCOPE];

// function getAccessToken() {
//     return new Promise(function (resolve, reject) {
//         var key = require('./service-account.json');
//         var jwtClient = new google.auth.JWT(
//             key.client_email,
//             null,
//             key.private_key,
//             SCOPES,
//             null
//         );
//         jwtClient.authorize(function (err, tokens) {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve(tokens.access_token);
//         });
//     });
// }


// var PROJECT_ID = "hidroponik-f9170";
// var HOST = 'fcm.googleapis.com';
// var PATH = '/v1/projects/' + PROJECT_ID + '/messages:send';
// function sendFcmMessage(fcmMessage) {
//     getAccessToken().then(function (accessToken) {
//         var options = {
//             hostname: HOST,
//             path: PATH,
//             method: 'POST',
//             headers: {
//                 'Authorization': 'Bearer ' + accessToken
//             }
//             // … plus the body of your notification or data message
//         };
//         var request = https.request(options, function (resp) {
//             resp.setEncoding('utf8');
//             resp.on('data', function (data) {
//                 console.log('Message sent to Firebase for delivery, response:');
//                 console.log(data);
//             });
//         });
//         request.on('error', function (err) {
//             console.log('Unable to send message to Firebase');
//             console.log(err);
//         });
//         request.write(JSON.stringify(fcmMessage));
//         request.end();
//     });
// }


// var link = "https://fcm.googleapis.com/v1/projects/hidroponik-f9170/messages:send";
// var Fcm_id = "AAAA1u2naok:APA91bGze_11sY51Ra7dFs0wCW_yCGA3P6hOHXnH6Nfk6k-6pmlFfsVR9m8eZt7hDQ1td2wfmBfDL7d0Pack0cZdgUSnCpSZA5DCsd4Buwpeoavlp1gCJOxDt6rzLa75viEkIIAn8c8x";

// function buatData(token, title, body, image) {
//     if (image.length > 1) {
//         var data = {
//             "message": {
//                 "token": token,
//                 "notification": {
//                     "title": title,
//                     "body": body,
//                     "image": image
//                 }
//             }
//         };
//     }
//     else {
//         var data = {
//             "message": {
//                 "token": token,
//                 "notification": {
//                     "title": title,
//                     "body": body
//                 }
//             }
//         };
//     }
//     return data;
// }




// var con = mysql.createConnection({
//     host: "localhost",
//     database: 'hidroponik',
//     user: "root",
//     password: ""
// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("\nDB Connected!");
// });

//   con.query("SELECT * FROM table_users", function (err, result, fields) {  
//     if (err) throw err;
//     console.log(result[0].full_name);
//   });

// function checkNotif(id,val,callback){
//         var query = "SELECT COUNT(*) as count FROM `notifications` WHERE id_prototype ='"+id
//         +"' and status = '"+val+"' and (now()-created_at)<10000";
//         con.query(query, function (err, result, fields) {  
//             if (err) throw err;
//             return callback(result[0].count);
//         });
// }
// function updateTanaman(nama,value,id){
//     if(nama == "nama"){
//        let query = "UPDATE `prototype` SET `nama`='"+value+"' WHERE `prototype_id` = '"+id+"'";
//        con.query(query, function (err, result, fields) {  
//         if (err) throw err;
      
//     });
//     }
//     else if(nama == "jenis"){
//         let query = "UPDATE `prototype` SET `id_kategori`='"+value+"' WHERE `prototype_id` = '"+id+"'";
//         con.query(query, function (err, result, fields) {  
//             if (err) throw err;
       
//         });
//     }
//     else{
//         let query = "UPDATE `prototype` SET `created_at`=CURRENT_TIMESTAMP() WHERE `prototype_id` = '"+id+"'";
//         con.query(query, function (err, result, fields) {  
//             if (err) throw err;
       
//         });
//     }
// }
// function notifpanen(id,token){
    
//         var query = "SELECT p.created_at as created_at, c.panen as panen, p.nama as nama FROM prototype as p inner join categories as c ON c.id = p.id_kategori where p.prototype_id = '"+id+"'";
//         con.query(query, function (err, result, fields) {  
//             if (err) throw err;
//         var created_at = moment(result[0].created_at).format("YYYY-MM-DD");
//         var panen = result[0].panen;
//         var nama = result[0].nama;
//         var tanggal_panen = moment(created_at).add(panen,'days').format("YYYY-MM-DD");
//         var topanen = moment(tanggal_panen).diff(moment().format("YYYY-MM-DD"),'day');
//         console.log("kirim notifikasi panen");  
//         if((panen-topanen)>=(panen-1)){
//             sendFcmMessage(buatData(token,"Hidroponiks Apps","Tanaman "+nama+" sudah saatnya panen!!","http://www.sha.edu.in/wp-content/uploads/2017/08/congratulations_4-600x390.png"))
//         }
//         });
    
// }
// function getToken(id,callback){
//     var query = "SELECT u.token as token, u.id as id FROM `table_users` as u inner join prototype as p WHERE p.prototype_id = '"+id+"'";
//     con.query(query, function (err, result, fields) {  
//         if (err) throw err;
//         return callback(result[0]);
//     });
// }
// function tambahData(idp,uid,isi,status){
//     var query = "INSERT INTO notifications (id_prototype,id_user,isi,status) values ('"+idp+"','"+uid+"','"+isi+"','"+status+"')";
//     con.query(query, function (err, result, fields) {  
//         if (err) throw err;
//     });
// }
// function LastCheck(id,isi,status,image){
//     checkNotif(id,status,function(result){
//         if(result<1){
//             getToken(id,function(result){
//                 tambahData(id,result.id,isi,status);
//                 sendFcmMessage(buatData(result.token,"Hidroponik Apps",isi,image));
//                 if(status=="temp"){
//                 notifpanen(id,result.token);
//                 }
//             })
//         }
//     });
// }

////this is how to query

//App setup
var express = require('express');
var socket = require('socket.io');
var app = express();

// var subdomain = require('express-subdomain');
// app.use(subdomain('hidroponik', router));

// bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());
// var router = require('express').Router();



// var routes = require('./Routes/Routes');

process.on('uncaughtException', function (ex) {
    console.log("" + ex);
});
var server = app.listen(4000, function () {
    console.log('listening to request on port 4000')
});

// routes(app)
// static files
// app.use(express.static('public'));



//socket setup
var io = socket(server);
//io.origins('*:*');
io.set('origins', '*:*');
var clients = [];
var currentData = [];
var RelayTemp = [];
var RelayWl = [];
var Mode = [];
var NilaiWl = [];
var NilaiTemp = [];
var NilaiTds = [];
var NilaiHum = [];
io.on('connection', function (socket) {
    console.log('\nmade socket connection', socket.id);

    socket.on('new user', function (data) {
        console.log('new user : ' + data);
        if (data in clients) {
            delete clients[data];
            socket.nickname = data;
            clients[socket.nickname] = socket;
        } else {
            socket.nickname = data;
            clients[socket.nickname] = socket;

        }


    })
    socket.on('chat', function (data) {
        var id = data._id;
        if (clients.hasOwnProperty(id)) {
            io.to(clients[id]['id']).emit('chat', data);
            console.log(clients[id]['id']);
        } else {
            console.log("\nTarget Device Is Offline or Doesn't exist ");
        }
    });
 
    socket.on('disconnect', function (data) {

        delete clients[socket.nickname];
        delete currentData[socket.nickname];

    });



});

