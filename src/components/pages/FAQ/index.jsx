import { useState } from 'react'

import UserMenu from '../../UI/organisms/UserMenu'
import Sidebar from '../../UI/organisms/Sidebar'

import { UnverifiedIcon, ChevronDownIcon } from '@primer/octicons-react'

const FAQ = () => {
  document.title = 'FAQ'
  document.body.style = 'background: #EEEEEE;'

  const [jawab1, setJawab1] = useState(false)
  const [jawab2, setJawab2] = useState(false)
  const [jawab3, setJawab3] = useState(false)
  const [jawab4, setJawab4] = useState(false)
  const [jawab5, setJawab5] = useState(false)
  const [jawab6, setJawab6] = useState(false)

  return (
    <>
      <Sidebar />
      <UserMenu />

      <div className="ml-80 pt-3 font-roboto">
        <UnverifiedIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ FAQ</span> <br />
        <span className="text-md text-darkgrey font-bold">
          Frequently Asked Question
        </span>
      </div>

      <div
        style={{
          marginTop: '17px',
          width: '80%',
          float: 'right',
          padding: '20px',
        }}
      >
        <div
          style={{ float: 'left', width: '50%' }}
          className="bg-white rounded-lg shadow-lg mx-auto max-w-2xl p-4"
        >
          <div className="flow-root">
            <ul className="divide-y divide-gray-200">
              <li className="py-3 py-4">
                <div
                  onClick={() => setJawab1(!jawab1)}
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
                {jawab1 ? (
                  <p className="ml-4 mt-4 font-roboto font-light text-sm">
                    MyPoints adalah website aplikasi yang digunakan perusahaan
                    retail yang menjual berbagai produk. Setiap penjualan
                    produk, agen yang terdaftar bisa mendapatkan poin sesuai
                    produk yang dijualnya, lalu dapat menukar poin tersebut
                    dengan hadiah yang tersedia.
                  </p>
                ) : null}
              </li>

              <li className="py-3 sm:py-4">
                <div
                  onClick={() => setJawab2(!jawab2)}
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
                {jawab2 ? (
                  <p className="ml-4 mt-4 font-roboto font-light text-sm">
                    Yes! Untuk menjadi agen, Anda harus didaftarkan oleh
                    masing-masing Admin retail. Setelah itu Anda bisa memulai
                    untuk mendapatkan MyPoints.
                  </p>
                ) : null}
              </li>

              <li className="py-3 sm:py-4">
                <div
                  onClick={() => setJawab3(!jawab3)}
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
                {jawab3 ? (
                  <p className="ml-4 mt-4 font-roboto font-light text-sm">
                    1 MyPoints senilai 100 Rupiah.
                  </p>
                ) : null}
              </li>

              <li className="py-3 sm:py-4">
                <div
                  onClick={() => setJawab4(!jawab4)}
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
                {jawab4 ? (
                  <p className="ml-4 mt-4 font-roboto font-light text-sm">
                    Jual salah satu produk yang ada, kemudian nantinya kamu akan
                    mendapatkan saldo MyPoints. Setelah itu, kamu bisa
                    menukarkan saldo MyPoints-mu dengan hadiah tertentu.
                  </p>
                ) : null}
              </li>

              <li className="py-3 sm:py-4">
                <div
                  onClick={() => setJawab5(!jawab5)}
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
                {jawab5 ? (
                  <p className="ml-4 mt-4 font-roboto font-light text-sm">
                    Jumlah MyPoints untuk setiap produk berbeda. Anda dapat
                    memeriksa jumlah Poin yang akan Anda peroleh dari setiap
                    produk.
                  </p>
                ) : null}
              </li>

              <li className="py-3 sm:py-4">
                <div
                  onClick={() => setJawab6(!jawab6)}
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
                {jawab6 ? (
                  <p className="ml-4 mt-4 font-roboto font-light text-sm">
                    Anda dapat menggunakan MyPoints untuk redeem / penukaran
                    dengan hadiah menarik tertentu sesuai keinginan.
                  </p>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ
