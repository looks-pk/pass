import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Knaz.PK-Cloths With Trust</title>
        <meta name="description" content="Knaz.pk - Pakistan's Best Online Clothing Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className="bg-white pb-6 mt-8 sm:pb-8 lg:pb-12">
      <section className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div className="flex flex-wrap justify-between mb-8 md:mb-16">
      <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pt-48 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
        <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-8">Find your<br />style online</h1>

        <p className="max-w-md text-gray-500 xl:text-lg leading-relaxed">This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.</p>
      </div>

      <div className="w-full lg:w-2/3 flex mb-12 md:mb-16">
        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden relative z-10 top-12 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0">
          <img src="https://images.unsplash.com/photo-1542340916-951bb72c8f74?auto=format&q=75&fit=crop&w=550&h=550" loading="lazy" alt="Photo by Kaung Htet" className="w-full h-full object-cover object-center" />
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1586295166487-b265f7e83a7f?auto=format&q=75&fit=crop&w=550&h=550" loading="lazy" alt="Photo by Manny Moreno" className="w-full h-full object-cover object-center" />
        </div>
      </div>
    </div>

    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="w-64 h-12 flex border rounded-lg overflow-hidden divide-x">
        <a href="#" className="w-1/3 flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 text-gray-500 transition duration-100">Men</a>
        <a href="#" className="w-1/3 flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 text-gray-500 transition duration-100">Women</a>
        <a href="#" className="w-1/3 flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 text-gray-500 transition duration-100">Teens</a>
      </div>

      <div className="flex justify-center lg:justify-start items-center gap-4">
        <span className="text-gray-400 text-sm sm:text-base font-semibold tracking-widest uppercase">Social</span>
        <span className="w-12 h-px bg-gray-200"></span>

        <div className="flex gap-4">
          <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
            <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
            <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>

          <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
            <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.4168 2.4594C17.7648 0.873472 15.4785 0 12.9793 0C9.1616 0 6.81353 1.56493 5.51603 2.87767C3.91693 4.49547 3 6.64362 3 8.77138C3 11.4429 4.11746 13.4934 5.98876 14.2563C6.11439 14.3078 6.24081 14.3337 6.36475 14.3337C6.75953 14.3337 7.07233 14.0754 7.1807 13.661C7.24389 13.4233 7.39024 12.8369 7.45389 12.5823C7.59011 12.0795 7.48005 11.8377 7.18295 11.4876C6.64173 10.8472 6.38969 10.0899 6.38969 9.10438C6.38969 6.17698 8.56948 3.06578 12.6095 3.06578C15.8151 3.06578 17.8064 4.88772 17.8064 7.82052C17.8064 9.67124 17.4077 11.3852 16.6837 12.6468C16.1805 13.5235 15.2957 14.5685 13.9375 14.5685C13.3501 14.5685 12.8225 14.3272 12.4896 13.9066C12.1751 13.5089 12.0714 12.9953 12.1979 12.4599C12.3408 11.855 12.5357 11.2241 12.7243 10.6141C13.0682 9.5001 13.3933 8.44789 13.3933 7.60841C13.3933 6.17252 12.5106 5.20769 11.1969 5.20769C9.52737 5.20769 8.21941 6.90336 8.21941 9.06805C8.21941 10.1297 8.50155 10.9237 8.62929 11.2286C8.41896 12.1197 7.16899 17.4176 6.93189 18.4166C6.79478 18.9997 5.96893 23.6059 7.33586 23.9731C8.87168 24.3858 10.2445 19.8997 10.3842 19.3928C10.4975 18.9806 10.8937 17.4216 11.1365 16.4634C11.878 17.1775 13.0717 17.6603 14.2333 17.6603C16.4231 17.6603 18.3924 16.6749 19.7786 14.8858C21.1229 13.1505 21.8633 10.7318 21.8633 8.0757C21.8632 5.99923 20.9714 3.95209 19.4168 2.4594Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  </div>
  <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div className="mb-10 md:mb-16">
      <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Selected</h2>

      <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
      <div className='shadow-md rounded-lg'>
        <a href="#" className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3">
          <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />

          <div className="flex gap-2 absolute left-0 bottom-2">
            <span className="bg-red-500 text-white text-sm font-semibold tracking-wider uppercase rounded-r-lg px-3 py-1.5">-50%</span>
            <span className="bg-white text-gray-800 text-sm font-bold tracking-wider uppercase rounded-lg px-3 py-1.5">New</span>
          </div>
        </a>

        <div className="flex justify-between items-start gap-2 px-2">
          <div className="flex flex-col">
            <a href="#" className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">Fancy Outfit</a>
            <span className="text-gray-500">by Fancy Brand</span>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-gray-600 lg:text-lg font-bold">$19.99</span>
            <span className="text-red-500 text-sm line-through">$39.99</span>
          </div>
        </div>
      </div>
      <div>
        <a href="#" className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3">
          <img src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Nick Karvounis" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </a>

        <div className="flex justify-between items-start gap-2 px-2">
          <div className="flex flex-col">
            <a href="#" className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">Cool Outfit</a>
            <span className="text-gray-500">by Cool Brand</span>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-gray-600 lg:text-lg font-bold">$29.99</span>
          </div>
        </div>
      </div>
      <div>
        <a href="#" className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3">
          <img src="https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </a>

        <div className="flex justify-between items-start gap-2 px-2">
          <div className="flex flex-col">
            <a href="#" className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">Nice Outfit</a>
            <span className="text-gray-500">by Nice Brand</span>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-gray-600 lg:text-lg font-bold">$35.00</span>
          </div>
        </div>
      </div>
      <div>
        <a href="#" className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3">
          <img src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Vladimir Fedotov" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </a>

        <div className="flex justify-between items-start gap-2 px-2">
          <div className="flex flex-col">
            <a href="#" className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">Lavish Outfit</a>
            <span className="text-gray-500">by Lavish Brand</span>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-gray-600 lg:text-lg font-bold">$49.99</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div className="md:h-80 flex flex-col sm:flex-row bg-gray-900 rounded-lg overflow-hidden">
      <div className="w-full sm:w-1/2 lg:w-2/5 flex flex-col p-4 sm:p-8">
        <h2 className="text-white text-xl md:text-2xl lg:text-4xl font-bold mb-4">Summer Sale<br />Up to 70% off.</h2>

        <p className="max-w-md text-gray-400 mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

        <div className="mt-auto">
          <a href="#" className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Save now</a>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-3/5 h-48 sm:h-auto order-first sm:order-none bg-gray-700">
        <img src="https://images.unsplash.com/photo-1505846951821-e25bacf2eccd?auto=format&q=75&fit=crop&crop=top&w=1000&h=500" loading="lazy" alt="Photo by Dom Hill" className="w-full h-full object-cover object-center" />
      </div>
    </div>
  </div>
