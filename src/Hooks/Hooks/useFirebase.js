import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../../Firebase/Firebase.init";

// firebase initialization function called here
initializeAuthentication();

const useFirebase = () => {
  // react states are here
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // auth and firebase providers here
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // create user with email and password here
  const createUser = (email, password, name, navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateUserProfile(name);
        setUser(result.user);
        setError("");
        navigate("/home");
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  // sign in existing user here with email and password
  const signIn = (email, password, navigate) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
        navigate("/home");
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  // getting the current user here || user session
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setError("");
      } else {
        setUser({});
      }
      setLoading(false);
    });
  }, [auth]);

  // update user profile name || name update here
  const updateUserProfile = (name) => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  // sign in using google here
  const signInWithGoogle = (navigate) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setError("");
        navigate("/home");
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  // log out user here
  const logoutUser = () => {
    signOut(auth)
      .then(() => console.log("successfully logout"))
      .catch((error) => setError(error.message));
  };

  // returning here all the necessary things
  return {
    user,
    error,
    setUser,
    setError,
    createUser,
    signIn,
    loading,
    logoutUser,
    signInWithGoogle,
  };
};

export default useFirebase;
