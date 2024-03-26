import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Apakah bisa diganti warna primarynya?',
      answer:
        'Tentu saja, Anda bisa mengganti warna primary sesuai logo Anda.',
    },
    {
      question: 'Teknologi apa yang digunakan?',
      answer: 'Laravel, Tailwind CSS, dan MySQL.',
    },
    {
      question: 'Bisa dihosting di mana saja?',
      answer:
        'Bisa dihosting di server manapun yang mendukung PHP dan MySQL.',
    },
  ],
  [
    {
      question: 'Apakah ada dokumentasi?',
      answer:
        'Dokumentasi akan diberikan setelah pembelian.',
    },
    {
      question:
        'Apakah bisa request fitur?',
      answer:
        'Anda bisa menggunakan produk jadi kami MT Landing Page, atau gunakan plan kustomisasi.',
    },
    {
      question:
        'Apakah ada pelatihan?',
      answer:
        'Pelatihan akan diberikan setelah pembelian. 1x pelatihan online 1 jam.',
    },
  ],
  [
    {
      question: 'Apakah modulnya bisa diubah?',
      answer:
        'Modulnya bisa diubah sesuai kebutuhan Anda. Kami juga menyediakan layanan kustomisasi.',
    },
    {
      question: 'Saya lupa password saya. Bagaimana cara mendapatkannya?',
      answer:
        'Silakan hubungi kami di email untuk mendapatkan bantuan lebih lanjut.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Sering Ditanyakan
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Jika pertanyaan Anda tidak terjawab di sini, silakan hubungi kami di email.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
