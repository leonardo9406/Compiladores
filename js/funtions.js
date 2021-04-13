var alfabeto1=[];
var alfabeto2=[];
var lenguaje1=[];
var lenguaje2=[];
var palabra=[]
function obtenerpalabra(id){
    palabra=obtenerDato(id);
    if(palabra.length>1){
        alert("Solo puede ingresar una palabra");
    }
    else if(palabra[0]=="&"){
        console.log(palabra[0]);
        alert("Por favor ingrese una palabra");
    }
    else{
        var g_p={
            'vector_al1':[]
        };
        g_p.vector_al1=palabra;
        localStorage.setItem('g_p', JSON.stringify(g_p))
        var guardado_p=JSON.parse(localStorage.getItem('g_p'));
        location.href="Palabra.html";
    }
}

function obtenerlenguajes(id1,id2){
    lenguaje1=obtenerDato(id1);
    lenguaje2=obtenerDato(id2);
    if(!buscarrepetidos(lenguaje1)){
        alert("hay elementos repetidos en el primer alfabeto");
    }
    else if(!buscarrepetidos(lenguaje2)){
        alert("hay elementos repetidos en el segundo alfabeto");
    }
    else{
        var g_l={
            'vector_al1':[],
            'vector_al2':[]
        };
        g_l.vector_al1=lenguaje1;
        g_l.vector_al2=lenguaje2;
        localStorage.setItem('g_l', JSON.stringify(g_l))
        var guardado_l=JSON.parse(localStorage.getItem('g_l'));
        location.href="Lenguaje.html";
    }
    
    console.log(guardado_l);
}

function obteneralfabeto(id1,id2){
    alfabeto1=obtenerDato(id1);
    alfabeto2=obtenerDato(id2);
    
    if(!buscarrepetidos(alfabeto1)){
        alert("hay elementos repetidos en el primer alfabeto");
    }
    else if(!buscarrepetidos(alfabeto2)){
        alert("hay elementos repetidos en el segundo alfabeto");
    }
    else{
        var g_a={
            'vector_al1':[],
            'vector_al2':[]
        };
        g_a.vector_al1=alfabeto1;
        g_a.vector_al2=alfabeto2;
        localStorage.setItem('g_a', JSON.stringify(g_a))
        var guardado_a=JSON.parse(localStorage.getItem('g_a'));
        location.href="Alfabeto.html";
    }    
}


function buscarrepetidos(vector){               //buscar repetidos de Alfabeto 
    var i=0;
    for(var j=0; j < vector.length; j++){
        i=j+1;
        for(i;i<vector.length;i++){
            if(vector[j] == vector[i]){
                return false;
            }
        }        
    }
    return true;
}

function obtenerDato( id){
    var alfabeto =document.getElementById(id).value;
    var inst="";
    var cont = 0;
    var vec=[];
    for(var a=0;a<alfabeto.length;a++){
        if(alfabeto[a]==" "){
            if(inst==""){

            }else{
                vec.push(inst);
                cont ++;
                inst="";
            }
        }
        else{
            inst=inst+alfabeto[a];
        }
    }
    if(inst==""){
        }else{
            vec.push(inst);
            cont++;
        }
    if(cont == 0){
        vec[0]="&";
    }
    return vec;
} 

function recuperar(id){
    var obj = JSON.parse(localStorage.getItem(id));
    return obj;
}

function union(id1){
    var vec1=[];
    var vec2=[];
    var vec_union;
    var bandera;
    var aux=recuperar(id1);
    vec1=aux.vector_al1;
    vec2=aux.vector_al2;
    vec_union=vec1;
    for(var a=0;a<vec2.length;a++){
        var aux_comparacion=vec2[a];
        bandera=true;
        for(var b=0;b<vec1.length;b++){
            if(aux_comparacion==vec1[b]){
                bandera = false;
                break;
            }
        }
        if(bandera==true){
            vec_union.push(aux_comparacion);
        }
    } 
    window.alert(vec_union);
}
function Concatenar(id1){
    var vec1=[];
    var vec2=[];
    var vec_concatenado;
    var bandera;
    var aux=recuperar(id1);
    vec1=aux.vector_al1;
    vec2=aux.vector_al2;
    vec_concatenado=vec1;
    for(var a=0;a<vec2.length;a++){
        var aux_comparacion=vec2[a];
        bandera=true;
        for(var b=0;b<vec1.length;b++){
            if(aux_comparacion==vec1[b]){
                bandera = true;
                break;
            }
        }
        if(bandera==true){
            vec_concatenado.push(aux_comparacion);
        }
    } 
    window.alert(vec_concatenado);
}

