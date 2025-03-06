const calculadora  = require('../calculadora');

test('Soma', () =>{
expect(calculadora(2,3,'+')).toBe(5)

})

test('Subtração', () =>{
    expect(calculadora(3,2,'-')).toBe(1)
    
})

test('Multiplicação', () =>{
        expect(calculadora(2,3,'*')).toBe(6)
        
})

test('Divisão', () =>{
    expect(calculadora(2,2,'/')).toBe(1)
    
})



                        