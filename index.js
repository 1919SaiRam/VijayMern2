const http = require("http");

const server = http.createServer((req, res) => {
    // console.log('req', req)
    // console.log("Hello from server");
    // const date = new Date().toLocaleDateString();
    // const time = new Date().toLocaleTimeString();
    // console.log(`Server Date-Time: ${date} ${time}`);
    // // res.end();
    // res.write('<h1>Thank you for ur support</h1>');
    // res.end();

//---------------------------------------------------------------------------------------------------------------

    // const serverInfo = {
        
    //         serverName: "CodeSandBox Server",
    //         version: "1.0.0",
    //         currentDate: new Date().toDateString(),
    //         currentTime: new Date().toTimeString(),
        
    // };
    // res.writeHead(200, {"content-type": "application/json"}); // mentioning what type of response am sending !!! 
    // res.write(JSON.stringify(serverInfo)); // what data am sending 
    // res.end();

//---------------------------------------------------------------------------------------------------------------

// if (req.url === "/status") {

//     const serverInfo = {
        
//         serverName: "CodeSandBox Server",
//         version: "1.0.0",
//         currentDate: new Date().toDateString(),
//         currentTime: new Date().toTimeString(),
    
// };
//     res.writeHead(200, { "Content-Type": "application/json" }); //Adding Headers
//     res.write(JSON.stringify(serverInfo));
//     res.end();
//   } else {
//     res.writeHead(200, { "Content-Type": "text/html" }); //Adding Headers
//     res.write(`<h1>Hello from server</h1>`);
//     res.end();
//   }

//------------------------------------------------------------------------------------------

// const {data} = require("./DB/currency.json");
// //  /currencies/inr -> ["", "currencies", "inr"]
// const splitURL = req.url.split("/");
// const symbol = splitURL[splitURL.length - 1];
// console.log(symbol);


// switch ( req.url){
//     case "/": {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write("<h1>Currency Database</h1>");
//         res.end();
//         break ;
//     }
//     case "/currencies": {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.write(JSON.stringify(data));
//         res.end();
//         break ;
//     }
//     case `/currencies/${symbol}`: {
//         const result = data.find(
//             (ele) => ele.id.toLowerCase() === symbol.toLowerCase()
//         );
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.write(JSON.stringify(result));
//         res.end();
//         break ;
//     }
//     default: {
//         res.writeHead(404);
//         res.write("response NOt Found !!");
//         res.end();
//     }
// }


});

server.listen(8082, () => {
    console.log("Listening!!")
})
