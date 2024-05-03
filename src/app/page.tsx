import Image from "next/image";
import Navbar from "./(Group)/component/navbar";

export default function ATM() {
  return (
    <div id="ATM" className="dark">
      
      <Navbar />
      
      <section className="text-gray-600 body-font bg-blue-300"> {/* Updated */}
      
  <div className="container px-5 py-24 mx-auto py-20">
    <div className="flex flex-wrap -m-4 ">
      <div className="p-4 lg:w-1/3 ">
        
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative py-20">
        <h1>Automated Teller Machine</h1>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 ">
            ATM
          </h1>
          <p className="leading-relaxed mb-3 bg-blue-199 italic">
          Automated Teller Machines (ATMs) have revolutionized banking by providing convenient access to cash and other banking services 24/7. They offer a range of functions, including cash withdrawals, balance inquiries, and fund transfers. ATMs are equipped with security features like PIN entry and surveillance cameras to ensure safe transactions. Their widespread availability in various locations such as banks, malls, and convenience stores makes them indispensable for modern banking needs. With advancements like cardless transactions and mobile integration, ATMs continue to evolve to meet the changing demands of consumers.
          </p>
          <a className="text-indigo-500 inline-flex items-center">
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
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
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
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
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
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            PUBLIC ATM
          </h1>
          <p className="leading-relaxed mb-3 bg-blue-199 italic">
          Public ATMs serve as accessible banking points for individuals who need quick cash or banking services outside of traditional banking hours. Located in public spaces like shopping centers, airports, and train stations, these ATMs cater to diverse needs of users on the go. They offer convenience and flexibility, reducing the reliance on physical bank branches. Security measures such as well-lit areas and proximity to high-traffic zones enhance safety for users. Public ATMs play a vital role in financial inclusion, ensuring that individuals from all walks of life have access to essential banking services conveniently.
          </p>
          <a className="text-indigo-500 inline-flex items-center">
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
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
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
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
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
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
         
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            BUSINESS ATM
          </h1>
          <p className="leading-relaxed mb-3 bg-blue-199 italic">
          Businesses leverage ATMs to enhance customer experience and attract foot traffic, thereby increasing revenue opportunities. Installing ATMs on business premises offers added convenience to customers who can withdraw cash while shopping or dining. Additionally, businesses earn revenue through transaction fees charged on withdrawals made at their ATMs. Strategic placement of ATMs within business premises can drive customer loyalty and satisfaction. Moreover, businesses benefit from reduced cash handling costs as customers opt for ATM withdrawals instead of cash transactions at the counter. Integrating ATMs into business operations aligns with the trend towards digital banking and cashless transactions in today's market.
          </p>
          <a className="text-indigo-500 inline-flex items-center">
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
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
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
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
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

      {/* 1st PROJECT */}
      <div className="lg:w-1/2 sm:w-full p-9 cursor-pointer flex justify-center">
  <div className="flex relative items-center">
    <Image
      alt="gallery"
      className="absolute inset-0 w-full h-full object-cover object-center"
      src={require("../../public/picture/ATM.jpg")}
    />
    <div className="px-12 py-16 relative z-10 w-full bg-blue-199 bg-pink capacity-575 rounded-lg overflow-hidden text-center">
      <h1 className="leading-relaxed text-lg text-white italic"></h1>
                    AUTOMIC TALLER MACHINE PROJECT
                  
                  <h1 className="title-font text-lg font-medium text-pink mb-3">
                    ATM
                  </h1>
                  <p className="leading-relaxed">
                    This is the Project which I have created in TypeScript.
                  </p>
                  {/* Use anchor tag for external link */}
                  <a
                    href="https://github.com/NAVEED261/QUARATER-ONE-PROJECTS/tree/main/ATM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View project..
                    </p>
                  </a>
                </div>
              </div>
            </div>
    </div>
  );
};
