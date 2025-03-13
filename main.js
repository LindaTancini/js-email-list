console.log("Ciao Linda");

// PRENDO ELEMENTO CONTAINER
const containerElement = document.getElementById("mail-container");
console.log(containerElement);
// SVUOTO IL CONTAINER
containerElement.innerHTML = "";
// METTO QUI LE MAIL GENERATE
let mailGenerate = "";
// DICHIARO I DATI DELL'API
// METTENDO LE API DENTRO UN CICLO FOR, GENERO 10 EMAIL
for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
      const email = response.data.response;
      console.log(email);
      //AGGIUNGO MAIL ALLA VARIABILE
      mailGenerate += `
        <div class="card">
          <h3>${email}</h3>
        </div>
      `;
      // STAMPO IN PAGINA
      containerElement.innerHTML = mailGenerate;
    })
    .catch((error) => {
      console.log(error);
    });
}
