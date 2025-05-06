export function Header() {
  return (
    <div className="bg-gradient-to-r from-[#006d77] via-[#018894] to-[#00919e] py-6 md:h-20 flex items-center shadow-md">
      <div className="flex flex-col gap-8 mx-auto w-11/12 max-w-6xl">
        <div className="flex justify-between gap-4 md:gap-10 items-center">
          <h1 className="text-3xl md:text-4xl text-white font-bold">
            Fit Track
          </h1>
          <div className="flex gap-2">
            <a
              href="https://github.com/omar15hr/nextdo"
              target="_blank"
              className="p-2 rounded-full cursor-pointer transition duration-300 ease-in-out hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/omar-alejandro-hernandez-diaz/"
              target="_blank"
              className="p-2 rounded-full cursor-pointer transition duration-300 ease-in-out hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin text-white"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
