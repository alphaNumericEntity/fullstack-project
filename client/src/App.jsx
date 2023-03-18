import './App.css'

function App() {

  return (
   <div>
    <header className="p-4 flex justify-between" >
      <a href="" className='flex items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-9 h-9 -rotate-90">
               <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
            </svg>
            <span className='font-bold text-xl'> airbnd</span>

      </a>

      <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-8 shadow-md shadow-gray-300'>
        <div>Any where</div>
        <div className="border border-l border-black-300"></div>
        <div>Any week</div>
        <div className="border border-l border-black-300"></div>
        <div>Add guests</div>
        <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                 </svg>

        </button>
      </div>
    </header>
   </div>
  )
}

export default App
