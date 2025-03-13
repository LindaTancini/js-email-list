console.log("Ciao Linda");

// DICHIARO I DATI DELL'API
axios
  .get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => {
    const email = response.data.response;
    console.log(email);
  });
