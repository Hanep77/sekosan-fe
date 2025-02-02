import Image from "next/image";

export default function About() {
  return <section className="flex items-center border-y-2 border-indigo-600 bg-zinc-200 min-h-screen 2xl:min-h-fit 2xl:mt-20">
    <div className="flex max-w-screen-lg gap-8 m-auto 2xl:py-12">
      <div className="flex gap-2">
        <div className="w-60 h-96 bg-indigo-600 rounded-s-md rounded-br-md z-20">
          <Image src={"/assets/house-1.jpg"} alt="house" width={500} height={500}
            className="object-cover h-full translate-x-3 translate-y-3 hover:translate-x-0 hover:translate-y-0 transition rounded-s-md rounded-br-md shadow-md shadow-zinc-400" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-60 h-40 bg-indigo-600 rounded-tr-md z-10">
            <Image src={"/assets/house-2.jpg"} alt="house" width={500} height={500}
              className="object-cover h-full translate-x-3 translate-y-3 hover:translate-x-0 hover:translate-y-0 transition  rounded-tr-md shadow-md shadow-zinc-400" />
          </div>
          <div className="w-60 h-40 bg-indigo-600 rounded-br-md">
            <Image src={"/assets/house-3.jpg"} alt="house" width={500} height={500}
              className="object-cover h-full translate-x-3 translate-y-3 hover:translate-x-0 hover:translate-y-0 transition  rounded-br-md shadow-md shadow-zinc-400" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold">Kenapa Memilih Kami?</h2>
        <ul className="text-zinc-500 text-lg mt-3 list-disc ps-5">
          <li><span className="text-indigo-600 font-semibold">Pencarian Cepat & Akurat</span> - Temukan kosan sesuai lokasi dan kebutuhanmu.</li>
          <li><span className="text-indigo-600 font-semibold">Filter Lokasi & Harga</span> - Pilih berdasarkan fasilitas, harga, dan jarak.</li>
          <li><span className="text-indigo-600 font-semibold">Review & Rating Asli</span> - Lihat pengalaman penghuni sebelumnya sebelum memutuskan.</li>
          <li><span className="text-indigo-600 font-semibold">Booking Tanpa Ribet</span> - Hubungi pemilik kos langsung atau booking online.</li>
        </ul>
        <div>
          <div>

          </div>
        </div>
      </div>
    </div>
  </section>
}
