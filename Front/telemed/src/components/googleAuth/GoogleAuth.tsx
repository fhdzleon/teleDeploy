import React from "react";

const GoogleAuth = () => {
  const handleClick = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  };

  return (
    <>
      <button
        className="w-4/5 mx-auto hover:shadow-form rounded-full py-3 px-8 text-center text-base font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={handleClick}
      >
        Iniciar sesión con Google
      </button>
    </>
  );
};

export default GoogleAuth;
