export default function Home() {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <header className="flex items-center p-8">
          <img src="/logo_text.png" alt="SpotPark Logo" className="h-10 w-auto" />
        </header>
        
        <main className="flex flex-col items-center w-full p-4 mt-28">
          <h2 className="text-lg font-bold">Customer Information</h2>
          
          <form className="w-full max-w-md mt-6">
            <label htmlFor="platNomor" className="block text-sm font-medium text-gray-700">
              Plat Nomor
            </label>
            <input
              type="text"
              name="platNomor"
              id="platNomor"
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            <div className="flex justify-center w-full">
            <button
              type="submit"
              className="mt-4 bg-[#27374D] text-white px-12 py-1 rounded-full"
            >
              Next
            </button>
            </div>
          </form>
        </main>
      </div>
    );
  }  