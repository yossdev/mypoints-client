import { useState } from 'react'
import { ChevronDownIcon } from '@primer/octicons-react'

const FAQ = {
  first: false,
  second: false,
  third: false,
  fourth: false,
  fifth: false,
  sixth: false,
}

const DaftarPertanyaan = () => {
  const [faq, setFaq] = useState(FAQ)

  return (
    <>
      <div className="mx-auto mt-36 pb-2 w-fit h-12 border-b-2 border-purple">
        <h1 className="text-center text-2xl font-bold leading-tight text-purple font-poppins">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="mx-auto p-4 max-w-2xl sm:p-8">
        <div className="flow-root">
          <ul className="divide-y divide-gray-200">
            <li className="py-3 sm:py-4">
              <div
                onClick={() => setFaq({ ...faq, first: !faq.first })}
                className="flex items-center space-x-4 hover:underline cursor-pointer"
              >
                <div className="flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="font-roboto text-purple">Apa itu MyPoints?</p>
                </div>
                <ChevronDownIcon
                  size={20}
                  className="inline-flex items-center"
                  fill="#5F2788"
                />
              </div>
              {faq.first ? (
                <p className="ml-4 mt-4 font-roboto font-light text-sm">
                  MyPoints adalah website aplikasi yang digunakan perusahaan
                  retail yang menjual berbagai produk. Setiap penjualan produk,
                  agen yang terdaftar bisa mendapatkan poin sesuai produk yang
                  dijualnya, lalu dapat menukar poin tersebut dengan hadiah yang
                  tersedia.
                </p>
              ) : null}
            </li>

            <li className="py-3 sm:py-4">
              <div
                onClick={() => setFaq({ ...faq, second: !faq.second })}
                className="flex items-center space-x-4 hover:underline cursor-pointer"
              >
                <div className="flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="font-roboto text-purple">
                    Apakah harus menjadi agen untuk mendapatkan MyPoints?
                  </p>
                </div>
                <ChevronDownIcon
                  size={20}
                  className="inline-flex items-center"
                  fill="#5F2788"
                />
              </div>
              {faq.second ? (
                <p className="ml-4 mt-4 font-roboto font-light text-sm">
                  Yes! Untuk menjadi agen, Anda harus didaftarkan oleh
                  masing-masing Admin retail. Setelah itu Anda bisa memulai
                  untuk mendapatkan MyPoints.
                </p>
              ) : null}
            </li>

            <li className="py-3 sm:py-4">
              <div
                onClick={() => setFaq({ ...faq, third: !faq.third })}
                className="flex items-center space-x-4 hover:underline cursor-pointer"
              >
                <div className="flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="font-roboto text-purple">
                    Berapa rupiah konversi 1 MyPoints?
                  </p>
                </div>
                <ChevronDownIcon
                  size={20}
                  className="inline-flex items-center"
                  fill="#5F2788"
                />
              </div>
              {faq.third ? (
                <p className="ml-4 mt-4 font-roboto font-light text-sm">
                  1 MyPoints senilai 100 Rupiah.
                </p>
              ) : null}
            </li>

            <li className="py-3 sm:py-4">
              <div
                onClick={() => setFaq({ ...faq, fourth: !faq.fourth })}
                className="flex items-center space-x-4 hover:underline cursor-pointer"
              >
                <div className="flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="font-roboto text-purple">
                    Bagaimana caranya mendapatkan MyPoints?
                  </p>
                </div>
                <ChevronDownIcon
                  size={20}
                  className="inline-flex items-center"
                  fill="#5F2788"
                />
              </div>
              {faq.fourth ? (
                <p className="ml-4 mt-4 font-roboto font-light text-sm">
                  Jual salah satu produk yang ada, kemudian nantinya kamu akan
                  mendapatkan saldo MyPoints. Setelah itu, kamu bisa menukarkan
                  saldo MyPoints-mu dengan hadiah tertentu.
                </p>
              ) : null}
            </li>

            <li className="py-3 sm:py-4">
              <div
                onClick={() => setFaq({ ...faq, fifth: !faq.fifth })}
                className="flex items-center space-x-4 hover:underline cursor-pointer"
              >
                <div className="flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="font-roboto text-purple">
                    Berapa banyak MyPoints yang bisa didapatkan dari setiap
                    transaksi?
                  </p>
                </div>
                <ChevronDownIcon
                  size={20}
                  className="inline-flex items-center"
                  fill="#5F2788"
                />
              </div>
              {faq.fifth ? (
                <p className="ml-4 mt-4 font-roboto font-light text-sm">
                  Jumlah MyPoints untuk setiap produk berbeda. Anda dapat
                  memeriksa jumlah Poin yang akan Anda peroleh dari setiap
                  produk.
                </p>
              ) : null}
            </li>

            <li className="py-3 sm:py-4">
              <div
                onClick={() => setFaq({ ...faq, sixth: !faq.sixth })}
                className="flex items-center space-x-4 hover:underline cursor-pointer"
              >
                <div className="flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="font-roboto text-purple">
                    MyPoints bisa digunakan untuk apa saja?
                  </p>
                </div>
                <ChevronDownIcon
                  size={20}
                  className="inline-flex items-center"
                  fill="#5F2788"
                />
              </div>
              {faq.sixth ? (
                <p className="ml-4 mt-4 font-roboto font-light text-sm">
                  Anda dapat menggunakan MyPoints untuk redeem / penukaran
                  dengan hadiah menarik tertentu sesuai keinginan.
                </p>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default DaftarPertanyaan
