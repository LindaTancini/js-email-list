console.log("Ciao Linda");

// DICHIARO I DATI DELL'API
//METTENDO LE API DENTRO UN CICLO FOR, GENERO 10 EMAIL
for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
      const email = response.data.response;
      console.log(email);
    })
    .catch((error) => {
      console.log(error);
    });
}
