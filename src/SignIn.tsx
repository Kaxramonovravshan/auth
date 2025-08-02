import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function signIn() {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => {
        return res.user.getIdToken();
      })
      .then((token) => {
        localStorage.setItem("token", token);
        navigate("/");
      })
      .catch(() => {
        alert("This user is undefined");
      });
  }

  return (
    <div className="mx-auto w-1/4 border rounded p-3 mt-20">
      <h1 className="text-2xl mb-3">Sign In</h1>
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
      <button onClick={signIn} className="btn btn-dark w-1/2 block mx-auto">
        sign in
      </button>
      <p className="text-center">or</p>
      <div className="flex flex-col justify-center items-center">
        <p>If you have not account you can use </p>
        <Link to={"/sign-up"} className="text-blue-500 underline">
          sign up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
