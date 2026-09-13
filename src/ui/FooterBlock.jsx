export default function FooterBlock() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <img src="/logo-text.png" alt="Dev Stack" className="h-10 mb-2 object-contain" />
            <p className="mt-4 text-gray-500 leading-relaxed text-sm">
              Empowering developers to build modern web applications with the best technology stack.
            </p>
            <div className="flex items-center space-x-5 mt-6 text-sm font-medium">
              <a href="#" className="text-gray-500 hover:text-black transition-colors">GitHub</a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 tracking-wide mb-5">Product</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 tracking-wide mb-5">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 tracking-wide mb-5">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
