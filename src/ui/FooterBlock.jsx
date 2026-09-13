export default function FooterBlock() {
  return (
    <footer className="bg-base-200">
      <div className="footer p-10 text-base-content max-w-7xl mx-auto">
        <aside>
          <p className="text-2xl font-bold"><span className="text-brand-gradient">Dev</span> Stack</p>
          <p className="max-w-xs mt-2">Empowering developers to build modern web applications with the best technology stack.</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="opacity-70 hover:opacity-100">GitHub</a>
            <a href="#" className="opacity-70 hover:opacity-100">Twitter</a>
            <a href="#" className="opacity-70 hover:opacity-100">LinkedIn</a>
          </div>
        </aside> 
        <nav>
          <h6 className="footer-title">Product</h6> 
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Integrations</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Changelog</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Company</h6> 
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Contact</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Legal</h6> 
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </div>
      <div className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 max-w-7xl mx-auto">
        <aside className="items-center grid-flow-col">
          <p>© 2026 Dev Stack. All rights reserved.</p>
        </aside> 
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a className="link link-hover">Privacy</a>
            <a className="link link-hover">Terms</a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
