"use client"

import { useState } from "react"

interface FaqItem {
  id: number
  question: string
  answer: string
}

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(0)

  const faqItems: FaqItem[] = [
    {
      id: 1,
      question: "¿Lorem Ipsum Lorem Ipsum Lorem Ipsum?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi aliquid provident mollitia ut explicabo error at nesciunt sed cumque? Alias aliquam quis accusantium minus facere soluta labore eius odit, in minima, inventore cum veniam ipsam est animi perspiciatis a laborum quisquam obcaecati totam commodi quos dolorum? Culpa saepe ducimus odit. "
    },
    {
      id: 2,
      question: "¿Lorem ipsum dolor sit amet.?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum id assumenda officia repudiandae accusamus veritatis labore recusandae, nesciunt modi. "
    },
    {
      id: 3,
      question: "¿Lorem ipsum dolor sit amet consectetur.?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod repellendus natus minima aliquam magnam, et debitis quos recusandae voluptatum sit voluptatem ex eos, id odit tempora doloribus voluptatibus, nam sed! "
    },
    {
      id: 4,
      question: "¿Lorem ipsum dolor sit.?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur id harum ut quis rem voluptatem, veritatis, aliquid doloremque repellendus adipisci itaque reiciendis iure impedit, porro voluptatibus aut at nisi odio. "
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 id="faqs" className="text-4xl text-center mb-12 font-medium text-gray-800 leading-tight">Preguntas frecuentes</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-200 rounded-2xl aspect-square flex items-center justify-center">
          {/* <div className="w-32 h-32 bg-gray-400 rounded-sm transform -translate-y-1" /> info adentro */}
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-300/50 transition-colors"
              >
                <span className="font-medium">{item.question}</span>
                <span className="ml-4">
                  {openItem === item.id ? (
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
                <div className="px-6 pb-6">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}