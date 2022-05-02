const btn = document.querySelector(".btn-hamburguesa");
const menu = document.querySelector("#barra-lateral");
btn.addEventListener("click", (e) => {
  menu.classList.toggle("off");
  menu.classList.toggle("on");

  document.querySelector("body").classList.toggle("body-on");
});

function mostrarCont(btnC) {
  switch (btnC) {
    case 1:
      document.getElementById("tituloCont").innerText = "Customer Accounts";
      document.getElementById("imagen-cont").src = "images/Customer.jpg";
      document.getElementById("textoCont").innerText =
        "Texto demostrativo donde iria la infoirmacion pertinente";
      break;
    case 2:
      document.getElementById("tituloCont").innerText = "Access media";
      document.getElementById("imagen-cont").src = "images/Access.png";
      document.getElementById("textoCont").innerText =
        "Texto demostrativo donde iria la infoirmacion pertinente";
      break;
    case 3:
      document.getElementById("tituloCont").innerText = "Statistics";
      document.getElementById("imagen-cont").src = "images/Statistics.jpg";
      document.getElementById("textoCont").innerText =
        "Texto demostrativo donde iria la infoirmacion pertinente";
      break;
    case 4:
      document.getElementById("tituloCont").innerText = "Device";
      document.getElementById("imagen-cont").src = "images/Device.jpg";
      document.getElementById("textoCont").innerText =
        "Texto demostrativo donde iria la infoirmacion pertinente";
      break;
    case 5:
      document.getElementById("tituloCont").innerText = "Tariffic action";
      document.getElementById("imagen-cont").src = "images/Tariffic action.jpg";
      document.getElementById("textoCont").innerText =
        "Texto demostrativo donde iria la infoirmacion pertinente";
      break;
    case 6:
      document.getElementById("tituloCont").innerText = "Agents account";
      document.getElementById("imagen-cont").src = "images/Agents.jpg";
      document.getElementById("textoCont").innerText =
        "Texto demostrativo donde iria la infoirmacion pertinente";
      break;
  }
}
