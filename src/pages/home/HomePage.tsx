export default function HomePage() {
  return (
    <>
      <div className="pt-7"></div>
      <div className="px-4">
        <form className="flex items-center">
          <div className="relative w-full">
            <input
              type="text"
              id="simple-search"
              className="ps-2 bg-gray-f4 border border-gray-d9 text-bg-gray-c4 text-sm rounded-lg focus:bg-gray-d9 focus:border-gray-d9 belock w-full p-2.5 "
              placeholder="모임명, 키워드를 입력하세요"
              required
            ></input>
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-black bg-white rounded-lg border border-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
    </>
  );
}

