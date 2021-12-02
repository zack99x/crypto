<template>
  <section class="relative pb-20">
    <nav
      class="flex justify-between items-center py-8 px-4 xl:px-10"
      data-config-id="toggle-mobile"
      data-config-target=".navbar-menu"
      data-config-class="hidden"
    >
      <a class="text-lg font-semibold" href="#" data-config-id="brand">
        LOGO COM
      </a>
      <div class="lg:hidden">
        <button
          class="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded"
        >
          <svg
            class="block h-4 w-4"
            viewbox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            data-config-id="auto-svg-1-6"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul
        class="hidden lg:ml-auto lg:mr-12 lg:flex lg:items-center lg:space-x-12"
      >
        <li>
          <a class="text-sm font-medium" href="#" data-config-id="link1"
            >About</a
          >
        </li>
        <li>
          <a class="text-sm font-medium" href="#" data-config-id="link2"
            >Company</a
          >
        </li>
        <li>
          <a class="text-sm font-medium" href="#" data-config-id="link3"
            >Services</a
          >
        </li>
        <li>
          <a class="text-sm font-medium" href="#" data-config-id="link4"
            >Testimonials</a
          >
        </li>
      </ul>
      <div class="hidden lg:block">
        <router-link
          class="inline-block py-3 px-8 text-sm leading-normal font-medium bg-green-50 hover:bg-green-100 text-green-500 rounded transition duration-200 mr-4"
          to="/register"
          data-config-id="primary-action"
          >inscription</router-link
        >
      </div>
      <div class="hidden lg:block">
        <router-link
          class="inline-block py-3 px-8 text-sm leading-normal font-medium bg-red-50 hover:bg-red-100 text-red-500 rounded transition duration-200"
          to="/login"
          data-config-id="primary-action"
        >
          connexion
        </router-link>
      </div>
    </nav>
    <img
      class="hidden lg:block lg:absolute top-0 left-0 mt-32"
      src="zeus-assets/icons/dots/yellow-dot-left-bars.svg"
      alt=""
      data-config-id="auto-img-1"
    />
    <img
      class="hidden lg:block lg:absolute bottom-0 right-0 mb-40"
      src="zeus-assets/icons/dots/red-dot-right-shield.svg"
      alt=""
      data-config-id="auto-img-2"
    />
    <div class="relative container px-4 pt-12 mb-20 mx-auto text-center">
      <span class="text-blue-400 font-semibold" data-config-id="label"
        >Rejoignez nous</span
      >
      <h2
        class="mt-8 mb-8 lg:mb-12 text-4xl lg:text-6xl font-semibold"
        data-config-id="header"
      >
        Découvrez le monde des cryptos en quelques minutes
      </h2>
      <p
        class="max-w-3xl mx-auto mb-8 lg:mb-12 text-xl text-gray-500"
        data-config-id="desc"
      >
        Rejoignez la plus grande plateforme cryptos au monde
      </p>
      <a
        class="relative z-10 inline-block w-full md:w-auto mb-2 md:mb-0 px-8 py-4 mr-4 text-sm font-medium leading-normal bg-red-400 hover:bg-red-300 text-white rounded transition duration-200"
        href="#"
        data-config-id="hero-primary-action"
        >Nous rejoindre</a
      >
    </div>
    <div class="max-w-6xl px-4 mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/3 px-4 mb-4" v-for="i in 6" :key="i">
          <div class="p-8 border rounded-lg">
            <div class="flex flex-row items-center mb-10">
              <span class="flex items-center justify-center w-16 h-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
                  xml:space="preserve"
                  width="100%"
                  height="100%"
                  version="1.1"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  viewBox="0 0 784.37 1277.39"
                >
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <g id="_1421394342400">
                      <g>
                        <polygon
                          fill="#343434"
                          fill-rule="nonzero"
                          points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
                        />
                        <polygon
                          fill="#8C8C8C"
                          fill-rule="nonzero"
                          points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
                        />
                        <polygon
                          fill="#3C3C3B"
                          fill-rule="nonzero"
                          points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
                        />
                        <polygon
                          fill="#8C8C8C"
                          fill-rule="nonzero"
                          points="392.07,1277.38 392.07,956.52 -0,724.89 "
                        />
                        <polygon
                          fill="#141414"
                          fill-rule="nonzero"
                          points="392.07,882.29 784.13,650.54 392.07,472.33 "
                        />
                        <polygon
                          fill="#393939"
                          fill-rule="nonzero"
                          points="0,650.54 392.07,882.29 392.07,472.33 "
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <h3 class="text-2xl font-semibold" data-config-id="header3">
                Ethereum
              </h3>
            </div>
            <h2 class="mb-2 text-3xl font-bold">1 450</h2>
            <span class="text-xs text-red-500">
              <span class="inline-block mr-2">
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 4.16667C16.3906 4.16661 16.2822 4.18812 16.181 4.22998C16.0799 4.27183 15.988 4.33322 15.9106 4.41061C15.8332 4.488 15.7719 4.57989 15.73 4.68103C15.6881 4.78216 15.6666 4.89055 15.6667 5V7.15495L10.4225 1.91084C10.3452 1.83344 10.2533 1.77204 10.1522 1.73015C10.0511 1.68825 9.94277 1.66669 9.83333 1.66669C9.7239 1.66669 9.61554 1.68825 9.51445 1.73015C9.41335 1.77204 9.3215 1.83344 9.24414 1.91084L6.50002 4.65495L2.08919 0.244171C1.93245 0.0902454 1.72127 0.00444584 1.50159 0.00544068C1.28191 0.00643553 1.07151 0.094144 0.91617 0.249483C0.760831 0.404822 0.673123 0.61522 0.672128 0.8349C0.671133 1.05458 0.756932 1.26576 0.910858 1.4225L5.91086 6.4225C5.98822 6.4999 6.08007 6.5613 6.18116 6.60319C6.28226 6.64508 6.39062 6.66665 6.50005 6.66665C6.60948 6.66665 6.71784 6.64508 6.81893 6.60319C6.92003 6.5613 7.01188 6.4999 7.08924 6.4225L9.83336 3.67839L14.4883 8.33334H12.3334C12.1123 8.33334 11.9004 8.42113 11.7441 8.57741C11.5878 8.7337 11.5 8.94566 11.5 9.16667C11.5 9.38768 11.5878 9.59965 11.7441 9.75593C11.9004 9.91221 12.1123 10 12.3334 10H16.5C16.6095 10.0001 16.7179 9.97855 16.819 9.9367C16.9201 9.89484 17.012 9.83346 17.0894 9.75607C17.1668 9.67867 17.2282 9.58678 17.2701 9.48565C17.3119 9.38452 17.3334 9.27612 17.3334 9.16667V5C17.3334 4.89055 17.3119 4.78216 17.2701 4.68103C17.2282 4.57989 17.1668 4.488 17.0894 4.41061C17.012 4.33322 16.9201 4.27183 16.819 4.22998C16.7179 4.18812 16.6095 4.16661 16.5 4.16667Z"
                    fill="#E85444"
                  ></path>
                </svg>
              </span>
              <span>25% less</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50"
      data-config-id="toggle-mobile-2"
      data-config-target=".navbar-menu"
      data-config-class="hidden"
    >
      <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav
        class="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto"
      >
        <div class="flex items-center mb-8">
          <a
            class="mr-auto text-lg font-semibold leading-none"
            href="#"
            data-config-id="brand"
          >
            LOGO COM
          </a>
          <button class="navbar-close">
            <svg
              class="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewbox="0 0 24 24"
              stroke="currentColor"
              data-config-id="auto-svg-8-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li class="mb-1">
              <a
                class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                href="#"
                data-config-id="link1"
                >About</a
              >
            </li>
            <li class="mb-1">
              <a
                class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                href="#"
                data-config-id="link2"
                >Company</a
              >
            </li>
            <li class="mb-1">
              <a
                class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                href="#"
                data-config-id="link3"
                >Services</a
              >
            </li>
            <li class="mb-1">
              <a
                class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                href="#"
                data-config-id="link4"
                >Testimonials</a
              >
            </li>
          </ul>
        </div>
        <div class="mt-auto">
          <div class="pt-6">
            <a
              class="block py-3 text-center text-sm leading-normal rounded bg-red-50 hover:bg-red-200 text-red-500 font-semibold transition duration-200"
              href="#"
              data-config-id="primary-action"
              >Contact Us</a
            >
          </div>
          <p class="mt-6 mb-4 text-sm text-center text-gray-500">
            <span data-config-id="copy">&copy; 2021 All rights reserved.</span>
          </p>
        </div>
      </nav>
    </div>
  </section>
</template>
