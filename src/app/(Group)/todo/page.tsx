import Image from "next/image";

export default function Todo() {
  return (
    <div className="bg-orange-100 min-h-screen">
    <div className="container px-5 py-12 mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800 underline mb-12">
        TYPES OF TO-DO-LISTS
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-medium text-gray-900 mb-4">
            Basic To-Do List:
          </h2>
          <p className="text-base text-gray-700 mb-4 italic">
            A basic to-do list is a simple tool for organizing tasks and
            managing daily activities. It typically consists of a list of tasks
            to be completed, often written or typed in a linear format. Basic
            to-do lists are easy to create and use, making them ideal for quick
            reference and task tracking.
          </p>
          <a
            href="#"
            className="text-red-500 font-medium hover:underline flex items-center"
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
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-medium text-gray-900 mb-4">
            Task Management Apps:
          </h2>
          <p className="text-base text-gray-700 mb-4 italic">
            Task management apps are digital platforms designed to help users
            organize, prioritize, and track their tasks more effectively. These
            apps offer features such as task categorization, due date reminders,
            collaboration tools, and progress tracking.
          </p>
          <a
            href="#"
            className="text-red-500 font-medium hover:underline flex items-center"
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
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-medium text-gray-900 mb-4">Kanban Boards:</h2>
          <p className="text-base text-gray-700 mb-4 italic">
            Kanban boards are visual task management tools that use columns and
            cards to represent workflow stages and individual tasks. Tasks are
            represented as cards that move across columns representing different
            stages of completion, such as "To-Do," "In Progress," and "Done."
          </p>
          <a
            href="#"
            className="text-red-500 font-medium hover:underline flex items-center"
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
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <div className="w-80 bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <Image
            alt="To-Do List Project"
            src={require("../../../../public/picture/TODO.jpg")}
            layout="responsive"
            width={320}
            height={240}
          />
          <div className="p-6">
            <h2 className="text-xl font-medium text-gray-900 mb-2">TODO LIST PROJECT</h2>
            <p className="text-base text-gray-700 mb-4 italic" >
              This is the Project which I have created in TypeScript.
            </p>
            <a
              href="https://github.com/NAVEED261/QUARATER-ONE-PROJECTS/tree/main/TO%20-%20%20DO%20LIST"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium hover:underline"
            >
              View project..
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
