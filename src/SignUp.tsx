import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "./firebase.config";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignUp = () => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  function signUp() {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
        const userCol = collection(db, "users");
        addDoc(userCol, user).then(() => {
          navigate("/sign-in");
        });
      })
      .catch((err) => {
        alert(err);
      });
  }

  function signGoogle() {
    signInWithPopup(auth, googleProvider);
  }

  return (
    <div className="mx-auto md:w-1/4 w-full border rounded p-3 mt-20">
      <h1 className="text-2xl mb-3">Sign Up</h1>
      <input
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
        placeholder="userName..."
        className="form-control mb-2"
        type="text"
      />
      <input
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
        placeholder="phone..."
        className="form-control mb-2"
        type="text"
      />
      <input
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email..."
        className="form-control mb-2"
        type="email"
      />
      <input
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password..."
        className="form-control mb-2"
        type="password"
      />
      <button onClick={signUp} className="btn btn-dark w-1/2 block mx-auto">
        sign up
      </button>
      <button
        onClick={signGoogle}
        className="btn btn-primary  mt-2 w-1/2 block mx-auto"
      >
        Google
      </button>
    </div>
  );
};

export default SignUp;
