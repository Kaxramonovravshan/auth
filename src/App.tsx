import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";

const App = () => {
  return (
    <div>
      <div className="w-full md:flex-row flex-col flex justify-between items-center min-h-20 p-3 bg-dark text-white">
        <h1 className="text-4xl">Logo</h1>

        <ul className="flex gap-10">
          <li>About</li>
          <li>Product</li>
          <li>Service</li>
        </ul>

        <div>
          <Link to={"/sign-in"} className="btn btn-primary">
            sign in
          </Link>
          <button
            onClick={() => {
              signOut(auth).then(() => {
                localStorage.removeItem("token");
              });
            }}
            className="btn btn-danger"
          >
            sign out
          </button>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
