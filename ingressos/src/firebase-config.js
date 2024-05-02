const firebaseConfig = {
    apiKey: "sua-api-key",
    authDomain: "seu-auth-domain",
    projectId: "seu-project-id",
    storageBucket: "seu-storage-bucket",
    messagingSenderId: "seu-messaging-sender-id",
    appId: "seu-app-id"
  };
  
  // Inicializa o Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Inicializa o Firestore
  const db = firebase.firestore();
  