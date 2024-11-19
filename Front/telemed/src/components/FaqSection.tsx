"use client";

import Image from "next/image";
import { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [click, setClick] = useState<boolean>(false);
  const faqItems: FaqItem[] = [
    {
      id: 1,
      question:
        "¿Qué dispositivos necesito para realizar una videollamada con el médico?",
      answer:
        "Solo necesitas un dispositivo con cámara y micrófono (como un smartphone, tablet, laptop o computadora de escritorio), además de una conexión a internet estable. Por el momento la plataforma solo funciona en navegadores web.",
    },
    {
      id: 2,
      question: "¿Necesito WiFi para utilizar el servicio?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum id assumenda officia repudiandae accusamus veritatis labore recusandae, nesciunt modi. ",
    },
    {
      id: 3,
      question: "¿Telemed funciona con cualquier obra social?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod repellendus natus minima aliquam magnam, et debitis quos recusandae voluptatum sit voluptatem ex eos, id odit tempora doloribus voluptatibus, nam sed! ",
    },
    {
      id: 4,
      question: "¿Es segura la información que comparto en la plataforma?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur id harum ut quis rem voluptatem, veritatis, aliquid doloremque repellendus adipisci itaque reiciendis iure impedit, porro voluptatibus aut at nisi odio. ",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2
        id="faqs"
        className="text-4xl text-center mb-12 font-medium text-gray-800 leading-tight"
      >
        Preguntas frecuentes
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="md:flex items-center justify-center hidden">
          <Image
            width={450}
            height={400}
            src="/images/doctor.jpg"
            alt="doctor"
            className="rounded-lg object-cover"
          />
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              style={{ backgroundColor: `${openItem === item.id  ? "rgb(109 40 217 / var(--tw-bg-opacity, 1))" : "#DEDCFF"} `  }}
              className={`rounded-2xl overflow-hidden`}
            >
              <button
                onClick={() => {
                  setOpenItem(openItem === item.id ? null : item.id);
                  setClick(true);
                }}
                className="w-full flex items-center justify-between p-12 text-left hover:bg-violet-700 hover:text-white transition-colors"
              >
                <span className={`font-medium ${openItem === item.id ? "text-white" : ""}`}>{item.question}</span>
                <span className="ml-4">
                  {openItem === item.id ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 ${openItem === item.id ? "text-white" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {openItem === item.id && (
                <div
                  className={`${
                    click ? "bg-violet-700 text-white" : ""
                  }  px-6 pb-6 `}
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
