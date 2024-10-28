import Image from "next/image";
import logoImage from "../../../../public/picture/NAVEED-removebg-preview.jpg";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-[#f5f3e9] border-b border-[#d4c9b1] shadow-lg">
      <header className="body-font" style={{ fontFamily: "'Georgia', serif" }}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Image
            src={logoImage}
            alt="logo"
            width={80}
            height={80}
            className="rounded-full object-cover border border-[#d4c9b1] shadow-md"
          />
          <nav className="md:ml-6 md:mr-auto flex flex-wrap items-center text-lg justify-center">
            <Link className="mr-5 hover:text-[#8b5e34] text-[#5a4c38] transition-colors duration-200" href="/#ATM">
              ATM
            </Link>
            <Link className="mr-5 hover:text-[#8b5e34] text-[#5a4c38] transition-colors duration-200" href="/calculator">
              CALCULATOR
            </Link>
            <Link className="mr-5 hover:text-[#8b5e34] text-[#5a4c38] transition-colors duration-200" href="/todo">
              TO-DO
            </Link>
            <Link className="mr-5 hover:text-[#8b5e34] text-[#5a4c38] transition-colors duration-200" href="/quiz">
              QUIZ
            </Link>
            <Link className="mr-5 hover:text-[#8b5e34] text-[#5a4c38] transition-colors duration-200" href="/contact">
              CONTACT
            </Link>
          </nav>
          <button className="inline-flex items-center bg-[#8b5e34] text-[#f5f3e9] border-0 py-2 px-5 focus:outline-none hover:bg-[#6f4727] rounded-lg text-base mt-4 md:mt-0 shadow-md transition-transform duration-200 transform hover:scale-105">
            Download CV
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
