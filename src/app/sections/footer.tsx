import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return <footer className="bg-indigo-950 text-zinc-400">
    <div className="mx-auto w-full max-w-screen-md px-4 md:px-0 py-6 lg:py-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-6 flex flex-col justify-between md:mb-0">
          <h1 className="text-2xl font-bold text-white mb-2">Sekosan</h1>
          <div>
            <h4 className="text-white mb-2">Ikuti Kami</h4>
            <div className="flex gap-4">
              <Link href="https://instagram.com/hanep77" className="flex items-center gap-1 hover:text-zinc-200"><BsInstagram /></Link>
              <Link href="https://github.com/hanep77" className="flex items-center gap-1 hover:text-zinc-200"><BsFacebook /></Link>
              <Link href="https://github.com/hanep77" className="flex items-center gap-1 hover:text-zinc-200"><BsTwitter /></Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Hubungi Kami</h2>
          <div>
            <p>Alamat: Jl. Contoh No. 123, Jakarta</p>
            <p>Telepon: 0812-3456-7890</p>
            <p>Email: support@kosanidaman.com</p>
          </div>
        </div>
      </div>
      <hr className="my-6 border-zinc-700" />
      <span className="text-sm">©2025 sekosan.id</span>
    </div>
  </footer>
}
