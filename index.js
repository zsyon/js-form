
function myFunction() {

  let text = document.getElementById("text").value;
  document.getElementById("paragraf").innerHTML = (`Değer : ` + text );

}

let formDOM = document.getElementById("form")
formDOM.addEventListener("submit" , form)

function form() {
  let name = document.getElementById("userName")
  let notId = document.getElementById("not")
}

let ulDOM = document.getElementById("ul")

const addItem = (username , not) => {
  let liDOM = document.getElementById("li")
  liDOM.innerHTML = `${username} , ${not}`
  ulDOM.append(liDOM)
}





let notDOM = document.getElementById("not")

