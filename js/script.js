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
// !CHIAMATA CHUCK NORRIS QUOTES DA API UTILIZZANDO AXIOS \\
   // ************************************************ \\
  
const chuck = new Vue({
    el: "#chuck",
    data: {
      chuckQuote: ''
    },
    created() {
        // Dentro created richiamo semplicemente la funzione da me dichiarata nei methods in modo da avere già una quote al caricamento della pagina
        this.getNewQuote();
    },
    // Voglio che al click sul button si refreshi la quote e ne mostri sempre una nuova, creo una funzione con lo stesso codice che avrei scritto nella sezione created() se mi fossi accontentato di avere una nuova quote ad ogni refresh di pagina
    methods: {
      getNewQuote() {
          axios.get('https://api.chucknorris.io/jokes/random')
          .then( (response) => {    
          // Inserisco la quote nella variabile che ho inizializzato come stringa vuota nei data, per accedere alla quote entro nei data che consulto tramite dev tools e cerco la key a cui corrisponde la frase, ovvero value
              this.chuckQuote = response.data.value;
          })
          .catch( (error) => {
              alert(error);
          });
      }
    } 
});



    // ********************************************** \\
    // !UTENTE VS COMPUTER SFIDA AL NUMERO PIU' ALTO \\
             // ? UTILIZZO DI COMPUTED VUE \\
  //  Computed permette di creare una funzione che controlla automaticamente i data attribute e risponde di conseguenza alle nostre operazioni
   // ************************************************ \\
  
const utVsComp = new Vue({
    el: "#random-ut-vs-comp",
    data: {
      // Inizializzo le due variabili che popolerò tramite inserimento valori estrapolati da data API
      computerNumber: 0,
      playerNumber: 0
    },
    // Dentro computed posso definire dei metodi esattamente come faccio nella sezione methods sempre con il return che mi serve per estrapolare i miei valori ottenuti ed utilizzarli fuori dalla funz. La convenienza di usare una computed piuttosto che un methods in questo caso specifico risiede nel fatto che la computed che da lo stesso risultato es. utente vince per due volte di fila non sovrascive tutto il codice come farebbe un methods e ci guadagnamo in termini di prestazioni
    computed: {
      gameResults() {
        if (this.playerNumber === this.computerNumber) {
          return 'Nessuno! partita conclusa in parità'
        }
        return this.playerNumber > this.computerNumber ? 'Player!' : 'Computer!';

      }
    },
    created() {
      // Computer number
      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
        .then( (response) => {    
            this.computerNumber = response.data.response;
        })
        .catch( (error) => {
            alert(error);
        });
        // Player number
        axios.get('https://flynn.boolean.careers/exercises/api/random/int')
        .then( (response) => {    
            this.playerNumber = response.data.response;
        })
        .catch( (error) => {
            alert(error);
        });
    }
});



      // ********************************************** \\
          // !ESERCITAZIONE BOOLEAN MAIL GENERATOR \\
          // Generare 10 email e stamparle a schermo utilizzando Vue, Axios e l'API endpoint boolean fornito
     // ************************************************ \\
const email = new Vue({
    el: '#email',
    data: {
      // Nei data inizializzo un array vuoto da popolare dinamicamente con le mie email generate
        mails: []
    },
    created() {
      // Nella sezione created looppo dieci volte all'interno della mia API in modo da poter estrarre il numero di mail che mi viene richiesto
        for (i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            // API richiamata con successo, pusho nel mio array inizializzato nei data Vue il valore corrispondente alla key che mi interessa all'interno dei data che ho consutltato da dev tools (in questo caso response)
            .then( (response) => {    
                    this.mails.push(response.data.response);
            })
            // API non è richiamata con successo, messaggio di errore
            .catch( (error) => {
                alert(error);
            })
        }
    }
}); 
  