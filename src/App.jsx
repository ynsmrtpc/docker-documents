
import { GiHamburgerMenu } from "react-icons/gi";
import { GrDocker } from "react-icons/gr";
import { FaRegSun, FaMoon } from "react-icons/fa";
import { FaPhp, FaSheetPlastic } from "react-icons/fa6";
import { DiDotnet } from "react-icons/di";
import { GrNode } from "react-icons/gr";
import ModalButton from "./components/Modal/ModalButton";
import Modal from "./components/Modal";
export default function App() {
  return (
    <>
      <Modal />
      <div className="navbar bg-base-200">
        <div className="flex-none">
          <label htmlFor="my-drawer-2" className="drawer-button btn btn-square btn-ghost lg:hidden">
            <GiHamburgerMenu color="#fafafa" />
          </label>
        </div>
        <div className="flex-1">
          <a href="/" className="btn text-md title">
            <GrDocker size={45} color="#4359ea" />
            DockerDoc's TR
          </a>
        </div>
        <div className="flex-none space-x-2">
          <label className="swap swap-rotate mr-3">
            <input type="checkbox" className="theme-controller" value="light" />
            <FaRegSun className="swap-on text-warning" size={24} />
            <FaMoon className="swap-off text-neutral" size={24} />
          </label>
          <ModalButton className="btn btn-sm btn-primary">Kayıt Ol</ModalButton>
          <ModalButton className="btn btn-sm btn-neutral">Giriş Yap</ModalButton>
        </div>
      </div>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content p-3">
          {/* Page content here */}
          <iframe src="/cheatsheet/docker-cheatsheet.html" className="w-full h-dvh border-4 rounded-lg border-primary"></iframe>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
            <li className="lg:hidden border-b border-zinc-700 pb-3 mb-3">
              <a href="/" className="btn text-md title">
                <GrDocker size={45} color="#4359ea" />
                DockerDoc's TR
              </a>
            </li>
            {/* Sidebar content here */}
            <li>
              <a className="active"> <FaSheetPlastic size={20} /> CheatSheet</a>
            </li>
            <li></li>
            <li>
              <a> <FaPhp size={25} /> PHP 8.0</a>
            </li>
            <li>
              <a> <DiDotnet size={25} /> .NET 8</a>
            </li>
            <li>
              <a> <GrNode size={25} /> NodeJS</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}