alert("Holu!")

function login() {
    var username, password

    username = document.getElementById("correo").value;
    password = document.getElementById("contraseña").value;

    if (username == "correo" && password == "contraseña") {
        window.location = "index2.html";
    } else {
        alert("Direccion de Correo o Contraseña invalidos");
    }
}

function enviar() {
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
      
}

