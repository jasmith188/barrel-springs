import './App.css';
// import Navbar from './components/Navbar';
// import Main from './components/Main';
// import ImageCarousel from './components/ImageCarousel';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App text-2xl pt-40">
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="max-w-md text-center">
          <h1 className="text-8xl font-extrabold text-blue-500">404</h1>
          <p className="mt-4 text-lg text-gray-600">
            Whoops! This page got lost in the shuffle.
          </p>
          <div className="mt-6">
            <img
              src="https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif"
              alt="Funny cat confused gif"
              className="mx-auto w-64 rounded-lg shadow-md"
            />
          </div>
          <p className="mt-8">
            <a
              href="/"
              className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-700 focus:ring focus:ring-blue-300">
              Back to figuring it out
            </a>
          </p>
        </div>
      </div>
      {/* <Navbar /> */}
      {/* <Main /> */}
      {/* <ImageCarousel /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
