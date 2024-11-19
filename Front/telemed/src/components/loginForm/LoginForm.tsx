import React from "react";

const LoginForm = () => {
  return (
    <div>
      <h1 className="text-white text-center mb-2 text-lg">Iniciar sesión</h1>
      <form className=" flex flex-col space-y-5 max-w-3xl mx-auto" action="">
        <input
          className="p-2 text-black"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          className="p-2 text-black"
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button className=" bg-red-700 p-2" type="submit">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
