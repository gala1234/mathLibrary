import assert from 'assert';
import operacion from '../lib/operaciones';

describe('operaciones', () => {
    it('suma', () => {
        let suma = operacion.suma(1,2);
        assert.ok(suma > 0);
        //assert.ok(); valida que el argumento que se pase cumpla la condicion.
        //assert.equal(); comprueba que los argumentos que se passan (tienen que ser 2) son exactamente iguales.
        //assert(); comprueba que el contenido que pasamos a assert sea distinto de null o undefined.
        
    });
})