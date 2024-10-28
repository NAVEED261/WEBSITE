import Image from "next/image";
import Navbar from "./(Group)/component/navbar";
import Link from "next/link";

export default function ATM() {
  return (
    <div id="ATM" className="bg-[#f3f4ed] text-gray-700 font-serif">
      <Navbar />

      <section className="text-gray-800 body-font bg-[#d6eaf8] py-16">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-gray-900">Automated Teller Machines</h1>
            <p className="mt-3 text-lg text-gray-600">Explore different types of ATMs and their unique functionalities</p>
          </div>

          <div className="flex flex-wrap -m-4">
            {/* Post 1: General ATM */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-90 p-8 rounded-lg text-center shadow-md">
                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-4">ATM</h2>
                <p className="leading-relaxed mb-6 italic">
                  Automated Teller Machines (ATMs) have revolutionized banking by providing convenient access to cash and other banking services 24/7...
                </p>
                <Link href="#" className="text-indigo-500 inline-flex items-center hover:underline">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Post 2: Public ATM */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-90 p-8 rounded-lg text-center shadow-md">
                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-4">Public ATM</h2>
                <p className="leading-relaxed mb-6 italic">
                  Public ATMs serve as accessible banking points for individuals who need quick cash or banking services outside of traditional banking hours...
                </p>
                <Link href="#" className="text-indigo-500 inline-flex items-center hover:underline">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Post 3: Business ATM */}
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-90 p-8 rounded-lg text-center shadow-md">
                <h2 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-4">Business ATM</h2>
                <p className="leading-relaxed mb-6 italic">
                  Businesses leverage ATMs to enhance customer experience and attract foot traffic, thereby increasing revenue opportunities...
                </p>
                <Link href="#" className="text-indigo-500 inline-flex items-center hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto flex flex-col items-center text-center">
          <div className="relative w-full lg:w-1/2 shadow-lg rounded-lg overflow-hidden">
            <Image
              alt="ATM Project Image"
              className="object-cover object-center w-full h-full"
              src={require("../../public/picture/ATM.jpg")}
              width={600}
              height={400}
            />
            <div className="absolute inset-0 bg-opacity-50 bg-gray-900 flex flex-col justify-center items-center text-white px-6">
              <h2 className="text-2xl font-bold mb-2">Automated Teller Machine Project</h2>
              <p className="mb-4">A TypeScript-based project showcasing ATM functionalities and security.</p>
              <a
                href="https://github.com/NAVEED261/QUARATER-ONE-PROJECTS/tree/main/ATM"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg font-medium transition duration-200"
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
