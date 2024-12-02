import React from 'react'

function Form() {
  return (
    <>
<div class="max-w-screen-lg mx-auto p-5">
  <div class="grid grid-cols-1 md:grid-cols-12 border">
    
    
    <div class="md:col-span-4 p-10 ">
      <p class="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
      <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">Get In <span class="text-secondary">Touch</span></h3>
      <p class="mt-4 leading-7 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

      <div class="flex items-center mt-5">
        <svg class="h-6 mr-2 text-secondary" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.536 489.536">
          <path d="m488.554,476l-99-280.2c-1-4.2-5.2-7.3-9.4-7.3h-45.6c12.9-31.1 19.6-54.9 19.6-70.8 0-64.6-50-117.7-112.5-117.7-61.5,0-112.5,52.1-112.5,117.7 0,17.6 8.2,43.1 19.9,70.8h-39.7c-4.2,0-8.3,3.1-9.4,7.3l-99,280.2c-3.2,10.3 6.3,13.5 9.4,13.5h468.8c4.2,0.5 12.5-4.2 9.4-13.5zm-246.9-455.3c51,1.06581e-14 91.7,43.7 91.7,96.9 0,56.5-79.2,182.3-91.7,203.1-31.3-53.1-91.7-161.5-91.7-203.1 0-53.1 40.6-96.9 91.7-96.9zm-216.7,448l91.7-259.4h41.7c29.9,64.1 83.3,151 83.3,151s81.4-145.7 83.8-151h47.4l91.7,259.4h-439.6z"/>
        </svg>
        <span class="text-sm">14, Tana St, opp. AAVIN BOOTH, Purasaiwakkam, Chennai, Tamil Nadu 600007</span>
      </div>
      <div class="flex items-center mt-5">
        <svg class="h-6 mr-2 text-secondary" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 60.002 60.002">
          <path d="M59.002,37.992c-3.69,0-6.693-3.003-6.693-6.693c0-0.553-0.447-1-1-1s-1,0.447-1,1c0,4.794,3.899,8.693,8.693,8.693 c0.553,0,1-0.447,1-1S59.554,37.992,59.002,37.992z"/>
        </svg>
        <span class="text-sm">9889843343</span>
      </div>
      <div class="flex items-center mt-5">
        <svg class="h-6 mr-2 text-secondary" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300.988 300.988">
          <path d="M150.494,0.001C67.511,0.001,0,67.512,0,150.495s67.511,150.493,150.494,150.493s150.494-67.511,150.494-150.493 S233.476,0.001,150.494,0.001z M150.494,285.987C75.782,285.987,15,225.206,15,150.495S75.782,15.001,150.494,15.001 s135.494,60.782,135.494,135.493S225.205,285.987,150.494,285.987z"/>
          <polygon points="142.994,142.995 83.148,142.995 83.148,157.995 157.994,157.995 157.994,43.883 142.994,43.883"/>
        </svg>
        <span class="text-sm">24/7</span>
      </div>
    </div>

    <form class="md:col-span-8 p-10" action="your-server-endpoint" method="POST">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="first-name">
            First Name
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="first-name" name="first-name" type="text" placeholder="Jane" required />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="last-name">
            Last Name
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last-name" name="last-name" type="text" placeholder="Doe" />
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
            Email Address
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name="email" type="email" placeholder="********@*****.**" required />
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="message">
            Your Message
          </label>
          <textarea rows="10" id="message" name="message" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Your message here..." required></textarea>
        </div>
        <div class="flex justify-between w-full px-3">
          <div class="md:flex md:items-center">
            <label class="block text-gray-500 font-bold">
              <input class="mr-2 leading-tight" type="checkbox" name="newsletter" />
              <span class="text-sm">Send me your newsletter!</span>
            </label>
          </div>
          <button class="shadow bg-secondary hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
            Send Message
          </button>
        </div>
      </div>
    </form>
  </div>
</div>

    </>
  )
}

export default Form