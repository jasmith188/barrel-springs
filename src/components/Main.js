'use client';

import barrelWhiteFont from '../images/Barrel Springs-full design_font only white.png';

export default function Example() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr  opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-12 sm:py-48 lg:py-10">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <img src={barrelWhiteFont} alt="white-font" />

            <p className="mt-6 text-lg leading-8 text-white">
              Barrel Springs Bar & Grill in Wisconsin Dells is a local favorite,
              known for its casual atmosphere and focus on American-style bar
              fare made with locally sourced ingredients. It's a popular
              destination for both locals and visitors to enjoy a refreshing
              drink and a social environment, making it a great spot for anyone
              looking to unwind and have fun. The bar's emphasis on community
              creates a welcoming space to gather with friends or meet new
              people.
            </p>

            <div className="mt-20 flex items-center justify-center gap-x-6">
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:US:7853c796-ff9d-46a5-976c-c7d4d0f0fa08"
                className="no-underline rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                View Dinner Menu
              </a>
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:US:59c90e72-1771-4709-97f8-042cdd9fdbe6"
                className="no-underline rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                View Breakfast Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
