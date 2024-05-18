"use client"

import Image from "next/image";
import { motion } from 'framer-motion';
const PengenalanSingapura = () => {
  return (
    <section  className="w-full min-h-screen">
      <div className="relative flex px-4 sm:px-10 xl:container flex-col-reverse lg:flex-row justify-center items-center gap-12 pt-16 pb-24 sm:pt-0 sm:pb-0">

        <div className="flex flex-col gap-6 sm:gap-4 bg-white z-[1] px-2 sm:px-0">
        <div className="px-4 py-4 sm:py-20 z-50">
          <div id="about" className="sm:container overflow-x-hidden">
            <h1  className="ml-2 sm:ml-0 text-xl sm:text-3xl md:text-5xl uppercase flex flex-col lg:max-h-[40px] lg:gap-2 lg:mt-[130px]">
            <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='font-semibold'
              >
                MEMPERKENALKAN <span className="font-normal">TENTANG</span>
              </motion.span>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className='font-bold text-[#1dbbb4]'>EKONOMI SINGAPURA</span>
              </motion.span>
            </h1>
            <div
              className="max-w-[800px] mx-auto p-6 sm:px-8 sm:py-12 rounded-md bg-white border border-gray-600 mt-4 md:[90px] lg:mt-[120px]"
            >
              <h1 className="text-xl sm:text-2xl tracking-widest uppercase font-bold">SINGAPURA</h1>
              <p className="sm:text-lg max-w-2xl mt-4 mb-6 text-left sm:text-justify">
              Singapura dikenal sebagai salah satu pusat keuangan dan perdagangan terkemuka di dunia. Perekonomiannya termasuk dalam kategori ekonomi maju dengan tinkgta pendapatan per kapita yang tinggi. Singapura merupakan salah satu pelabuhan tersibuk dan menjadi pusat perdagangan global seperti aktivitas import dan ekspor banyak terjadi di singapura. Dengan sektor yang baik dari segala aspek menjadikan singapura memiliki ekonomi yang kuat dan berkembang. Namun pada 3 tahun terakhir, singapura mengalami inflasi perekonomian mencapai 5,5%.

              </p>
            </div>
          </div>
        </div>
        </div>

        <div  className="relative mt-10 xl:mt-40 border-4 border-[#0C7C95] w-[250px] h-[230px] sm:w-[395px] sm:h-[377px] xl:w-[595px] xl:h-[477px] bg-white z-[1]">
          <div>
            <div className="absolute -top-5 sm:-top-10 -left-5 sm:-left-10 z-0">
              <div className="relative aspect-square w-[250px] h-[230px] sm:w-[395px] sm:h-[377px] xl:w-[495px] xl:h-[477px]">
              <img src="https://i.ibb.co.com/RSPnCQm/photo-1525625293386-3f8f99389edd.jpg" alt="bg-vector" className="object-cover h-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-20 -left-12 z-[1]">
          <div className="relative aspect-square w-[608px] h-[656px]">
            <Image
              src="/images/bg-vector-3-2.png"
              alt="bg-vector"
              fill={true}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default PengenalanSingapura;