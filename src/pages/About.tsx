
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex-grow bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About SimpleWeb
          </h1>
          <p className="text-gray-600">
            Learn more about our mission, values, and what makes us unique.
          </p>
        </div>

        {/* ROW 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Left – Beautiful Design */}
          <div className="bg-gradient-to-br from-indigo-100 to-slate-100 rounded-2xl h-80 flex items-center justify-center shadow-md">
            <div className="text-center">
              <div className="text-6xl mb-4">🎨</div>
              <p className="text-gray-700 font-medium">
                Beautiful design
              </p>
            </div>
          </div>

          {/* Right – Our Story */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed">
              SimpleWeb was created with a vision to demonstrate how clean,
              elegant web design can be achieved using modern tools like React
              and Tailwind CSS. We believe in simplicity without sacrificing
              functionality. Our focus is on user experience, performance, and
              maintainability.
            </p>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left – Innovation First */}
          <div className="bg-gradient-to-br from-indigo-100 to-slate-100 rounded-2xl h-80 flex items-center justify-center shadow-md">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-gray-700 font-medium">
                Innovation first
              </p>
            </div>
          </div>

          {/* Right – Our Values */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Values
            </h2>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Simplicity
              </h3>
              <p className="text-gray-600 text-sm">
                We believe in keeping things simple and intuitive.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Quality
              </h3>
              <p className="text-gray-600 text-sm">
                Every detail matters. We strive for excellence.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm">
                We embrace modern technologies and best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Call To Action */}
        <div className="mt-20 text-center bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-6">
            Head back to the home page to explore all our features.
          </p>
          <Link
            to="/"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;