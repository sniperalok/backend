// /**
//  *
//  * goal --
//  * 1)Data leke aao json se
//  * 2) server banao jha data ko host kroge
//  * 3) routingkrke api route clear rkho aur waha pe data ko host kro...
//  */

// // step1 :--- require kro modules ko jo laake obect dega thik ....(we need fs module to read json data , http module to create server aur api route wagairah)

// const fs = require("fs");
// const http = require("http");

// //  step 2:-- data ko read kro ..
// //  we will only use here sync way to read file data...
// // const data = fs.readFileSync("./data.json", "utf-8"); //same level hai isle ./ agr ek level peeche toh ../ 2 me ../../
// // convert this to dirname
// const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
// // step 3: create the server :---

// const server = http.createServer((req, res) => {
//   // step 3.1 :-- check Which route you are at currently to show correctly the data at api route...

//   const pathName = req.url; // this is a property..

//   // step 3.2 : Now check the routing

//   if (pathName == "/") res.end("This is home Page go to api route");
//   else if (pathName == "/api") {
//     //  step 3.2.1 :-- Tell the server before hand that this data will be in the form of json data....

//     res.writeHead(200, {
//       "Content-type": "application/json",
//     });
//     res.end(data);
//     //step3.3:-- Doing error hanling for any other route
//   } else {
//     res.writeHead(404, {
//       "Content-type": "text/html",
//     });
//     res.end("<h1>Page not found!</h1>");
//   }
// });

// server.listen(8000, "127.0.0.1");

// ----------------version 2 gemaniiii bai----

/**
 *
 * goal --
 * 1)Data leke aao json se
 * 2) server banao jha data ko host kroge
 * 3) routingkrke api route clear rkho aur waha pe data ko host kro...
 */

// step1 :--- require kro modules ko jo laake obect dega thik ....(we need fs module to read json data , http module to create server aur api route wagairah)

const fs = require("fs");
const http = require("http");

//  step 2:-- data ko read kro ..
//  we will only use here sync way to read file data...
// const data = fs.readFileSync("./data.json", "utf-8"); //same level hai isle ./ agr ek level peeche toh ../ 2 me ../../
// convert this to dirname
const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
// step 3: create the server :---

const server = http.createServer((req, res) => {
  // step 3.1 :-- check Which route you are at currently to show correctly the data at api route...

  const pathName = req.url; // this is a property..

  // step 3.2 : Now check the routing

  if (pathName == "/") res.end("This is home Page go to api route");
  else if (pathName == "/api") {
    //  step 3.2.1 :-- Tell the server before hand that this data will be in the form of json data....

    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
    //step3.3:-- Doing error hanling for any other route
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

// STEP 4: Deployment ke liye Port setup (Sabse important change)
// process.env.PORT check karta hai ki hosting server (Render) ne koi port diya hai kya.
// Agar nahi (matlab localhost pe ho), toh default 8000 use karega.
const PORT = process.env.PORT || 8000;

// Purana wala niche hai (Commented):
// server.listen(8000, "127.0.0.1");

// Naya wala jo cloud/hosting pe chalega:
// Yahan humne "127.0.0.1" hata diya hai kyunki cloud server ko kisi bhi IP se access milna chahiye.
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});