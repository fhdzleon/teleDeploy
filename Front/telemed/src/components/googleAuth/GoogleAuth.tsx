import React from "react";
import useGlobalStore from "@/store/globalStore";

const GoogleAuth = () => {
  const { setUser } = useGlobalStore();

  const handleClick = async () => {
    const popup = window.open(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/google`,
      "GoogleAuth",
      "width=500,height=600"
    );

    if (!popup) {
      console.error("No se pudo abrir la ventana emergente");
      return;
    }

    const interval = setInterval(() => {
      if (popup.closed) {
        clearInterval(interval);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const userData = (window as any).userData;
        if (userData) {
          setUser(userData);
        }
      }
    }, 500);
  };

  return (
    <>
      <button
        className="w-4/5 mx-auto flex items-center justify-center gap-x-2 hover:shadow-form rounded-full shadow-xl py-3 px-8 text-center text-base font-semibold text-textColor"
        onClick={handleClick}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_924_1533)">
            <path
              d="M24.2584 12.8949C24.2584 12.0792 24.1923 11.259 24.0512 10.4565H12.7324V15.0775H19.2142C18.9452 16.5679 18.081 17.8863 16.8155 18.724V21.7224H20.6825C22.9533 19.6324 24.2584 16.5458 24.2584 12.8949Z"
              fill="#4285F4"
            />
            <path
              d="M12.7323 24.6195C15.9687 24.6195 18.6981 23.5568 20.6867 21.7225L16.8197 18.7242C15.7439 19.4561 14.3549 19.8706 12.7367 19.8706C9.60607 19.8706 6.95165 17.7586 5.99924 14.9189H2.00879V18.0099C4.0459 22.0621 8.19509 24.6195 12.7323 24.6195Z"
              fill="#34A853"
            />
            <path
              d="M5.99496 14.9189C5.4923 13.4285 5.4923 11.8147 5.99496 10.3243V7.2334H2.00892C0.306921 10.6242 0.306921 14.619 2.00892 18.0098L5.99496 14.9189Z"
              fill="#FBBC04"
            />
            <path
              d="M12.7323 5.36831C14.4431 5.34186 16.0966 5.98562 17.3356 7.16732L20.7617 3.74127C18.5923 1.70416 15.713 0.584186 12.7323 0.619461C8.19508 0.619461 4.0459 3.17687 2.00879 7.23346L5.99483 10.3244C6.94283 7.48038 9.60166 5.36831 12.7323 5.36831Z"
              fill="#EA4335"
            />
          </g>
          <defs>
            <clipPath id="clip0_924_1533">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.492188 0.618652)"
              />
            </clipPath>
          </defs>
        </svg>
        Continuar con Google
      </button>
    </>
  );
};

export default GoogleAuth;
