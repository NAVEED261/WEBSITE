import Image from "next/image";

export default function Calculator() {
  return (
    <div>
      <h1 className="title-font text-4xl text-center font-bold text-white bg-blue-600 py-20 underline">TYPES OF CALCULATORS</h1>
      <section className="text-pink-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-pink-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-pink-900 mb-3 underline">
                  BASIC CALCULATOR
                </h1>
                <p className="leading-relaxed mb-3 italic">
                  A basic calculator is a simple electronic device used for
                  performing basic arithmetic operations such as addition,
                  subtraction, multiplication, and division. It typically
                  features a numerical keypad and a basic display screen. Basic
                  calculators are commonly used for everyday calculations in
                  homes, schools, and offices.
                </p>
                <a className="text-blue-500 -underline inline-flex items-center bg-white py-5">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-pink-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-pink-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    1.2K
                  </span>
                  <span className="text-pink-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-pink-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-pink-900 mb-3 underline">
                  FINANCIAL CALCULATOR
                </h1>
                <p className="leading-relaxed mb-3">
                  A financial calculator is specifically designed for performing
                  financial calculations related to investments, loans,
                  mortgages, and other financial transactions. It includes
                  functions such as present value, future value, interest rate
                  calculations, and amortization schedules. Financial
                  calculators are frequently used by financial professionals,
                  bankers, and investors.
                </p>
                <a className="text-blue-500 -underline inline-flex items-center bg-white py-5">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-pink-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-pink-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    1.2K
                  </span>
                  <span className="text-pink-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-pink-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative underline">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-pink-900 mb-3 underline">
                  PROGRAMMABLE CALCULATOR
                </h1>
                <p className="leading-relaxed mb-3">
                  A programmable calculator is a calculator that allows users to
                  write and execute custom programs to automate complex
                  calculations. It typically features programmable keys, memory
                  storage, and programming capabilities, enabling users to
                  create customized functions and applications tailored to their
                  specific needs. Programmable calculators find applications in
                  engineering, computer science, and scientific research.
                </p>
                <a className="text-blue-500 -underline inline-flex items-center bg-white py-5">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-pink-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-pink-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    1.2K
                  </span>
                  <span className="text-pink-400 inline-flex items-center leading-none text-sm bg-white">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project */}
      <div className="lg:w-1/3 sm:w-1/2 p-9 cursor-pointer flex justify-center">
        <div className="flex relative items-center">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../../public/picture/download.jpg")}
          />
          <div className="px-8 py-10 relative z-120 w-full border-4 border-pink-800 bg-pink-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-red-600 mb-1">
              CALCULATOR PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              CALCULATOR
            </h1>
            <p className="leading-relaxed">
              This is the Project which I have created in TypeScript.
            </p>
            <a
              href="https://github.com/NAVEED261/QUARATER-ONE-PROJECTS/tree/main/inqurier"
              target="_blank"
              rel="noopener noreferrer"
              className="leading-relaxed text-blue-500 hover:underline"
            >
              View project..
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
