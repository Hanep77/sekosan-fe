import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { BsHouse, BsHouseFill } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <header className="border-b bg-white sticky top-0">
        <nav className="flex items-center justify-between h-16 max-w-screen-lg m-auto">
          <h2 className="text-2xl font-bold text-indigo-600 flex items-center gap-1"><BsHouseFill />Sekosan</h2>
          <div className="flex gap-2">
            <button type="button" className="h-8 border-2 border-indigo-600 px-4 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white">Sign up</button>
            <button type="button" className="h-8 bg-indigo-600 text-white px-4 rounded-full">Sign in</button>
          </div>
        </nav>
      </header>
      <section className="mt-28">
        <div className="flex max-w-screen-lg m-auto">
          <div className="w-1/2">
            <h1 className="text-5xl font-extrabold text-zinc-800">Cari <span className="text-indigo-600">Kosan Idaman</span>, Dapatkan Dengan <span className="text-indigo-600">Gampang</span></h1>
            <label htmlFor="search" className="flex items-center mt-8 border-2 border-indigo-600 w-80 rounded-full oveflow-hidden">
              <BiSearch className="ms-4 text-xl text-indigo-600" />
              <form className="flex-grow flex">
                <input type="text" id="search" name="search" className="w-full outline-none px-2" placeholder="Cari berdasarkan wilayah" />
                <button type="button" className="h-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-e-full px-4">Cari</button>
              </form>
            </label>
          </div>
          <div className="flex-grow">
            <Image src={"/assets/house-searching.svg"} alt="house-searcing" width={500} height={500} />
          </div>
        </div>
      </section>
      <section className="min-h-screen">

      </section>
    </>
  );
}
