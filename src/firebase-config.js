// Importar as funções necessárias do pacote Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC0BHymfuxwJsZ7PasKfVKaw8vKC4u4oiY",
  authDomain: "ingressos-a1eaa.firebaseapp.com",
  projectId: "ingressos-a1eaa",
  storageBucket: "ingressos-a1eaa.appspot.com",
  messagingSenderId: "1046185211598",
  appId: "1:1046185211598:web:33396240945c805d9d429f"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar o Firestore
const db = getFirestore(app);
export const storage = getStorage(app);

export { db };
