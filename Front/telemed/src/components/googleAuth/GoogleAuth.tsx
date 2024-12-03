import React from "react";

const GoogleAuth = () => {
  const handleClick = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/google`);
  };

  return (
    <div>
      <button onClick={handleClick}>Google</button>
    </div>
  );
};

export default GoogleAuth;
