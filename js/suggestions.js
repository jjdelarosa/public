 
 
var asic = db.collection("clients");
 
asic.get().then((querySnapshot) => {
    let data = querySnapshot.docs.map((doc) => { return doc.id });
    
    localStorage.setItem("names", JSON.stringify(data));
    //return data;
   
}).catch((error) => {
    console.log("Error getting document:", error);
});
var retrievedData = localStorage.getItem("names");
let suggestions = JSON.parse(retrievedData);




 

 
 
