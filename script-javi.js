let intervalo=setInterval(texto,7000);
let i=1;
function texto(){
    let contenedor;
    let dialogo=["La contaminación aumenta en la mayoría de los ríos de América Latina, África y Asia","Por lo que cientos de millones de personas están en riesgo de contraer enfermedades que pueden ser letales","La contaminación también amenaza a la producción de alimentos y a las economías regionales."];
    console.log("hola");
    contenedor=document.getElementById("vacio");
    contenedor.innerText=dialogo[i];
    i++;
		if(i==3)
			i=0;
}