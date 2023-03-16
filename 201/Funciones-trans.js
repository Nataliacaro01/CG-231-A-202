/**
 * Traslacion: Construye la matriz de traslacion de THREEJSpara el vector vt y la retorna 
 * ENTRADAS: vt = Vector de traslacion (arreglo de enteros)
 * SALIDAS: matrizT = Matriz de traslacion para el vector vt
 */
function Traslacion(vt){
    var matrizT =new THREE.Matrix4();
    matrizT.set(1, 0, 0, vt[0],
                0, 1, 0, vt[1],
                0, 0, 1, vt[2],
                0, 0, 0, 1);
    return matrizT;
}
/**
 * Escalado: Construye la matriz de escalado de THREEJSpara el vector vs y la retorna 
 * ENTRADAS: vs = Vector de escalado (arreglo de enteros)
 * SALIDAS: matrizT = Matriz de escalado para el vector vs
 */
function Escalado(vs){
    var matrizS = new THREE.Matrix4();
    matrizS.set(vs[0], 0, 0, 0,
                0, vs[1], 0, 0,
                0, 0, vs[2], 0,
                0, 0, 0, 1);
            return matrizS;
}

/**
 * EscaladoReal:  Aplica el vector de escalado vs al objeto fig
 * ENTRADAS: fig  =  Objeto tipo THREE.Line que presenta la figura 
 *           vs = Vector de escalado (arreglo de enteros)
 *           posini = posicion inicial del fig (array de enteros)
 * SALIDAS: 
 */
function EscaladoReal(fig, posini, vs){
    tr = [-posini[0],-posini[1],-posini[2]];    // vector para llevar al origen
    fig.applyMatrix(Traslacion(tr));
    fig.applyMatrix(Escalado(vs));
    fig.applyMatrix(Traslacion(posini));
      
}

/**
 * Rotacionx: Construye la matriz de rotacion de THREEJSparapara el eje x 
 * ENTRADAS: ar = angulo de rotacion
 * SALIDAS: matrizx = Matriz de escalado para el angulo de rotacion
 */
function Rotacionx(ar){
    var matrizX = new THREE.Matrix4();
    var alpha= ar*Math.PI/180;
    var cos = Math.cos(alpha);
    var sin = Math.sin(alpha);

    matrizX.set(1,  0, 0, 0,
                0, cos, -sin,0, 
                0, sin, cos,0,
                0,0,0,1);	

        return matrizX;
}
/**
 * EscaladoReal:  Aplica el vector de rotacion ar al objeto fig
 * ENTRADAS: fig  =  Objeto tipo THREE.Line que presenta la figura 
 *           ar = angulo de rotacion 
 *           posini = posicion inicial del fig (array de enteros)
 * SALIDAS: 
 */
function RotacionRealX(fig, posini, ar){
    tr = [-posini[0],-posini[1],-posini[2]];    // vector para llevar al origen
    fig.applyMatrix(Traslacion(tr));
    fig.applyMatrix(Rotacionx(ar));
    fig.applyMatrix(Traslacion(posini));
      
}

/**
 * Rotaciony: Construye la matriz de rotacion de THREEJSparapara el eje y
 * ENTRADAS: ar = angulo de rotacion
 * SALIDAS: matrizY = Matriz de escalado para el angulo de rotacion
 */
function Rotaciony(ar){
    var matrizY = new THREE.Matrix4();
    var alpha= ar*Math.PI/180;
    var cos = Math.cos(alpha);
    var sin = Math.sin(alpha);

    matrizY.set(cos,  0, sin, 0,
                0, 1, 0, 0, 
                sin, 0, cos,0,
                0,0,0,1);	

   return matrizY;
}

/**
 * EscaladoReal:  Aplica el vector de rotacion ar al objeto fig
 * ENTRADAS: fig  =  Objeto tipo THREE.Line que presenta la figura 
 *           ar = angulo de rotacion 
 *           posini = posicion inicial del fig (array de enteros)
 * SALIDAS: 
 */
function RotacionRealY(fig, posini, ar){
    tr = [-posini[0],-posini[1],-posini[2]];    // vector para llevar al origen
    fig.applyMatrix(Traslacion(tr));
    fig.applyMatrix(Rotaciony(ar));
    fig.applyMatrix(Traslacion(posini));
      
}

/**
 * Rotacionz: Construye la matriz de rotacion de THREEJSparapara el eje z 
 * ENTRADAS: ar = angulo de rotacion
 * SALIDAS: matrizZ = Matriz de escalado para el angulo de rotacion
 */
function Rotacionz(ar){
    var matrizZ = new THREE.Matrix4();
    var alpha= ar*Math.PI/180;
    var cos = Math.cos(alpha);
    var sin = Math.sin(alpha);

    matrizZ.set(cos,  -sin, 0, 0,
                sin, cos, 0, 0, 
                0, 0, 1,0,
                0,0,0,1);	

    return matrizZ;
}

/**
 * EscaladoReal:  Aplica el vector de rotacion ar al objeto fig
 * ENTRADAS: fig  =  Objeto tipo THREE.Line que presenta la figura 
 *           ar = angulo de rotacion 
 *           posini = posicion inicial del fig (array de enteros)
 * SALIDAS: 
 */
function RotacionRealZ(fig, posini, ar){
    tr = [-posini[0],-posini[1],-posini[2]];    // vector para llevar al origen
    fig.applyMatrix(Traslacion(tr));
    fig.applyMatrix(Rotacionz(ar));
    fig.applyMatrix(Traslacion(posini));
      
}
