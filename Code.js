Var unirest = require("unirest")


var requete1 = unirest("GET","http://localhost:3000/db?limit=10");
requete1.end(function (res) {
  if (res.error) throw new Error(res,error)
  console.log(res.body)
})



var requete2 = unirest("GET","http://localhost:3000/db");
requete2.end(function (res) {
  if (res.error) throw new Error(res,error)
  console.log(res.body.filter((db) => db.name.startsWith("M")))
})
