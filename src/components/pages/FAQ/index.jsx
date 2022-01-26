import { useState } from 'react'
import { UnverifiedIcon, ChevronDownIcon } from '@primer/octicons-react'

import faqImage from '../../../assets/faq.svg'

const Questions = {
  first: false,
  second: false,
  third: false,
  fourth: false,
  fifth: false,
  sixth: false,
}

const FAQ = () => {
  document.title = 'FAQ'
  document.body.style = 'background: #EEEEEE;'

  const [faq, setFaq] = useState(Questions)

  return (
    <>
      <div className="ml-80 pt-10 font-roboto">
        <UnverifiedIcon size={20} fill="#5C5C5C" />
        <span className="text-lg text-darkgrey font-bold"> F A Q</span>
      </div>

      <div
        style={{
          marginTop: '17px',
          marginRight: '20px',
          width: '85%',
          float: 'right',
          padding: '20px',
        }}
      >
        <div
          style={{ float: 'left', width: '50%' }}
          className="bg-white rounded-lg shadow-lg mx-auto ml-10 max-w-2xl p-4"
        >
          <div className="flow-root">
            <ul className="divide-y divide-gray-200">
              <li className="py-3">
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
                    retail yang menjual berbagai produk. Setiap penjualan
                    produk, agen yang terdaftar bisa mendapatkan poin sesuai
                    produk yang dijualnya, lalu dapat menukar poin tersebut
                    dengan hadiah yang tersedia.
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
                      Bagaimana caranya mendapatkan MyPoints?
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
                    Kirim bukti penjualanmu di halaman 'Claims' untuk
                    mendapatkan saldo MyPoints. Setelah itu, kamu bisa
                    menukarkan saldo MyPoints-mu dengan hadiah tertentu.
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
                {faq.fourth ? (
                  <p className="ml-4 mt-4 font-roboto font-light text-sm">
                    Jumlah MyPoints untuk setiap produk berbeda. Anda dapat
                    memeriksa jumlah Poin yang akan Anda peroleh dari setiap
                    produk.
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
                      MyPoints bisa digunakan untuk apa saja?
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
                    Anda dapat menggunakan MyPoints untuk redeem / penukaran
                    dengan hadiah menarik tertentu sesuai keinginan.
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
                      Bagaimana cara menukarkan MyPoints dengan hadiah?
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
                    Pergi ke halamam Redeems &gt; Pilih hadiah yang kamu
                    inginkan &gt; Pastikan saldo MyPoints mencukupi &gt; Isi
                    deskripsi dengan No Rekening atau No Handphone untuk
                    pengiriman hadiah &gt; Klik 'Dapatkan Hadiah'.
                  </p>
                ) : null}
              </li>
            </ul>
          </div>
        </div>

        <div style={{ position: 'sticky', float: 'right', width: '40%' }}>
          <img
            src={faqImage}
            className="fixed bottom-15 right-24 w-1/3"
            alt="faq"
          />
        </div>
      </div>
    </>
  )
}

export default FAQ
