import { FirebaseApp, initializeApp } from 'firebase/app'
import { Analytics, getAnalytics, logEvent } from 'firebase/analytics'

let app: FirebaseApp | undefined
let analytics: Analytics | undefined
const firebaseConfig = {
  apiKey: "AIzaSyD5IPrdLiyEtmMeYaYGcIa_26OSmiDTW2o",
  authDomain: "mairdrop-fbdc9.firebaseapp.com",
  projectId: "mairdrop-fbdc9",
  storageBucket: "mairdrop-fbdc9.appspot.com",
  messagingSenderId: "11530837566",
  appId: "1:11530837566:web:7d446425b6bb66be047b6f",
  measurementId: "G-3G8X66Y9LF"
}

if (!app && typeof window !== 'undefined') {
  app = initializeApp(firebaseConfig)
  analytics = getAnalytics(app)
}

export { app, analytics }
