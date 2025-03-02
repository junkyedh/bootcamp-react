import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { libLazy } from "../../temp";

export default function Home() {
  const [user, setUser] = useSearchParams();
  const name = user.get("name");
  const age = user.get("age");

  useEffect(() => {
    libLazy((m) => {
      m.raise();
    });
  }, []);

  return (
    <div>
      {name} Home - {age}
    </div>
  );
}
