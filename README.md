# alos_act1
          Projet alos 

       Première activité 

1)La requête 1 permet d'afficher les dix premiers
éléments de notre base de données ils seront affichés 
Dans l'ordre dans lequel ils sont enregistrés dans notre 
Base de données.

var requete1 = unirest("GET","http://localhost:3000/db?limit=10");
requete1.end(function (res) {
  if (res.error) throw new Error(res,error)
  console.log(res.body)
})






2)La requête 2 permet de d'afficher que les éléments 
De notre bases de données ayant une valeur de l'attribut 
Name commençant par "M"


var requete2 = unirest("GET","http://localhost:3000/db");
requete2.end(function (res) {
  if (res.error) throw new Error(res,error)
  console.log(res.body.filter((db) => db.name.startsWith("M")))
})


3)la 6eme ligne du listing 2 
Indique de renvoyer systématiquement la requête au 
serveur et ne servir une éventuelle version en cache
que dans le cas où le serveur le demande .
