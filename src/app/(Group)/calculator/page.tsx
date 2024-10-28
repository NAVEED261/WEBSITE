import Image from "next/image";

export default function Calculator() {
  return (
    <div className="bg-gray-100 text-gray-800 font-serif">
      <h1 className="text-4xl text-center font-bold text-white bg-blue-600 py-10 underline">
        TYPES OF CALCULATORS
      </h1>

      <section className="text-gray-700 body-font py-16">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Basic Calculator */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-pink-50 border border-pink-200 p-8 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-medium text-pink-900 mb-4 underline">
                  BASIC CALCULATOR
                </h2>
                <p className="leading-relaxed italic mb-6">
                  A basic calculator is a simple electronic device for
                  performing basic arithmetic operations such as addition,
                  subtraction, multiplication, and division. Commonly used in
                  homes, schools, and offices.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 inline-flex items-center"
                >
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
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Financial Calculator */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-pink-50 border border-pink-200 p-8 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-medium text-pink-900 mb-4 underline">
                  FINANCIAL CALCULATOR
                </h2>
                <p className="leading-relaxed italic mb-6">
                  Designed for financial calculations like investments, loans,
                  and mortgages. Commonly used by financial professionals for
                  interest rate calculations, present value, and amortization.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 inline-flex items-center"
                >
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
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Programmable Calculator */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-pink-50 border border-pink-200 p-8 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-medium text-pink-900 mb-4 underline">
                  PROGRAMMABLE CALCULATOR
                </h2>
                <p className="leading-relaxed italic mb-6">
                  A calculator that allows users to write and execute custom
                  programs for complex calculations, commonly used in
                  engineering and scientific research.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 inline-flex items-center"
                >
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
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto flex justify-center">
          <div className="relative w-full lg:w-1/3 rounded-lg overflow-hidden shadow-lg">
            <Image
              alt="Calculator Project"
              className="object-cover object-center w-full h-full"
              src={require("../../../../public/picture/download.jpg")}
              width={600}
              height={400}
            />
            <div className="absolute inset-0 bg-pink-900 bg-opacity-70 flex flex-col justify-center items-center text-white px-6 hover:opacity-100 opacity-0 transition-opacity duration-300">
              <h2 className="text-lg font-semibold mb-1">CALCULATOR PROJECT</h2>
              <p className="text-center mb-3">
                This is the Project which I have created in TypeScript.
              </p>
              <a
                href="https://github.com/NAVEED261/QUARATER-ONE-PROJECTS/tree/main/inqurier"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium transition duration-200"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
