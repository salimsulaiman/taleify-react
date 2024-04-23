import React from "react";
import Navbar from "../../component/Navbar";

import Literation from "../../assets/image/literation.jpg";
import Happy from "../../assets/image/happy.jpg";
import Confuse from "../../assets/image/confuse.jpg";
import Idea from "../../assets/image/idea.jpg";
import Fantasy from "../../assets/image/fantasy.jpg";
import Footer from "../../component/Footer";

function Article() {
  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      <Navbar />
      <section id="article" className="bg-purple-light-50 w-full">
        <div className="container-fluid bg-cover bg-center" style={{ backgroundImage: 'url("/background5.png")' }}>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-9 pt-28 pb-14 md:px-9 md:pt-24 md:pb-14 lg:px-9 lg:pt-32 lg:pb-14">
            <div className="col-span-1 lg:col-span-2" id="artikel">
              <div className="w-full h-[200px] md:h-[392px] lg:h-[392px] rounded-xl overflow-hidden relative">
                <img src={Literation} alt="literation.jpg" className="object-center object-cover" />
              </div>
              <h1 className="text-xl md:text-4xl lg:text-4xl text-slate-700 font-bold leading-relaxed my-5">
                Pentingkah Kemampuan Literasi Membaca?
              </h1>
              <div className="text-slate-500 text-xs md:text-base">
                <p className="text-justify mb-4">
                  Kemampuan literasi membaca memiliki peran yang sangat penting dalam perkembangan individu dan
                  masyarakat secara keseluruhan. Literasi membaca bukan hanya sekadar keterampilan teknis untuk
                  mengenali huruf dan kata-kata, tetapi melibatkan pemahaman yang mendalam terhadap teks yang dibaca.
                  Berikut adalah beberapa alasan mengapa kemampuan literasi membaca begitu penting:
                </p>
                <p className="text-justify mb-4">
                  1. Pemahaman Informasi: Kemampuan membaca yang baik memungkinkan seseorang untuk memahami informasi
                  dengan lebih baik. Ini melibatkan kemampuan mengidentifikasi ide pokok, menyimpulkan, dan mengevaluasi
                  informasi yang ditemui dalam berbagai konteks.
                </p>
                <p className="text-justify mb-4">
                  2. Pengembangan Kosa Kata: Membaca secara teratur membantu memperluas kosa kata seseorang. Semakin
                  banyak kata yang dikenal, semakin baik seseorang dapat berkomunikasi dan memahami konten bacaan yang
                  lebih kompleks.
                </p>
                <p className="text-justify mb-4">
                  3. Pengembangan Kemampuan Analitis: Literasi membaca memacu perkembangan kemampuan analitis. Individu
                  yang memiliki kemampuan membaca yang baik cenderung memiliki kemampuan analisis yang lebih baik dalam
                  menanggapi masalah dan situasi kompleks.
                </p>
                <p className="text-justify mb-4">
                  4. Peningkatan Kemampuan Menulis: Membaca dan menulis saling terkait. Seseorang yang terampil dalam
                  membaca cenderung memiliki kemampuan menulis yang lebih baik karena mereka terpapar pada struktur
                  bahasa dan gaya penulisan yang bervariasi.
                </p>
                <p className="text-justify mb-4">
                  5. Kesempatan Pendidikan yang Lebih Baik: Kemampuan membaca yang baik membuka pintu menuju pendidikan
                  yang lebih tinggi. Individu dengan literasi membaca yang tinggi lebih mampu mengakses berbagai jenis
                  pembelajaran dan mengambil manfaat penuh dari kesempatan pendidikan.
                </p>
                <p className="text-justify mb-4">
                  6. Pemecahan Masalah: Literasi membaca membantu dalam pengembangan kemampuan pemecahan masalah. Dengan
                  membaca, seseorang dapat mengasah keterampilan kritisnya dan mengidentifikasi solusi untuk berbagai
                  tantangan.
                </p>
                <p className="text-justify mb-4">
                  7. Kritisitas terhadap Media: Kemampuan membaca yang baik membantu seseorang untuk menjadi lebih
                  kritis terhadap informasi yang ditemui di media. Ini melibatkan kemampuan untuk memilah-milah
                  informasi yang dapat dipercaya dan mengenali potensi bias atau manipulasi.
                </p>
              </div>
            </div>
            <div className="" id="rekomendasi">
              <h4 className="text-xl md:text-2xl lg:text-base text-slate-700 font-bold mb-4 text-center lg:text-start">
                Artikel Lainnya
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="min-h-[281px] bg-white rounded-lg p-4">
                  <div className="min-h-[153px] max-h-[153px] w-full overflow-hidden rounded-lg flex item-center justify-center">
                    <img src={Happy} alt="happy.png" className="w-full h-full object-cover object-top" />
                  </div>
                  <h4 className="text-slate-700 font-bold mt-4">5 Tips Meningkatkan Kemampuan Literasi</h4>
                  <h4 className="text-slate-500 mt-2 text-xs md:text-base">
                    Kemampuan membaca adalah suatu hal yang harus dimiliki oleh semua orang...
                  </h4>
                </div>
                <div className="min-h-[281px] bg-white rounded-lg p-4">
                  <div className="min-h-[153px] max-h-[153px] w-full overflow-hidden rounded-lg flex item-center justify-center">
                    <img src={Confuse} alt="happy.png" className="w-full h-full object-cover object-top" />
                  </div>
                  <h4 className="text-slate-700 font-bold mt-4">5 Tips Meningkatkan Kemampuan Literasi</h4>
                  <h4 className="text-slate-500 mt-2 text-xs md:text-base">
                    Kemampuan membaca adalah suatu hal yang harus dimiliki oleh semua orang...
                  </h4>
                </div>
                <div className="min-h-[281px] bg-white rounded-lg p-4">
                  <div className="min-h-[153px] max-h-[153px] w-full overflow-hidden rounded-lg flex item-center justify-center">
                    <img src={Idea} alt="happy.png" className="w-full h-full object-cover object-top" />
                  </div>
                  <h4 className="text-slate-700 font-bold mt-4">5 Tips Meningkatkan Kemampuan Literasi</h4>
                  <h4 className="text-slate-500 mt-2 text-xs md:text-base">
                    Kemampuan membaca adalah suatu hal yang harus dimiliki oleh semua orang...
                  </h4>
                </div>
                <div className="min-h-[281px] bg-white rounded-lg p-4">
                  <div className="min-h-[153px] max-h-[153px] w-full overflow-hidden rounded-lg flex item-center justify-center">
                    <img src={Fantasy} alt="happy.png" className="w-full h-full object-cover object-top" />
                  </div>
                  <h4 className="text-slate-700 font-bold mt-4">5 Tips Meningkatkan Kemampuan Literasi</h4>
                  <h4 className="text-slate-500 mt-2 text-xs md:text-base">
                    Kemampuan membaca adalah suatu hal yang harus dimiliki oleh semua orang...
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Article;
