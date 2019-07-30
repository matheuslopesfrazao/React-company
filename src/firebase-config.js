const Rebase = require ('re-base')       /* Importando a dependência do Rebase */
const firebase = require ('firebase')    /* Importando a dependência do Firebase */

const FirebaseConfig = {
    apiKey: "AIzaSyCr1ynm5_v39X6iCWXbrx5qNiaEd313iwc",
    authDomain: "xumes-portfolio-eaeman.firebaseapp.com",
    databaseURL: "https://xumes-portfolio-eaeman.firebaseio.com",
    projectId: "xumes-portfolio-eaeman",
    storageBucket: "gs://xumes-portfolio-eaeman.appspot.com/",
    messagingSenderId: "309263854842",
    appId: "1:309263854842:web:87d45f7db93a80bf"
  } // Esse bloco de código acima serve para fazer a leitura dos dados que estão no firebase 


  // Initialize Firebase
const app = firebase.initializeApp(FirebaseConfig);
const config = Rebase.createClass(app.database()) //Inicia o Rebase com o "app.database()"

export const storage = app.storage()
export const auth = app.auth()

export default config