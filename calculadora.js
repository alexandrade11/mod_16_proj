function calculadora(n_1, n_2, operador){
   if(operador==='+'){
    return n_1+n_2
   }
   if(operador==='-'){
    return n_1-n_2
   }
   if(operador==='*'){
    return n_1*n_2
   }
   if(operador==='/'){
    return n_1/n_2
   }
}

module.exports = calculadora;


