import Image from "next/image";
export default function Quiz() {
  return (
    <div><div className="bg-gradient-to-b from-cyan-100 to-cyan-100 min-h-screen">
        <h1 className="title-font text-[50px] text-centre italic underline font-bold-white bg-blue-600 py-20 " >TYPES OF QUIZ</h1>
      <section className="text-purple-100 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-centre text-gray-900 mb-3 underline">
                  Trivia Quiz:
                </h1>
                <p className="leading-relaxed mb-3 text-gray-800 ">
                  Trivia quizzes are designed to test participants knowledge on
                  a wide range of topics, including history, pop culture,
                  science, literature, and more. These quizzes often consist of
                  multiple-choice questions or short-answer questions,
                  challenging players to recall obscure facts or details. Trivia
                  quizzes are popular in social settings such as pubs, parties,
                  and online platforms, providing entertainment and fostering
                  friendly competition among participants. They serve as a fun
                  way to learn new facts and engage in casual intellectual
                  stimulation. Trivia quizzes can vary in difficulty, catering
                  to participants of all knowledge levels, from novice
                  enthusiasts to seasoned experts.
                </p>
                <a className="text-indigo-500 inline-flex items-center underline">
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
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 underline">
                  Personality Quiz:
                </h1>
                <p className="leading-relaxed mb-3 text-gray-800 ">
                  Personality quizzes are aimed at assessing individuals
                  traits, characteristics, preferences, and behavior patterns.
                  These quizzes typically present participants with a series of
                  questions or scenarios and analyze their responses to provide
                  insights into their personality type, strengths, weaknesses,
                  and compatibility with others. Personality quizzes are
                  commonly found in magazines, websites, and social media
                  platforms, offering entertainment and self-discovery
                  opportunities. They can be based on various psychological
                  theories and frameworks, such as the Myers-Briggs Type
                  Indicator (MBTI) or the Big Five personality traits.
                  Personality quizzes are popular for personal introspection,
                  team building, and matchmaking purposes.
                </p>
                <a className="text-indigo-500 inline-flex items-center underline">
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
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 underline">
                  Educational Quiz:
                </h1>
                <p className="leading-relaxed mb-3 text-gray-800">
                  Educational quizzes are designed to reinforce learning and
                  assess comprehension of academic subjects, concepts, and
                  skills. These quizzes are commonly used in classrooms, online
                  courses, and educational websites to supplement traditional
                  teaching methods and evaluate students understanding of
                  course material. Educational quizzes cover a wide range of
                  subjects, including mathematics, science, language arts,
                  history, and more. They can feature different question formats
                  such as multiple-choice, true/false, fill-in-the-blank, or
                  matching. Educational quizzes provide immediate feedback to
                  students, helping them identify areas for improvement and
                  track their progress over time. They play a crucial role in
                  promoting active learning, retention of information, and
                  academic achievement.
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
    <div className="lg:w-1/3 sm:w-1/2 p-9 cursor-pointer flex justify-center">
              <div className="flex relative items-center">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../../public/picture/QUIZ.jpg")}
                />
                <div className="px-8 py-10 relative z-120 w-full border-4 border-pink-800 bg-pink-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-600 mb-1">
                    QUIZ PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    QUIZ
                  </h1>
                  <p className="leading-relaxed">
                    This is the Project which I have created in TypeScript.
                  </p>
                  {/* Use anchor tag for external link */}
                  <a
                    href="https://github.com/NAVEED261/QUARATER-ONE-PROJECTS/tree/main/QUIZ"
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
    </div>
  );
}
