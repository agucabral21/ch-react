import { storeDB } from "./FirebaseDS";

function fetchItems(category) {
  const items = storeDB.collection("items");
  return new Promise((resolve, reject) => {
    //TODO: el codigo este esta todo repetido, buscar la manera que filtre o no por category sin repetirlo
    if (category === "all") {
      items
        .get()
        .then((result) => {
          if (result.size === 0) {
            reject("No hay resultados");
          }
          let res = result.docs.map((d) => {
            var ret = d.data();
            //console.log(d)
            Object.assign(ret, { id: d.id });
            return ret;
          });
          resolve(res);
        })
        .catch((e) => {
          //console.log(e)
          reject(e);
        });
    } else {
      items
        .where("categoryId", "==", category)
        .get()
        .then((result) => {
          if (result.size === 0) {
            reject("No hay resultados");
          }
          let res = result.docs.map((d) => {
            var ret = d.data();
            //console.log(d)
            Object.assign(ret, { id: d.id });
            return ret;
          });
          resolve(res);
        })
        .catch((e) => {
          //console.log(e)
          reject(e);
        });
    }
  });
}

function fetchItemById(id) {
  const items = storeDB.collection("items");
  return new Promise((resolve, reject) => {
    items
      .doc(id)
      .get()
      .then((d) => {
        var ret = d.data();
        Object.assign(ret, { id: d.id });
        resolve(ret);
      });
  });
}

const storeTestData = () => {
  //console.log("test entra");
  const testData = [
    {
      id: "testId",
      categoryId: "apple",
      description: "Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)",
      imageId: "apple-iphone-12-pro-max.jpg",
      label: "iPhone 12 Pro Max",
      price: 1599,
      stock: 10,
    },
    {
      id: "7",
      categoryId: "apple",
      description: "Glass front, ceramic/sapphire crystal back, aluminum frame",
      imageId: "apple-watch-se.jpg",
      label: "Watch SE",
      price: 999,
      stock: 20,
    },
    {
      id: "6",
      categoryId: "apple",
      description: "Octa-core (4x2.5 GHz Vortex + 4x1.6 GHz Tempest)",
      imageId: "apple-ipad-pro-129-2018.jpg",
      label: "iPad Pro 12.9",
      price: 1000,
      stock: 20,
    },
    {
      id: "5",
      categoryId: "apple",
      description: "Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)",
      imageId: "apple-iphone-11.jpg",
      label: "iPhone 11",
      price: 1000,
      stock: 20,
    },
    {
      id: "4",
      categoryId: "xiaomi",
      description:
        "Octa-core (4x2.0 GHz Kryo 260 Gold & 4x1.8 GHz Kryo 260 Silver)",
      imageId: "xiaomi-redmi-watch.jpg",
      label: "Xiaomi Mi Watch Lite",
      price: 1000,
      stock: 20,
    },
    {
      id: "3",
      categoryId: "xiaomi",
      description: "320 x 320 pixels, 1:1 ratio (~323 ppi density)",
      imageId: "xiaomi-redmi-9-power.jpg",
      label: "Redmi 9 Power",
      price: 1000,
      stock: 20,
    },
    {
      id: "2",
      categoryId: "xiaomi",
      description: "1.39 inches, 12.5 cm2 (~51.1% screen-to-body ratio)",
      imageId: "xiaomi-mi-watch-color-sports-edition.jpg",
      label: "Mi Watch Color Sports",
      price: 1000,
      stock: 20,
    },
    {
      id: "1",
      categoryId: "xiaomi",
      description:
        "Glass front (Gorilla Glass 3), stainless steel frame, plastic back",
      imageId: "xiaomi-mi-watch-revolve.jpg",
      label: "Mi Watch Revolve",
      price: 1000,
      stock: 20,
    },
    {
      categoryId: "samsung",
      description: "Qualcomm SDM450 Snapdragon 450 (14 nm)",
      id: "O9ToFpsndGZvhuk40sMj",
      imageId: "samsung-galaxy-a02s-sm-a025-new.jpg",
      label: "Galaxy A02s",
      price: 1000,
      stock: 20,
    },
    {
      categryId: "samsung",
      description: "Octa-core (4x2.3 GHz Cortex-A73 & 4x1.7 GHz Cortex-A53)",
      id: "SbvgRGKj2HBrqcAMnFWF",
      imageId: "samsung-galaxy-m21s.jpg",
      label: "Galaxy M21s",
      price: 111,
      stock: 123,
    },
    {
      categoryId: "samsung",
      description: "Octa-core (4x2.3 GHz Cortex-A73 & 4x1.7 GHz Cortex-A53)",
      id: "XmDTIT63XDXHSmF1qWPA",
      imageId: "samsung-galaxy-m31-sm-m315f.jpg",
      label: "Galaxy M31 Prime",
      price: 800,
      stock: 10,
    },
  ];

  testData.map((item) => storeItem(item));
};

function storeItem(item) {
  //console.log("Entra aca");
  //console.log(item);
  let id = item.id;
  storeDB.collection("items").doc(id).set(item);
}

export { fetchItems, fetchItemById, storeItem, storeTestData };
