import firebase from "../config/firebase";

export function googleAuth(provider) {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.message;
    });
}

export function emailAuth(email, password) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.message;
    });
}