function diferencia(id1){
    var vec1=[];
    var vec2=[];
    var vec_diferencia;
    var aux=recuperar(id1);
    vec1=aux.vector_al1;
    vec2=aux.vector_al2;
    vec_diferencia=vec1;
    for(var a=0;a<vec2.length;a++){
        var aux_comparacion=vec2[a];
        for(var b=0;b<vec1.length;b++){
            if(aux_comparacion==vec1[b]){
                vec_diferencia.splice(b,1);
                break;
            }
        }
    } 
    window.alert(vec_diferencia);
}

function interseccion(id1){
    var vec1=[];
    var vec2=[];
    var vec_comun=[];
    var aux=recuperar(id1);
    vec1=aux.vector_al1;
    vec2=aux.vector_al2;
    for(var a=0;a<vec2.length;a++){
        var aux_comparacion=vec2[a];
        for(var b=0;b<vec1.length;b++){
            if(aux_comparacion==vec1[b]){
                vec_comun.push(vec1[b]);
                break;
            }
        }
    } 
    window.alert(vec_comun);
}

function potencia_in(vector1,vector2, pot){    
    var respuesta = [];
    var bandera;
    var concatenacion = "";
    for(var i = 0; i<vector1.length; i++){        
        for(var j = 0; j<vector2.length;j++){            
            bandera = true;
            if(vector1[i]=="&" ){
                concatenacion=vector2[j];               
            }
            else{
                if(vector2[j]=="&"){                    
                concatenacion=vector1[i];       
                }else{                   
                    concatenacion = vector1[i]+vector2[j];    
                }   
            }
            for(var k = 0; k<respuesta.length; k++){             
                if(concatenacion==respuesta[k]){                    
                    bandera=false;
                    break;
                }
            }
            if(bandera==true){               
                respuesta.push(concatenacion);
            }
        }        
    }  
    if(pot == 2){        
        return respuesta;        
    }
    else{        
        respuesta=potencia_in(vector1,respuesta, pot-1);
        return respuesta;
    }
}


function potencia(id){
    var vec1=[];
    var vec2=[];
    var r_vec1=[];
    var r_vec2=[];
    var aux=recuperar(id);
    vec1=aux.vector_al1;
    vec2=aux.vector_al2;
    var pot=prompt("Ingrese la potencia deseada ");
    r_vec1=potencia_in(vec1,vec1,pot);
    r_vec2=potencia_in(vec2,vec2,pot);
    console.log(r_vec1);
    window.alert("potencia del lenguaje 1 a la "+ pot+" es : "+r_vec1);
    window.alert("potencia del lenguaje 2 a la "+ pot+" es : "+r_vec2);
}

function inver(vec){
    var respuesta=[]
    var aux1;
    var aux2;
    console.log(vec);
    for(var a=0;a<vec.length;a++){
        aux1=vec[a];
        console.log(aux1);
        aux2="";
        if(aux1.length>1){
           for(var b=aux1.length-1;b>=0;b--){
            console.log(aux2);
            aux2=aux2+aux1[b];
            console.log(aux2);
            } 
            respuesta.push(aux2);
            console.log(respuesta+"leo");
        }
        else{
            respuesta.push(aux1);
            console.log(respuesta+"leo");   
        }  
    }
    return respuesta; 
}

function inversa(id){
    var vec1=[];
    var vec2=[];
    var r_vec1=[];
    var r_vec2=[];
    var aux=recuperar(id);
    vec1=aux.vector_al1;
    vec2=aux.vector_al2;
    r_vec1=inver(vec1);
    r_vec2=inver(vec2);
    window.alert("la inversa del lenguaje 1 es: "+r_vec1);
    window.alert("la inversa del lenguaje 2 es: "+r_vec2);
}

function cardinalidad(id){
    var vec1=[];
    var vec2=[];
    var aux=recuperar(id);
    vec1=aux.vector_al1;
    vec2=aux.vector_al2;
    window.alert("la cardinalidad del lenguaje 1 es: "+vec1.length);
    window.alert("la cardinalidad del lenguaje 2 es: "+vec2.length);
}

function inverso_palabra(id){
    var vec1=[];
    var aux=recuperar(id);
    vec1=aux.vector_al1;
    r_vec1=inver(vec1);
    window.alert("la inversa de la palabra "+vec1+" es :"+r_vec1);
}
function cardinal_palabra(id){
    var vec1=[];
    var aux=recuperar(id);
    vec1=aux.vector_al1;
    
    window.alert("la cardinalidad de la palabra "+vec1+" es de: "+vec1[0].length);
}
