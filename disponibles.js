//esta función solo muestra la cantidad de arroz disponible
//SE DEBE IMPLEMENTAR PARA QUE MUESTRE TODAS LAS EXISTENCIAS
//DISPONIBLES DE TODOS LOS PRODUCTOS 
function granos() {
  localStorage.setItem("arroz")
  localStorage.setItem("frijoles")
  localStorage.setItem("lentejas")


}

function aseo() {
  localStorage.setItem("jabon")
  localStorage.setItem("limpido")
  localStorage.setItem("champu")
}

function carnes() {
  localStorage.setItem("pescado")
  localStorage.setItem("res")
  localStorage.setItem("cerdo")
}

function lacteos() {
  localStorage.setItem("yogurt")
  localStorage.setItem("leche")
  localStorage.setItem("kumis")  
}

export {granos, aseo, carnes, lacteos};