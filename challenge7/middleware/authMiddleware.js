const jwt = require("jsonwebtoken");

const authMiddleware = {
  authApi: (req, res, next) => {
    // MCR / REST API
    const headers = req.headers["authorization"] || "";
    const bearerToken = headers.replace("Bearer ", "");
    
    const token = req.query.api_token || bearerToken || "";
    try {
      const decoded = jwt.verify(token, "secret-key");
      req.issuperuser = decoded.issuperuser;
      next();
      } catch (error) {
      res.status(401),
        json({
          message: "unauthorized",
        });
      
    }
  },

  auth: (req, res, next) => {  
MVC / LOCAL
 if (!req.user) {
    return res.redirect("/login");
  }
  next();
 },
};
module.exports = authMiddleware;


























// const authMiddleware = {
//   authApi: (req, res, next) => {
//   //MCR/REST API (secret-key harus sama dengan pada routers/index.js pd bagian jsonwebtoken)
//   const token = jwt.verify(req.query.token, 'secret-key')
//   if (!token) {
//     return res.json({
//       message: 'unauthorize',
//     });
//     }
//     next();
// },
//   auth: (req, res, next) => {
//    //MVC
//    if (!req.user){
//     return res.redirect("/login");
//   }
//   next();
//   },
//  };  


// const authMiddleware = {
//   authApi: (req, res, next) => {
//   //MCR/REST API (secret-key harus sama dengan pada routers/index.js pd bagian jsonwebtoken)
//   const token = jwt.verify(req.query.token, 'secret-key')
//   if (!token) {
//     return res.json({
//       message: 'unauthorize',
//     });
//     }
//     next();
// },
//   auth: (req, res, next) => {
//    //MVC
//    if (!req.user){
//     return res.redirect("/login");
//   }
//   next();
//   },
//  };  


// const authMiddleware = {
//   authApi: (req, res, next) => {
//     // MCR / REST API
//     const headers = req.headers["authorization"] || "";
//     const bearerToken = headers.replace("Bearer ", "");

//     const token = req.query.api_token || bearerToken || "";
//     try {
//       const decoded = jwt.verify(token, "secret-key");
//       req.issuperuser = decoded.issuperuser;
//       next();
//     } catch (error) {
//       res.status(401),
//         json({
//           message: "unauthorized",
//         });
//     }
//   },

//   auth: (req, res, next) => {  
// MVC / LOCAL
//  if (!req.user) {
//     return res.redirect("/login");
//   }
//   next();
//  },
// };




// const authMiddleware = {
//   authApi: (req, res, next) => {
//   //MCR/REST API (secret-key harus sama dengan pada routers/index.js pd bagian jsonwebtoken)
//   const token = jwt.verify(req.query.token, 'secret-key')
//   if (!token) {
//     return res.json({
//       message: 'unauthorize',
//     });
//     }
//     next();
// },
//   auth: (req, res, next) => {
//    //MVC
//    if (!req.user){
//     return res.redirect("/login");
//   }
//   next();
//   },
//  };  














// const jwt = require("jsonwebtoken");

// const authMiddleware = {
//   authApi: (req, res, next) => {
//     // MCR / REST API
//     const headers = req.headers["authorization"] || "";
//     const bearerToken = headers.replace("Bearer ", "");

//     const token = req.query.api_token || bearerToken || "";
//     try {
//       const decoded = jwt.verify(token, "secret-key");
//       req.issuperuser = decoded.issuperuser;
//       next();
//     } catch (error) {
//       res.status(401),
//         json({
//           message: "unauthorized",
//         });
//     }
//   },

//   auth: (req, res, next) => {  
// MVC / LOCAL
//  if (!req.user) {
//     return res.redirect("/login");
//   }
//   next();
//  },
// };

// // 
// const authMiddleware = {
//   authApi: (req, res, next) => {
//     // MCR / REST API
//     const headers = req.headers["authorization"] || "";
//     const bearerToken = headers.replace("Bearer ", "");

//     const token = req.query.api_token || bearerToken || "";
//     try {
//       const decoded = jwt.verify(token, "secret-key");
//       req.isSuperuser = decoded.isSuperuser;
//       next();
//     } catch (error) {
//       res.status(401),
//         json({
//           message: "unauthorized",
//         });
//     }
//   },

//   auth: (req, res, next) => {
//     // MVC / LOCAL
//     if (!req.user) {
//       return res.redirect("/login");
//     }
//     next();
//   },
// };

// module.exports = authMiddleware;