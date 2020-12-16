import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxWa4z9IceIxS6x0uQCyPiCmb6mUsJzY8",
    authDomain: "coderhouse-ecommerce-a37a9.firebaseapp.com",
    projectId: "coderhouse-ecommerce-a37a9",
    storageBucket: "coderhouse-ecommerce-a37a9.appspot.com",
    messagingSenderId: "60503745061",
    appId: "1:60503745061:web:a35319be3c3390fbac55cc"
};

const DB = firebase.initializeApp(firebaseConfig);

export function GetDBFireBase(){
    return firebase.firestore(DB)
}
/*
export function loadProducts(categoryId){
    setLoading(true)
    const DB = GetDBFireBase()
    const items = DB.collection("items");
    items.get().then((result)=>{        
        if(result.size === 0){
            console.log("No hay resultados")
        }
        let res = result.docs.map((d) =>{ 
            var ret = d.data()
            ret["id"]=d.id;                
            return ret            
        })           
        setProductArray(res)
        setLoading(false);
    })
    console.log(productArray)
}*/