</div>
<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">Collections</h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      <div>
        <a href="#" className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
          <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

          <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
            <span className="text-gray-500">Men</span>
            <span className="text-gray-800 text-lg lg:text-xl font-bold">Business Causual</span>
          </div>
        </a>
      </div>
      <div>
        <a href="#" className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
          <img src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by engin akyurt" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

          <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
            <span className="text-gray-500">Women</span>
            <span className="text-gray-800 text-lg lg:text-xl font-bold">Summer Season</span>
          </div>
        </a>
      </div>
      <div>
        <a href="#" className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
          <img src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

          <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
            <span className="text-gray-500">Men</span>
            <span className="text-gray-800 text-lg lg:text-xl font-bold">Streetwear</span>
          </div>
        </a>
      </div>
      <div>
        <a href="#" className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
          <img src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?auto=format&q=75&fit=crop&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

          <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
            <span className="text-gray-500">Women</span>
            <span className="text-gray-800 text-lg lg:text-xl font-bold">Sale</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div className="flex flex-col lg:flex-row lg:justify-between items-center bg-gray-100 rounded-lg p-4 sm:p-8">
      <div className="mb-4 sm:mb-8 lg:mb-0">
        <h2 className="text-indigo-500 text-xl sm:text-2xl lg:text-3xl font-bold text-center lg:text-left">Get the latest updates</h2>
        <p className="text-gray-500 text-center lg:text-left">Sign up for our newsletter</p>
      </div>

      <div className="flex flex-col items-center lg:items-end">
        <form className="w-full max-w-md flex gap-2 mb-3">
          <input placeholder="Email" className="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />

          <button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Send</button>
        </form>

        <p className="text-gray-400 text-xs text-center lg:text-right">By signing up to our newsletter you agree to our <a href="#" className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Term of Service</a> and <a href="#" className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</a>.</p>
      </div>
    </div>
  </div>
</div>
      </main>
      
    </>
  )
}
