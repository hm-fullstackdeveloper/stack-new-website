import Fotter from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12">

        {/* Main Footer */}
        <div className="flex flex-col items-center lg:grid lg:grid-cols-[1.2fr_2fr] lg:items-start lg:gap-20">

          {/* Logo & Social */}
          <section className="flex flex-col items-center text-center lg:items-start lg:text-left">

            <img
              src={Fotter}
              alt="Dev Stack"
              className="h-auto w-auto"
            />

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <nav className="mt-5 flex gap-6">
              <a
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </nav>
          </section>


          {/* Desktop Footer Navigation */}
          <nav className="hidden lg:grid lg:grid-cols-3 lg:gap-24">

            {/* Product */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
                Product
              </h3>

              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-xs text-gray-400 transition hover:text-gray-700"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-xs text-gray-400 transition hover:text-gray-700"
                  >
                    Technologies
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-xs text-gray-400 transition hover:text-gray-700"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </section>


            {/* Company */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
                Company
              </h3>

              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-xs text-gray-400 transition hover:text-gray-700"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-xs text-gray-400 transition hover:text-gray-700"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-xs text-gray-400 transition hover:text-gray-700"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </section>


            {/* Legal */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
                Legal
              </h3>

              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-xs text-gray-400 transition hover:text-gray-700"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-xs text-gray-400 transition hover:text-gray-700"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </section>

          </nav>
        </div>


        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>


        {/* Bottom Footer */}
        <div className="flex flex-col items-center gap-4 text-xs text-gray-400 sm:flex-row sm:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <nav className="flex gap-5">
            <a
              href="#"
              className="transition hover:text-gray-700"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-gray-700"
            >
              Terms
            </a>
          </nav>

        </div>

      </div>
    </footer>
  );
};

export default Footer;