import React, { useEffect, useState } from "react";
import { auth } from "./firebase.config";

const Home = () => {
  const [currentUser, setCurrentUser] = useState<null | string>("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setCurrentUser(user.email);
    }
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Hello - {currentUser}</h1>
    </div>
  );
};

export default Home;
