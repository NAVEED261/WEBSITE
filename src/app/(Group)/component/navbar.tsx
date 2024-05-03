Link
import Image from "next/image";
import logoImage from "../../../../public/picture/NAVEED-removebg-preview.jpg";
import Link from "next/link";

export default function Navbar() {
  return (
    <div >
      <header className="text-white-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <Image
              src={logoImage}
              alt="logo"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-white-900" href={"/#ATM"}>ATM</Link>
      <Link className="mr-5 hover:text-white-900" href="/calculator">CALCULATOR</Link>
      <Link className="mr-5 hover:text-white-900" href="/todo">TO-DO </Link>
      <Link className="mr-5 hover:text-white-900" href="/quiz">QUIZ</Link>
      
      <Link className="mr-5 hover:text-white-900" href="/contact">CONTACT</Link>
    </nav>
    <button className="inline-flex items-center bg-white-100 border-0 py-1 px-3 focus:outline-none hover:bg-white-200 rounded text-base mt-4 md:mt-0">
      Download cv
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
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
