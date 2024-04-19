import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uid?:string
  constructor(private router:Router) { 

    // Add event-listener
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
      this.uid = user.uid;
      console.log("user logged in as ", user.email)
    } else {
      this.uid = undefined
      console.log("user logged out")
    }
  });

  }

  // IF USER LOGGED IN THEY SEEN ADD SNIPPET, LOGOUT AND ABOUT
  isAuthenticate(){
    return this.uid ? true : false
  }

  getUid() {
    return this.uid;
  }

  registerUser(name:string, email:string, password:string, phone:number) {
    
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    this.router.navigate(["/"]);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert("something went wrong while signup try again");
  });
  }

  loginUser(email:string, password:string) {
    
  const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert("something went wrong while login try again");
  });
  }

  logout() {

    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      alert("something went wrong while logout");
    });
  }
}
