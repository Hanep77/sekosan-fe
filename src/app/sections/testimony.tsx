"use client"

import { useRef, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";

const testimonies = [
  {
    name: "Rina",
    job: "Mahasiswa",
    testimony: "Mudah banget cari kosan di sini! Fiturnya lengkap, dan saya bisa langsung booking tanpa perlu survey ke banyak tempat.",
    rating: 5
  },
  {
    name: "Budi",
    job: "Freelancer",
    testimony: "Bisa filter berdasarkan fasilitas itu sangat membantu.Saya dapat kosan sesuai budget dengan WiFi kencang!",
    rating: 5
  },
  {
    name: "Siti",
    job: "Mahasiswa",
    testimony: "Aplikasi ini sangat membantu saya sebagai mahasiswa baru. Tidak perlu bingung mencari kosan yang nyaman dan dekat kampus!",
    rating: 5
  },
  {
    name: "Andi",
    job: "Karyawan",
    testimony: "Saya bisa menemukan kosan sesuai kebutuhan keluarga saya dengan sangat mudah. Prosesnya cepat dan transparan.",
    rating: 5
  },
  {
    name: "Dewi",
    job: "Pekerja Lepas",
    testimony: "Sangat puas dengan pengalaman menggunakan platform ini. Banyak pilihan kosan dengan harga yang sesuai kantong!",
    rating: 5
  },
];

export default function Testimony() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  return <section className="flex items-center min-h-screen 2xl:min-h-fit 2xl:mt-20">
    <div className="w-screen md:max-w-screen-lg m-auto 2xl:py-12 px-4 md:px-0">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16">Testimony Pengguna</h2>
      <div className="relative">
        <div className="absolute z-10 left-0 top-0 h-full w-32 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none" />
        {/* Efek Fade Kanan */}
        <div className="absolute z-10 right-0 top-0 h-full w-32 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none" />
        <div
          ref={scrollContainerRef}
          className="md:w-auto overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="flex min-w-max gap-5 p-4">
            {testimonies.map(testimony => (
              <div key={testimony.name} className="flex snap-center flex-col items-center text-center w-60 md:w-80 border border-indigo-600 p-5 rounded shadow-lg skew-x-3 skew-y-3 hover:skew-x-0 hover:skew-y-0 transition">
                <div className="border border-zinc-300 bg-zinc-200 rounded-full text-5xl text-zinc-500 overflow-hidden p-2">
                  <FaUser />
                </div>
                <div className="mt-5">
                  <p className="italic">{`"${testimony.testimony}"`}</p>
                  <h3 className="text-lg font-semibold mt-2">{testimony.name}</h3>
                  <p className="text-zinc-500">{testimony.job}</p>
                </div>
                <div className="text-yellow-600 flex mt-2">
                  {Array.from({ length: 5 }, (_, index: number) => {
                    return index < testimony.rating ? <BsStarFill key={index} /> : <BsStar key={index} />;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
}
