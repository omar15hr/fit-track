

export function Header() {
  return (
    <div className="bg-[#006d77] py-6 md:h-20 flex items-center shadow-md">
      <div className="flex flex-col gap-8 mx-auto w-11/12 max-w-6xl">
        <div className="flex justify-between gap-4 md:gap-10 items-center">
          <h1 className="text-3xl md:text-4xl text-white font-bold">
            Fit Track
          </h1>
          <div className="flex gap-2">
            <a
              href="https://github.com/omar15hr/nextdo"
              target="_blank"
              className="hover:bg-gray-100 p-2 rounded-full cursor-pointer transition duration-300 ease-in-out"
            >
            </a>
            <a
              href="https://www.linkedin.com/in/omar-alejandro-hernandez-diaz/"
              target="_blank"
              className="hover:bg-gray-100 p-2 rounded-full cursor-pointer transition duration-300 ease-in-out"
            >
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}