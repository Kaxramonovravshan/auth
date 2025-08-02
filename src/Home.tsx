import { useEffect, useState } from "react";
import { auth } from "./firebase.config";
import { onAuthStateChanged } from "firebase/auth";

const Home = () => {
  const [currentUser, setCurrentUser] = useState<null | string>("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.email);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Hello - {currentUser?.slice(-10) || "Guest"}</h1>
    </div>
  );
};

export default Home;
