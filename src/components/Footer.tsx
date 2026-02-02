
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-700">
          © {currentYear} SimpleWeb. Built with React and Tailwind CSS
        </p>
        <p className="text-xs text-gray-500 mt-2">
          A simple and elegant website example
        </p>
      </div>
    </footer>
  )
}

export default Footer