const products = 
    [
        {
            id:"1",
            name:"Iphone X",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            color:"rojo",
            stock:11,
            image:"https://cdn.baymard.com/blog/ux-product-image-categories-5-proportion-size-2.jpg",
            precio:100,
            category:"tech"
        },
        {
            id:"2",
            name:"Samsung Alpha",
            description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
            color:"azul",
            stock:4,
            image:"https://cdn.baymard.com/blog/ux-product-image-categories-5-proportion-size-2.jpg",
            precio:231,
            category:"tech"
        },
        {
            id:"3",
            name:"Xiaomi Note 9",
            description:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
            color:"verde",
            stock:22,
            image:"https://cdn.baymard.com/blog/ux-product-image-categories-5-proportion-size-2.jpg",
            precio:20,
            category:"tech"
        },
        {
            id:"4",
            name:"Perfume Kenzo",
            description:"Quis autem vel eum iure reprehenderit qui in ea voluptate",
            color:"blanco",
            stock:5,
            image:"https://cdn.baymard.com/blog/ux-product-image-categories-5-proportion-size-2.jpg",
            precio:111,
            category:"cosmetics"
        },
        {
            id:"5",
            name:"Perfume DC",
            description:"Quis autem vel eum iure reprehenderit qui in ea voluptate",
            color:"blanco",
            stock:2,
            image:"https://cdn.baymard.com/blog/ux-product-image-categories-5-proportion-size-2.jpg",
            precio:222,
            category:"cosmetics"
        },
        {
            id:"6",
            name:"Perfume de Mujer",
            description:"Quis autem vel eum iure reprehenderit qui in ea voluptate",
            color:"blanco",
            stock:44,
            image:"https://cdn.baymard.com/blog/ux-product-image-categories-5-proportion-size-2.jpg",
            precio:333,
            category:"cosmetics"
        }
    ]
const getProducts =  (cat) =>  new Promise((resolve,reject) => {
                                setTimeout(() =>{
                                    resolve(
                                        (cat === "random") ? 
                                        [getRandomProduct()] :                                        
                                        products.filter(x => x.category === cat || cat === "all")
                                    );                                
                                },0)
                         });

const getRandomProduct = () => {   
    let size = products.length 
    let rand = Math.floor(Math.random() * size) + 1 ;   
    console.log(products.find(x => parseInt(x.id) === rand));  
    return products.find(x => parseInt(x.id) === rand);
};

const getProduct = (id) => new Promise((resolve,reject) => {
        setTimeout(() =>{
            console.log("Se invoco getProduct");
            resolve(products.find(x => x.id === id))        
        },0)
    });

export {getProducts, getProduct};