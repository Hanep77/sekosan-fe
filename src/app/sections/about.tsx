import Image from "next/image";

export default function About() {
  return <section className="flex items-center min-h-screen 2xl:min-h-fit 2xl:mt-20">
    <div className="max-w-screen-lg m-auto 2xl:py-12 px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex gap-2 pe-3">
          <div className="md:w-60 md:h-96 w-1/2 bg-indigo-600 rounded-s-md rounded-br-md z-20">
            <Image src={"/assets/house-1.jpg"} alt="house" width={500} height={500}
              className="object-cover h-full translate-x-3 translate-y-3 hover:translate-x-0 hover:translate-y-0 transition rounded-s-md rounded-br-md shadow-md shadow-zinc-400" />
          </div>
          <div className="w-1/2 md:w-auto flex flex-col gap-2">
            <div className="md:w-60 md:h-40 w-full bg-indigo-600 rounded-tr-md z-10">
              <Image src={"/assets/house-2.jpg"} alt="house" width={500} height={500}
                className="object-cover h-full translate-x-3 translate-y-3 hover:translate-x-0 hover:translate-y-0 transition  rounded-tr-md shadow-md shadow-zinc-400" />
            </div>
            <div className="md:w-60 md:h-40 w-full bg-indigo-600 rounded-br-md">
              <Image src={"/assets/house-3.jpg"} alt="house" width={500} height={500}
                className="object-cover h-full translate-x-3 translate-y-3 hover:translate-x-0 hover:translate-y-0 transition  rounded-br-md shadow-md shadow-zinc-400" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Kenapa Memilih Kami?</h2>
          <ul className="text-zinc-500 text-lg mt-3 list-disc ps-5">
            <li><h5 className="text-indigo-600 font-semibold">Pencarian Cepat & Akurat</h5><p>Temukan kosan sesuai lokasi dan kebutuhanmu.</p></li>
            <li><h5 className="text-indigo-600 font-semibold">Filter Lokasi & Harga</h5><p>Pilih berdasarkan fasilitas, harga, dan jarak.</p></li>
            <li><h5 className="text-indigo-600 font-semibold">Review & Rating Asli</h5><p>Lihat pengalaman penghuni sebelumnya sebelum memutuskan.</p></li>
            <li><h5 className="text-indigo-600 font-semibold">Booking Tanpa Ribet</h5><p>Hubungi pemilik kos langsung atau booking online.</p></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-16">
        <div className="order-2">
          <h2 className="text-3xl font-bold">Bagaimana Cara Kerjanya?</h2>
          <ol className="text-zinc-500 text-lg mt-3 list-decimal ps-5">
            <li><span className="text-indigo-600 font-semibold">Cari Kosan</span> - Gunakan pencarian atau filter untuk menemukan kosan terbaik.</li>
            <li><span className="text-indigo-600 font-semibold">Lihat Detail</span> - Cek harga, fasilitas, dan ulasan penghuni sebelumnya.</li>
            <li><span className="text-indigo-600 font-semibold">Booking Mudah</span> - Hubungi pemilik atau lakukan pemesanan secara online.</li>
          </ol>
        </div>
        <div className="flex-grow md:order-2">
          <Image src={"/assets/undraw_bookmarks.svg"} alt="house-searcing" width={500} height={500} />
        </div>
      </div>
    </div>
  </section>
}
