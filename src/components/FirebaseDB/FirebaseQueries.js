function getAllItems(DB){
    const items = DB.collection("items");
    return new Promise((resolve,reject)=>{
        items.get().then((result)=>{        
            if(result.size === 0){            
                reject("No hay resultados")
            }
            let res = result.docs.map((d) =>{ 
                var ret = d.data()
                Object.assign(ret, {id:d.id})               
                return ret            
            })           
            resolve(res)
        }).catch(e => {
            console.log(e)
            reject(e)
        })      
    });
};

function getItemById(DB,id){
    const items = DB.collection("items");
    return new Promise((resolve,reject)=>{
        items
        .doc(id)
        .get()
        .then(e => resolve(e.data()));
           
    })    
};

export {getAllItems,getItemById};