function panagrama() {
    let frase = document.getElementById("frase").value;
    frase = frase.toLowerCase();
    let abecedario = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z';
    let abc = abecedario.split(',');
    let vfrase = frase.split("");

    let x = document.getElementById("frase").value; //Respetando mayusculas 
    for (let i = 0; i < abc.length; i++) {
        let letra = abc[i];
        let pertenece = false;
        for (let j = 0; j < vfrase.length; j++) {
            if (letra == vfrase[j]) {
                pertenece = true;
            }
            if (j == vfrase.length - 1 & pertenece == false) {
                document.getElementById("resultado1").innerHTML = `La frase: <pre> ${x} </pre> NO es panagrama`;
                console.log(`La frase NO es panagrama`);
                return false;
            }
        }
    }
    if (frase != "") { //Cadena vacia
        document.getElementById("resultado1").innerHTML = `La frase: <pre> ${x} </pre> SI es panagrama`;
        console.log(`La frase SI es panagrama`);
    } else {
        document.getElementById("resultado1").innerHTML = `La frase: <pre> ${x} </pre> NO es panagrama`;
        console.log(`La frase NO es panagrama`);
    }

}

function bisiesto() {
    let ano = parseInt(document.getElementById("ano").value);
    if (ano % 4 == 0) {
        if (ano % 100 == 0) {
            if (ano % 400 == 0) {
                document.getElementById("resultado2").innerHTML = `El año: <pre> ${ano} </pre> Es bisiesto en el calendario gregoriano`;
            } else {
                document.getElementById("resultado2").innerHTML = `El año: <pre> ${ano} </pre> NO es bisiesto`;
            }
        } else {
            document.getElementById("resultado2").innerHTML = `El año: <pre> ${ano} </pre> Es bisiesto en el calendario gregoriano`;
        }
    } else {
        document.getElementById("resultado2").innerHTML = `El año: <pre> ${ano} </pre> NO es bisiesto`;
    }

}

function unicos() {
    let array = document.getElementById("lista").value;
    array = array.split(',');
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let unico = true;
        for (let pos = 0; pos < array.length; pos++) {
            if (pos != i) {
                if (element == array[pos]) {
                    unico = false;
                    pos = array.length;
                }
            }
        }
        if (unico == true) {
            array[i] = 0;
        }
        
    }
   let c = array.length;
   let index = 0;
   while (index < c) {
    if (array[index] == 0) {
        array.splice(index,1);
        c = array.length
        index = 0;
    }else{
        index++;
    }
    
   }

   document.getElementById("resultado3").innerHTML = array;
}

function romanNumerals() {
    let num = document.getElementById("numero").value;
    var roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    var str = '';
  
    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }
  
    document.getElementById("resultado4").innerHTML = str;
  }