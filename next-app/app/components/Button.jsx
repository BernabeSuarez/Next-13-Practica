"use client";
import { useState } from "react";

const Button = () => {
  const [like, setLike] = useState(false);
  return (
    <button onClick={() => setLike(!like)}>
      {like ? "Ya no me gusta " : "Me Gusta"}
    </button>
  );
};

export default Button;
