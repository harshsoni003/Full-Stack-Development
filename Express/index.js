const express = require('express')
const app = express()  //for excuting
// console.dir(app);

let port=3000; //8080

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


/*   app.use((req, res)=>{                       //all type of request listion = app.use
    console.log("request recived");
    res.send("this is a basic response");       // here we can send js , html
})
*/

app.get("/", (req,res)=>{
    res.send("you contacted.. root path harsh soni");
});


app.get("/:username/:id", (req,res)=>{                          //we define link and set varible  for all path
//   console.log(req.params);

let {username, id} = req.params;
    res.send(`welcome ${username}`);        //`Welcome ${username}`
});

app.get("/search", (req,res)=>{                        
    
    let {q} = req.query;
        res.send(`search result for quary ${q}`);        
    });
         
                                                           



/* app.get("/search", (req,res)=>{                             //we can't set path one by one
    res.send("you contacted search path harsh");
})

app.get("/option", (req,res)=>{
    res.send("you contacted option path harsh");
})

app.get("*", (req,res)=>{
    res.send("this path not exit harsh");
})

// app.post("/", (req,res)=>{
//     res.send("this post path  harsh");
// })
 */



