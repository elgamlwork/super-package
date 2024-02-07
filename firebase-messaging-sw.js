// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyCWzWIZgl1CdAsLOUHxWLe2QQT4XVDEydM",
  authDomain: "newsypro-a8e04.firebaseapp.com",
  projectId: "newsypro-a8e04",
  storageBucket: "newsypro-a8e04.appspot.com",
  messagingSenderId: "724071056241",
  appId: "1:724071056241:web:20a3a67d6c2a53fa70ecd0",
  measurementId: "G-B323V9D45F"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  // Add your desired URL to navigate to when the notification is clicked
  const urlToOpen = "https://example.com";

  // Open the URL in a new window or tab
  event.waitUntil(clients.openWindow(urlToOpen));
});
