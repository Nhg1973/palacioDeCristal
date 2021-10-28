function capturar(){
  function Persona (nombre,edad) {
      this.nombre = nombre;
      this.edad = edad;
    }

  let txtNombre = document.getElementById("nombre").value;
  let txttelefono = document.getElementById("telefono").value;

  Personas = new Persona (txtNombre, txttelefono );

  
  if (txtNombre=="Codo a Codo" & txttelefono=="1016"){
    alert('puedes ingresar');
  }else alert("Nombre o clave incorrecta");

  agregar();
}

var baseDeDatos=[];

function agregar (){
  baseDeDatos.push(Personas);
  document.getElementById("tabla").innerHTML += "<tbody><td>"+Personas.nombre+"</td><td>"+Personas.edad+"</td></tbody>";
}







