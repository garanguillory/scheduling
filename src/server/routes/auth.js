// require('dotenv').load();
// var express = require('express');
// var router = express.Router();
// var knex = require('../../../db/knex.js');
// var queries = require("../../../queries");
// var moment = require('moment');
// var jwt = require('jwt-simple');
// var bcrypt = require('bcrypt');

// // change to signup
// router.post('/register', function(req, res, next) {
// // ensure user does not already exist
//   queries.CheckEmail(req.body.email)
//     .then(function (response) {
//     	console.log("response: ",response)
//         if (response.length) {
//             return res.status(409).json({
//                 status: 'fail',
//                 message: 'Email in use'
//             });
//         }
//         // create new user
//         req.body.password = hashing(req.body.password);
//         queries.NewUser(req.body)
//         .then(function(newUser) {
//             newUser = newUser[0]
//             var token = generateToken(newUser);
//             res.status(200).json({
//                 status: 'success',
//                 data: {
//                     token: token,
//                     id: newUser.id,
//                     email: newUser.email
//                 }
//             });
//         })
//         .catch((err) => {
//             console.log(err);
//             res.send(err);
//         })
//     })
// });

// router.post('/login', function (req, res, next) {
//     // ensure that user exists
//     queries.Users().where('email', req.body.email)
//     .then(function (user) {
//     	// console.log("user: ", user);
//         user = user[0];
//         console.log("user: ", user);
//         console.log("user.password: ", user.password);
//         if (!user) {
//             return res.status(401).json({
//                 status: 'fail',
//                 message: 'Email/Password combination not found. Try again.'
//             });
//         }
//         if (comparePassword(req.body.password, user.password)) {
//             var token = generateToken(user);
//             res.status(200).json({
//                 status: 'success',
//                 data: {
//                     token: token,
//                     id: user.id,
//                     email: user.email
//                 }
//             });
//         } else {
//             return res.status(401).json({
//                 status: 'fail',
//                 message: 'Email/Password combination incorrect. Try again.'
//             });
//         }
//     })
//     .catch(function (err) {
//         return next(err);
//     });
// });



// // // ** helpers ** //

// // generate a token
// function generateToken(user) {
//   var payload = {
//     exp: moment().add(14, 'days').unix(),
//     iat: moment().unix(),
//     sub: user.id
//   };
//   return jwt.encode(payload, process.env.TOKEN_SECRET);
// }


// function comparePassword(password, done)  {
//   bcrypt.compare(password, this.password, function(err, match) {
//     if(err) {
//       return done(err);
//     }
//     done(err, match);
//   });
// }

// function hashing(password) {
//   return bcrypt.hashSync(password, 10);
// }

// function comparePassword(password, hashedPassword) {
//   return bcrypt.compareSync(password, hashedPassword);
// }


// module.exports = router;