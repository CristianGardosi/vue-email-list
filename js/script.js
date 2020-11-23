

  // ********************************************** \\
// !PRIMA SEMPLICE CHIAMATA AD API UTILIAZZANDO AXIOS \\
      // Numero random preso da una API boolean 
  // *********************************************** \\

const random = new Vue({
    el: "#random",
    data: {
      randomNumber: 0
    },
    // Created in Vue significa che ciò che noi scriviamo all'interno di questa sezione viene runnato al caricamento della pagina in automatico, non appena l'istanza vue si collega al file html ed è solitamente la sezione adibita al richiamo di API qualora necessario
    created() {
      // Richiamo la librearia axios, affianco il metodo che mi serve (GET = prendere elementi da una API ed utilizzarli nel mio progetto) e l'http relativo alla API da cui pescare i dati
      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
      // POSSO CONTROLLARE LO STATO DEL MIO RICHIAMO AD API DIRETTAMENTE DA DEV TOOLS PER VEDERE SE E' ANDATA A BUON FINE (200)
      // API richiamata con successo, utilizzo della sintassi arrow function per una scrittura più rapida ed intuitiva (N.B. ricorda nell'utilizzo della function per esteso il discorso sul .this che va settato appena dopo created in una const apposita per via dello scope delle funzioni estese)
      .then( (response) => {
        // La variabile randomNumber che avevo settato nei data prenderà come valore quello relativo alla key response all'interno dei data (consultabile dalla console del dev tools)
        this.randomNumber = response.data.response
        
        console.log(response);
      })
      // API non è stata richiamata con successo, posso aver sbagliato qualcosa o comunque nel mio processo ci sono degli errori che non permetto un corretto funzionamento
      .catch(function (error) {
        console.log(error);
      })
    }
});



    // ********************************************** \\
   // !CHIAMATA CHUCK NORRIS AD API UTILIZZANDO AXIOS \\
   // ************************************************ \\
  











   const email = new Vue({
    el: '#email',
    data: {
        mails: []
    },
    created() {
        for (i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (response) => {    
                    this.mails.push(response.data.response);
            })
            .catch( (error) => {
                alert(error);
            })
        }
    }
  }); 
  