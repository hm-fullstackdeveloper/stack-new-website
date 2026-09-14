const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

    
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md 
              brand-gradient
              text-[9px] font-bold text-white">
                DS
              </span>

              <h2 className="text-sm font-bold text-gray-900">
                Dev <span className="text-pink-500">Stack</span>
              </h2>
            </div>

            <p className="mt-3 max-w-xs text-[10px] leading-4 text-gray-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-4">
              <a
                href="#"
                className="font-bold text-[14px] text-gray-600 hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="font-bold text-[14px] text-gray-600 hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="font-bold text-[14px] text-gray-600 hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>



            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-100">


          {/* Product */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[10px] text-gray-400 hover:text-gray-700"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[10px] text-gray-400 hover:text-gray-700"
                  >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[10px] text-gray-400 hover:text-gray-700"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>









          {/* Company */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[10px] text-gray-400 hover:text-gray-700"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[10px] text-gray-400 hover:text-gray-700"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[10px] text-gray-400 hover:text-gray-700"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>






          {/* Legal */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-gray-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[10px] text-gray-400 hover:text-gray-700"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[10px] text-gray-400 hover:text-gray-700"
                  >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>


                    </div>



        {/* Divider */}
        <div className="my-10 border-t border-gray-200"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 text-[10px] text-gray-400 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5 md:flex-row md:items-center md:justify-between">
            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>

            <a href="#" className="hover:text-gray-700">
              Terms
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;