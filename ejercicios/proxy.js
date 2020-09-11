const p = new Proxy(target, handler);

const target = {
    red: "Rojo",
    green : "Verde",
    blue: "Azul",
};


const handler = {
    get(obj, prop) {
        if (prop in obj) {
            return obj[prop];
        }
        else {
            
        }
       

        
    }
}