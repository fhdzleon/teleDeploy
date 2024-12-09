"use client";

import React, { useEffect, useState } from "react";
/* import data from "@/helpers/mockAppointments"; */
import Link from "next/link";
import { PATHROUTES } from "@/helpers/pathroutes";
import useGlobalStore from "@/store/globalStore";
import Profile from "@/components/profile/Profile";
import formatFecha from "@/helpers/formatFecha";
import getDiasRestantes from "@/helpers/getDiasRestantes";
import { Appointments } from "@/interfaces/interfaces";

const Page = () => {
  const { user } = useGlobalStore();

  const [section, setSection] = useState<"nextAppoitments" | "profile" | null>(
    "nextAppoitments"
  );

  const [allAppointments, setAllAppointments] = useState<Appointments[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/appointment/my_shifts/${user?.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },

            credentials: "include",
          }
        );
        const data = await response.json();
        console.log(data);

        setAllAppointments(Array.isArray(data) ? data : []);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        console.error("Error fetching appointments");
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div className="flex flex-col items-center space-y-6 p-8">
      <p className="font-bold text-2xl">¡Hola, {user?.name}!</p>
      <div className=" w-full max-w-3xl flex justify-end">
        <Link href={PATHROUTES.APPOINTEMNT}>
          <button className="px-12 py-1 bg-acent w-[205px] h-[50px] shadow-sm shadow-slate-700 text-white rounded-full hover:bg-gray-400 transition">
            Reservar turno
          </button>
        </Link>
      </div>

      <div className="w-full  max-w-3xl">
        <div className="flex  justify-start items-end">
          <div
            className={`relative w-[180px] px-5  max-w-2xl flex justify-center rounded-t-lg border-b-0   text-gray-800 border border-celeste ${
              section === "nextAppoitments"
                ? "font-bold bg-celeste border-b-celeste z-20 py-2"
                : "bg-slate-200 py-1"
            }`}
          >
            <button onClick={() => setSection("nextAppoitments")}>
              Próximos turnos
            </button>
          </div>
          <div
            className={`relative ml-1 w-[180px] px-5  max-w-2xl flex justify-center rounded-t-lg   border-b-0 text-gray-800 border border-celeste ${
              section === "profile"
                ? "font-bold bg-celeste border-b-celeste z-20 py-2 "
                : "bg-slate-200 py-1"
            }`}
          >
            <button onClick={() => setSection("profile")}>Mis datos</button>
          </div>
        </div>

        {/* Contenedor con el borde alrededor de las cards */}
        <div className="relative w-full max-w-3xl border border-celeste bg-celeste z-0 px-12 py-6 space-y-5 shadow-xl rounded-t-none rounded-tr-xl rounded-br-xl rounded-bl-xl">
          {section === "nextAppoitments" && allAppointments.length === 0 && (
            <span>No hay citas proximas</span>
          )}
          {section === "nextAppoitments" &&
            allAppointments.map((appointment, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white border shadow-xl rounded-md p-6 w-full"
              >
                <div className="text-start space-y-3">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5 11.5C5 10.9477 5.4477 10.5 6 10.5H7C7.5523 10.5 8 10.9477 8 11.5V12.5C8 13.0523 7.5523 13.5 7 13.5H6C5.4477 13.5 5 13.0523 5 12.5V11.5ZM7 11.5V12.5H6V11.5H7Z"
                          fill="black"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 10.5C9.4477 10.5 9 10.9477 9 11.5V12.5C9 13.0523 9.4477 13.5 10 13.5H11C11.5523 13.5 12 13.0523 12 12.5V11.5C12 10.9477 11.5523 10.5 11 10.5H10ZM11 11.5H10V12.5H11V11.5Z"
                          fill="black"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13 11.5C13 10.9477 13.4477 10.5 14 10.5H15C15.5523 10.5 16 10.9477 16 11.5V12.5C16 13.0523 15.5523 13.5 15 13.5H14C13.4477 13.5 13 13.0523 13 12.5V11.5ZM14 11.5H15V12.5H14V11.5Z"
                          fill="black"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 14.5C5.4477 14.5 5 14.9477 5 15.5V16.5C5 17.0523 5.4477 17.5 6 17.5H7C7.5523 17.5 8 17.0523 8 16.5V15.5C8 14.9477 7.5523 14.5 7 14.5H6ZM6 15.5V16.5H7V15.5H6Z"
                          fill="black"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9 15.5C9 14.9477 9.4477 14.5 10 14.5H11C11.5523 14.5 12 14.9477 12 15.5V16.5C12 17.0523 11.5523 17.5 11 17.5H10C9.4477 17.5 9 17.0523 9 16.5V15.5ZM10 15.5H11V16.5H10V15.5Z"
                          fill="black"
                        />
                        <path
                          d="M17.5 15.75C17.7761 15.75 18 15.9739 18 16.25V17.2929L18.3535 17.6465C18.5488 17.8417 18.5488 18.1583 18.3535 18.3535C18.1583 18.5488 17.8417 18.5488 17.6465 18.3535L17 17.7071V16.25C17 15.9739 17.2239 15.75 17.5 15.75Z"
                          fill="black"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 3.5C6 3.22386 6.22385 3 6.5 3C6.77615 3 7 3.22386 7 3.5V6C7 6.27615 6.77615 6.5 6.5 6.5C6.22385 6.5 6 6.27615 6 6V5.5H4.5C4.22386 5.5 4 5.72385 4 6V8H17V6C17 5.72385 16.7761 5.5 16.5 5.5H15V4.5H16.5C17.3285 4.5 18 5.1716 18 6V14.0354C19.6961 14.2781 21 15.7367 21 17.5C21 19.433 19.433 21 17.5 21C16.3106 21 15.2598 20.4067 14.6273 19.5H4.5C3.67158 19.5 3 18.8285 3 18V6C3 5.17155 3.67158 4.5 4.5 4.5H6V3.5ZM14 17.5C14 15.7367 15.3039 14.2781 17 14.0354V9H4V18C4 18.2761 4.22386 18.5 4.5 18.5H14.1449C14.0506 18.1832 14 17.8475 14 17.5ZM17.5 20C18.8807 20 20 18.8807 20 17.5C20 16.1193 18.8807 15 17.5 15C16.1193 15 15 16.1193 15 17.5C15 18.8807 16.1193 20 17.5 20Z"
                          fill="black"
                        />
                        <path
                          d="M13.5 6.5C13.2239 6.5 13 6.27615 13 6V5.5H8V4.5H13V3.5C13 3.22386 13.2239 3 13.5 3C13.7761 3 14 3.22386 14 3.5V6C14 6.27615 13.7761 6.5 13.5 6.5Z"
                          fill="black"
                        />
                      </svg>

                      <p className="text-sm ml-2">
                        {formatFecha(appointment.fecha)} {appointment.hora} hrs
                      </p>
                    </div>
                    <p className="text-sm border bg-celeste text-textColor border-gray-400 px-3">
                      {getDiasRestantes(appointment.fecha)}
                    </p>
                  </div>

                  <div className="flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 8C17 10.7614 14.7614 13 12 13C9.2386 13 7 10.7614 7 8C7 5.2386 9.2386 3 12 3C14.7614 3 17 5.2386 17 8ZM16 8C16 10.2092 14.2092 12 12 12C9.79085 12 8 10.2092 8 8C8 5.79085 9.79085 4 12 4C14.2092 4 16 5.79085 16 8Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.95705 14.4276C8.9589 14.4313 8.96075 14.4349 8.9626 14.4386C8.97535 14.4641 8.9878 14.4887 9 14.5119H11.0319C11.4854 14.5118 11.7118 14.5118 11.9384 14.5119H11.9508C12.1727 14.5119 12.399 14.512 12.8426 14.5119H14.8747C14.9888 14.2951 15.2486 13.9491 15.5 14.0063C16.0648 14.135 16.6338 14.3143 17.1805 14.5347L17.1972 14.5264L17.2027 14.5374L17.2064 14.5452C19.264 15.3808 21 16.7981 21 18.285V21H3V18.285C3 16.3973 5.7979 14.6217 8.5 14.0063C8.72065 13.9561 8.85125 14.2166 8.95705 14.4276ZM16.3521 15.2913C16.1375 15.2163 15.9199 15.1483 15.7015 15.088L15.4783 15.5119H12.8426C12.3892 15.512 12.1657 15.5119 11.9448 15.5119C11.7188 15.5118 11.4956 15.5118 11.0322 15.5119H8.39635L8.1894 15.1187C8.1292 15.1361 8.0691 15.154 8.0091 15.1725C8.0058 15.2055 8.0032 15.2427 8.00165 15.2844C7.99515 15.4569 8.00805 15.6614 8.03645 15.87C8.0648 16.0779 8.10695 16.2773 8.15385 16.4381C8.1613 16.4637 8.16875 16.4877 8.17605 16.5102C8.92155 16.5974 9.5 17.2312 9.5 18C9.5 18.8285 8.82845 19.5 8 19.5C7.17155 19.5 6.5 18.8285 6.5 18C6.5 17.4666 6.7785 16.9981 7.198 16.7322L7.19385 16.7181C7.1314 16.504 7.0798 16.2555 7.04565 16.0051C7.0249 15.8531 7.01 15.6958 7.00355 15.541C6.38525 15.8049 5.80925 16.1239 5.32615 16.4764C4.36486 17.1777 4 17.8335 4 18.285V20H20V18.285C20 17.8335 19.6351 17.1777 18.6738 16.4764C18.2817 16.1903 17.8284 15.9262 17.3409 15.6958C17.333 15.7997 17.3217 15.9036 17.3079 16.0051C17.2848 16.1743 17.2538 16.3426 17.2168 16.5H17.5C17.6894 16.5 17.8625 16.607 17.9472 16.7764L18.4472 17.7764C18.482 17.8458 18.5 17.9224 18.5 18V19C18.5 19.2762 18.2761 19.5 18 19.5H17V18.5H17.5V18.1181L17.191 17.5H15.809L15.5 18.1181V18.5H16V19.5H15C14.7239 19.5 14.5 19.2762 14.5 19V18C14.5 17.9224 14.5181 17.8458 14.5528 17.7764L15.0528 16.7764C15.1375 16.607 15.3106 16.5 15.5 16.5H16.1808C16.187 16.4805 16.1933 16.4599 16.1997 16.4381C16.2466 16.2773 16.2888 16.0779 16.3171 15.87C16.3452 15.6642 16.3581 15.4623 16.3521 15.2913ZM8.5 18C8.5 18.2871 8.2692 18.5074 8 18.5074C7.7308 18.5074 7.5 18.2871 7.5 18C7.5 17.7129 7.7308 17.4926 8 17.4926C8.2692 17.4926 8.5 17.7129 8.5 18Z"
                        fill="black"
                      />
                    </svg>
                    <p className="text-sm ml-2">
                      {appointment.doctor.nombreCompleto}
                    </p>
                  </div>

                  <div className="flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.43994 3.78296C9.71609 3.78296 9.93994 4.00682 9.93994 4.28296V7.58294C9.93994 7.85909 9.71609 8.08294 9.43994 8.08294C9.16379 8.08294 8.93994 7.85909 8.93994 7.58294V4.28296C8.93994 4.00682 9.16379 3.78296 9.43994 3.78296Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.8903 6.9524C6.4546 6.81775 7.0315 6.91995 7.6296 7.22915C8.11765 7.4814 8.46325 7.597 8.73285 7.65275C9.0021 7.70845 9.2159 7.70945 9.47435 7.70945L9.47425 8.70945H9.46445C9.2065 8.70945 8.9046 8.70945 8.53035 8.63205C8.1518 8.55375 7.7195 8.4013 7.1704 8.11745C6.7314 7.8905 6.4008 7.85865 6.1224 7.9251C5.83065 7.9947 5.5218 8.18975 5.16655 8.5571C4.3503 9.401 4.09703 10.27 4.00867 10.9381C3.95888 11.7603 4.1069 13.3828 4.84252 14.9698C5.09255 15.5091 5.44745 16.2549 5.88035 16.8379C6.09655 17.1291 6.3133 17.3532 6.52195 17.491C6.72445 17.6247 6.8927 17.6612 7.04505 17.6349C8.6064 17.3659 8.9004 17.3596 9.20425 17.3596H9.72285V18.3596H9.20425C9.19945 18.3596 9.19465 18.3596 9.1898 18.3596C8.97885 18.3594 8.73025 18.3593 7.21485 18.6204C6.74495 18.7014 6.3215 18.5569 5.97095 18.3254C5.62655 18.098 5.3289 17.7726 5.07745 17.434C4.5751 16.7574 4.18177 15.9221 3.93525 15.3903C3.11656 13.6241 2.94962 11.8214 3.01174 10.8579L3.01276 10.842L3.01481 10.8261C3.12083 10.0041 3.43716 8.90675 4.44775 7.86185C4.87035 7.42495 5.33935 7.08385 5.8903 6.9524Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.31978 5.7049C8.06788 6.4205 8.47358 7.2882 8.47358 7.96C8.47358 8.23615 8.69743 8.46 8.97358 8.46C9.24973 8.46 9.47358 8.23615 9.47358 7.96C9.47358 6.93465 8.88928 5.82235 8.01098 4.98225C7.12203 4.13196 5.87163 3.5 4.44788 3.5C4.17174 3.5 3.94788 3.72386 3.94788 4C3.94788 4.27614 4.17174 4.5 4.44788 4.5C5.56983 4.5 6.58228 4.99946 7.31978 5.7049Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.28704 3.50428C4.56105 3.47003 4.81094 3.66439 4.84519 3.9384C5.09089 5.90388 6.81764 6.93848 8.21189 7.49618C8.46829 7.59873 8.59299 7.88973 8.49044 8.14613C8.38789 8.40248 8.09689 8.52723 7.84049 8.42468C6.40619 7.85093 4.17294 6.62268 3.85291 4.06243C3.81866 3.78842 4.01303 3.53853 4.28704 3.50428Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.8811 6.95135C12.3051 6.8194 11.7139 6.91855 11.0955 7.2254C10.5855 7.47855 10.2226 7.5954 9.93763 7.652C9.65288 7.7085 9.42653 7.70945 9.15718 7.70945C8.88103 7.7095 8.65723 7.9334 8.65723 8.2095C8.65728 8.48565 8.88113 8.7095 9.15728 8.70945H9.16693C9.43553 8.70945 9.74653 8.70945 10.1323 8.63285C10.5225 8.5554 10.9698 8.4042 11.5401 8.12115C12.002 7.89195 12.3561 7.857 12.6578 7.9261C12.9709 7.99785 13.2964 8.1972 13.6663 8.56435C14.5243 9.41595 14.7839 10.2906 14.8734 10.9566C14.9102 11.2303 15.1618 11.4223 15.4355 11.3856C15.7092 11.3488 15.9012 11.0971 15.8645 10.8234C15.7535 9.99725 15.4224 8.8985 14.3708 7.8546C13.9304 7.4175 13.4458 7.0807 12.8811 6.95135ZM13.3534 17.1398C13.1544 16.9483 12.8379 16.9544 12.6464 17.1534C12.2678 17.5467 11.9498 17.6788 11.6807 17.6343C10.0548 17.3653 9.75143 17.3595 9.43853 17.3595C9.16238 17.3595 8.93853 17.5834 8.93853 17.8595C8.93853 18.1357 9.16238 18.3595 9.43853 18.3595C9.44323 18.3595 9.44793 18.3595 9.45268 18.3595C9.67618 18.3594 9.93603 18.3593 11.5175 18.6209C12.2785 18.7468 12.9101 18.3215 13.3669 17.8468C13.5584 17.6478 13.5523 17.3313 13.3534 17.1398Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.3252 8.05132C15.8233 8.95677 15.6936 9.90582 15.8931 10.5473C15.9751 10.811 15.8278 11.0913 15.5641 11.1732C15.3004 11.2552 15.0202 11.108 14.9382 10.8443C14.6337 9.86517 14.8614 8.62952 15.4506 7.56652C16.047 6.49062 17.0533 5.51587 18.4129 5.09312C18.6765 5.01112 18.9568 5.15837 19.0388 5.42207C19.1208 5.68577 18.9735 5.96602 18.7098 6.04802C17.6384 6.38117 16.82 7.15872 16.3252 8.05132Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.3593 8.6893C16.7755 9.5442 15.9856 10.0861 15.3229 10.1958C15.0504 10.2409 14.8661 10.4983 14.9112 10.7707C14.9563 11.0432 15.2137 11.2275 15.4861 11.1824C16.4977 11.015 17.4997 10.257 18.1851 9.25325C18.8789 8.23745 19.2982 6.9006 19.0658 5.49595C19.0207 5.22355 18.7633 5.0392 18.4909 5.0843C18.2184 5.1294 18.0341 5.3868 18.0792 5.6592C18.2624 6.76615 17.9349 7.8465 17.3593 8.6893Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.8901 11.5C15.1998 11.5 14.6401 12.0596 14.6401 12.75C14.6401 13.4404 15.1998 14 15.8901 14C16.5805 14 17.1401 13.4404 17.1401 12.75C17.1401 12.0596 16.5805 11.5 15.8901 11.5ZM13.6401 12.75C13.6401 11.5073 14.6475 10.5 15.8901 10.5C17.1328 10.5 18.1401 11.5073 18.1401 12.75C18.1401 13.9927 17.1328 15 15.8901 15C14.6475 15 13.6401 13.9927 13.6401 12.75Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.9227 9.04485C19.4843 9.24645 19.9429 9.6629 20.1975 10.2026C20.4521 10.7423 20.4819 11.361 20.2803 11.9227C20.1871 12.1826 19.9007 12.3177 19.6408 12.2244C19.3809 12.1311 19.2458 11.8448 19.3391 11.5849C19.4511 11.2729 19.4346 10.9291 19.2931 10.6293C19.1517 10.3295 18.8969 10.0981 18.5849 9.9861C18.2728 9.8741 17.9291 9.89065 17.6293 10.0321C17.3294 10.1736 17.0981 10.4283 16.9861 10.7404C16.8928 11.0003 16.6065 11.1353 16.3466 11.0421C16.0867 10.9488 15.9516 10.6625 16.0449 10.4025C16.2465 9.84085 16.6629 9.3823 17.2026 9.1277C17.7423 8.87305 18.361 8.8433 18.9227 9.04485Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.1267 11.588C18.4173 11.5043 18.7217 11.4799 19.0219 11.5165C19.3221 11.553 19.6119 11.6497 19.8739 11.8008C20.1359 11.9518 20.3647 12.1541 20.5467 12.3956C20.7288 12.6371 20.8602 12.9128 20.9333 13.2063C21.0064 13.4997 21.0196 13.8049 20.972 14.1036C20.9245 14.4022 20.8173 14.6882 20.6567 14.9445C20.4962 15.2008 20.2856 15.4221 20.0376 15.5951C19.8111 15.7531 19.4995 15.6977 19.3414 15.4712C19.1834 15.2448 19.2389 14.9331 19.4653 14.7751C19.6031 14.6789 19.7201 14.556 19.8093 14.4136C19.8985 14.2712 19.9581 14.1123 19.9845 13.9464C20.0109 13.7805 20.0035 13.611 19.9629 13.4479C19.9224 13.2849 19.8493 13.1317 19.7482 12.9976C19.647 12.8634 19.5199 12.751 19.3744 12.6671C19.2288 12.5832 19.0678 12.5294 18.9011 12.5091C18.7343 12.4888 18.5651 12.5024 18.4037 12.5489C18.2423 12.5954 18.0919 12.674 17.9615 12.78C17.7472 12.9542 17.4323 12.9217 17.2581 12.7074C17.084 12.4932 17.1165 12.1782 17.3307 12.0041C17.5654 11.8133 17.8361 11.6718 18.1267 11.588Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.8901 14.5C13.1998 14.5 12.6401 15.0596 12.6401 15.75C12.6401 16.4404 13.1998 17 13.8901 17C14.5805 17 15.1401 16.4404 15.1401 15.75C15.1401 15.0596 14.5805 14.5 13.8901 14.5ZM11.6401 15.75C11.6401 14.5073 12.6475 13.5 13.8901 13.5C15.1328 13.5 16.1401 14.5073 16.1401 15.75C16.1401 16.9927 15.1328 18 13.8901 18C12.6475 18 11.6401 16.9927 11.6401 15.75Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.8901 14.5C17.1998 14.5 16.6401 15.0596 16.6401 15.75C16.6401 16.4404 17.1998 17 17.8901 17C18.5805 17 19.1401 16.4404 19.1401 15.75C19.1401 15.0596 18.5805 14.5 17.8901 14.5ZM15.6401 15.75C15.6401 14.5073 16.6475 13.5 17.8901 13.5C19.1328 13.5 20.1401 14.5073 20.1401 15.75C20.1401 16.9927 19.1328 18 17.8901 18C16.6475 18 15.6401 16.9927 15.6401 15.75Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.8901 17.5C15.1998 17.5 14.6401 18.0596 14.6401 18.75C14.6401 19.4404 15.1998 20 15.8901 20C16.5805 20 17.1401 19.4404 17.1401 18.75C17.1401 18.0596 16.5805 17.5 15.8901 17.5ZM13.6401 18.75C13.6401 17.5073 14.6475 16.5 15.8901 16.5C17.1328 16.5 18.1401 17.5073 18.1401 18.75C18.1401 19.9927 17.1328 21 15.8901 21C14.6475 21 13.6401 19.9927 13.6401 18.75Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.9171 16.9828C19.01 16.7228 19.2961 16.5873 19.5562 16.6802C19.8733 16.7935 20.1609 16.9765 20.3979 17.2158C20.6349 17.4551 20.8151 17.7445 20.9253 18.0628C21.0355 18.381 21.0728 18.7199 21.0346 19.0545C20.9964 19.3891 20.8835 19.7108 20.7043 19.996C20.5252 20.2812 20.2843 20.5225 19.9994 20.7021C19.7146 20.8818 19.393 20.9952 19.0585 21.034C18.724 21.0728 18.385 21.0361 18.0666 20.9264C17.7482 20.8168 17.4584 20.637 17.2187 20.4005C17.0222 20.2065 17.0201 19.8899 17.2141 19.6934C17.408 19.4968 17.7246 19.4947 17.9211 19.6887C18.0543 19.8201 18.2153 19.92 18.3922 19.9809C18.5691 20.0418 18.7574 20.0622 18.9433 20.0407C19.1291 20.0191 19.3077 19.9561 19.466 19.8563C19.6242 19.7565 19.7581 19.6224 19.8576 19.464C19.9571 19.3056 20.0198 19.1268 20.0411 18.9409C20.0623 18.7551 20.0416 18.5668 19.9803 18.39C19.9191 18.2132 19.819 18.0524 19.6874 17.9195C19.5557 17.7865 19.3959 17.6848 19.2197 17.6219C18.9597 17.529 18.8242 17.2428 18.9171 16.9828Z"
                        fill="black"
                      />
                    </svg>

                    <p className="text-sm ml-2">
                      {appointment.doctor.especialidad}
                    </p>
                  </div>

                  <div className="flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.52851 15.7382C3.50984 15.6619 3.49995 15.5821 3.49995 15.5V6C3.49995 5.4477 3.94766 5 4.49995 5H19.4999C20.0522 5 20.4999 5.4477 20.4999 6V15.5C20.4999 15.6219 20.4781 15.7387 20.4382 15.8467L21.9941 18.2264C22.2116 18.559 21.973 19 21.5756 19H2.39972C2.0075 19 1.768 18.569 1.97514 18.236L3.52851 15.7382ZM4.49995 6H19.4999V15.5H4.49995V6Z"
                        fill="black"
                      />
                    </svg>

                    <p className="text-sm ml-2">
                      24 horas antes del turno agendado, recibirás por email el
                      enlace a Meet.
                    </p>
                  </div>
                </div>
                {/* <TermsAndConditions /> */}
              </div>
            ))}

          {section === "profile" && (
            <div className=" justify-center items-center ">
              {/* Contenido de la sección de perfil */}
              <Profile />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
