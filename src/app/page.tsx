import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { BsHouseFill } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-tr from-white via-white to-indigo-400 min-h-screen 2xl:min-h-fit">
        <header>
          <nav className="flex items-center justify-between h-16 max-w-screen-lg m-auto">
            <h2 className="text-2xl font-bold text-indigo-600 flex items-center gap-1"><BsHouseFill />Sekosan</h2>
            <div className="flex gap-2">
              <button type="button" className="h-8 border-2 border-indigo-600 px-4 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white">Sign up</button>
              <button type="button" className="h-8 bg-indigo-600 text-white px-4 rounded-full">Sign in</button>
            </div>
          </nav>
        </header>
        <div className="flex items-center max-w-screen-lg gap-4 m-auto mt-28">
          <div className="w-1/2">
            <h1 className="text-5xl font-extrabold text-zinc-800">Cari <span className="text-indigo-600">Kosan Idaman</span>, Dapatkan Dengan <span className="text-indigo-600">Gampang</span></h1>
            <p className="text-justify mt-2 text-zinc-500">Jelajahi berbagai pilihan kosan dengan fitur pencarian mudah, cepat, dan sesuai kebutuhanmu. Dari lokasi strategis hingga fasilitas terbaik, temukan kosan idaman tanpa repot. Semua ada di satu tempat, cukup beberapa klik saja!</p>
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
      <section className="min-h-screen 2xl:min-h-fit">
        <div className="flex max-w-screen-lg gap-8 m-auto mt-4 2xl:mt-60">
          <div className="flex gap-2">
            <div className="w-60 h-96 bg-indigo-600 rounded-s-md rounded-br-md"></div>
            <div className="flex flex-col gap-2">
              <div className="w-60 h-40 bg-indigo-600 rounded-tr-md"></div>
              <div className="w-60 h-40 bg-indigo-600 rounded-br-md"></div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Lorem Ipsum Dolor Sit Amet</h2>
            <p className="text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div>
              <div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen">

      </section>
    </>
  );
}
