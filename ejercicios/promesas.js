const esAdulto = (edad) => {
    if (edad > 18) {
        return true;
    }
    else {
        return false;
    }
};
const promesa = (edad) => {
    return new Promise((resolve, reject) => {
       if (esAdulto(edad)) {
           resolve('Yes!');
       }
       else {
           reject('No');
       }
   })
   .then(valor => {       
       console.log(valor);
   })
   .catch(error => {
       console.error(error);
   })
   }


const promesaConAsync = (edad) => {
    return new Promise((resolve, reject) => {
       if (esAdulto(edad)) {
           resolve('Yes!');
       }
       else {
           reject('No');
       }
   })   
};


const usingAsync = async (edad) => {
    try {
        const valor = await promesaConAsync(edad);
        console.log(valor);
    } catch (error) {
        console.error(error);
    }
};

usingAsync(19);

promesa(20);
