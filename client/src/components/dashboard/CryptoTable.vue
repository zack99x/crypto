<template>
  <div class="pt-4 bg-white shadow rounded">
    <div class="px-6 border-b border-blue-50">
      <div class="flex flex-wrap items-center mb-4">
        <div>
          <h3 class="text-xl font-bold">Liste des crypto monnaies</h3>
          <p class="text-sm text-gray-500 font-medium">
            Liste des crypto monnaies disponibles sur le marché
          </p>
        </div>
      </div>
      <div>
        <a
          class="inline-block px-4 pb-2 text-sm font-medium text-blue-500 border-b-2 border-blue-500"
          href="#"
          >DeFi</a
        ><a
          class="inline-block px-4 pb-2 text-sm font-medium text-gray-300 border-b-2 border-transparent hover:border-gray-300"
          href="#"
          >NFT</a
        ><a
          class="inline-block px-4 pb-2 text-sm font-medium text-gray-300 border-b-2 border-transparent hover:border-gray-300"
          href="#"
          >Metaverse</a
        >
      </div>
    </div>
    <div>
      <table class="table-auto w-full">
        <thead class="bg-gray-50">
          <tr class="text-xs text-gray-500 text-left">
            <th class="flex items-center pl-6 py-4 font-medium">
              <span>Favoris</span>
            </th>

            <th class="py-4 font-medium">Project Name</th>
            <th class="py-4 font-medium">Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-blue-50" v-for="i in 5" :key="i">
            <td class="flex items-center py-4 px-6 font-medium">
              <input class="mr-3" type="checkbox" name="" id="" />
              <div class="flex px-4 py-3">
                <img
                  class="w-8 h-8 mr-4 object-cover rounded-md"
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/6210.png"
                  alt=""
                />
                <div>
                  <p class="text-sm font-medium">The sandbox</p>
                  <p class="text-xs text-gray-500">SAND</p>
                </div>
              </div>
            </td>
            <td class="font-medium">
              <p class="text-sm">Metaverse</p>
              <p class="text-xs text-gray-500">€5.89</p>
            </td>

            <td class="pr-6">
              <p class="mb-1 text-xs text-blue-500 font-medium">65%</p>
              <div class="flex">
                <div class="relative h-1 w-48 bg-blue-50 rounded-full">
                  <div
                    class="absolute top-0 left-0 h-full w-2/6 bg-blue-500 rounded-full"
                  ></div>
                </div>
                <a class="ml-auto" href="#">
                  <svg
                    width="16"
                    height="4"
                    viewBox="0 0 16 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0.333344C7.67037 0.333344 7.34813 0.431092 7.07405 0.614228C6.79997 0.797363 6.58635 1.05766 6.4602 1.36221C6.33406 1.66675 6.30105 2.00186 6.36536 2.32516C6.42967 2.64846 6.5884 2.94543 6.82149 3.17852C7.05458 3.41161 7.35155 3.57034 7.67485 3.63465C7.99815 3.69896 8.33326 3.66596 8.63781 3.53981C8.94235 3.41366 9.20265 3.20004 9.38578 2.92596C9.56892 2.65188 9.66667 2.32965 9.66667 2.00001C9.66667 1.55798 9.49107 1.13406 9.17851 0.821499C8.86595 0.508939 8.44203 0.333344 8 0.333344ZM2.16667 0.333344C1.83703 0.333344 1.5148 0.431092 1.24072 0.614228C0.966635 0.797363 0.753014 1.05766 0.626868 1.36221C0.500722 1.66675 0.467717 2.00186 0.532025 2.32516C0.596334 2.64846 0.755068 2.94543 0.988156 3.17852C1.22124 3.41161 1.51822 3.57034 1.84152 3.63465C2.16482 3.69896 2.49993 3.66596 2.80447 3.53981C3.10902 3.41366 3.36931 3.20004 3.55245 2.92596C3.73559 2.65188 3.83333 2.32965 3.83333 2.00001C3.83333 1.55798 3.65774 1.13406 3.34518 0.821499C3.03262 0.508939 2.6087 0.333344 2.16667 0.333344ZM13.8333 0.333344C13.5037 0.333344 13.1815 0.431092 12.9074 0.614228C12.6333 0.797363 12.4197 1.05766 12.2935 1.36221C12.1674 1.66675 12.1344 2.00186 12.1987 2.32516C12.263 2.64846 12.4217 2.94543 12.6548 3.17852C12.8879 3.41161 13.1849 3.57034 13.5082 3.63465C13.8315 3.69896 14.1666 3.66596 14.4711 3.53981C14.7757 3.41366 15.036 3.20004 15.2191 2.92596C15.4023 2.65188 15.5 2.32965 15.5 2.00001C15.5 1.55798 15.3244 1.13406 15.0118 0.821499C14.6993 0.508939 14.2754 0.333344 13.8333 0.333344Z"
                      fill="#67798E"
                    ></path>
                  </svg>
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="py-4 text-center">
        <a
          class="inline-flex items-center text-xs text-blue-500 hover:text-blue-600 font-medium"
          href="#"
        >
          <span class="mr-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.99984 8.66669H1.33317C1.15636 8.66669 0.98679 8.73692 0.861766 8.86195C0.736742 8.98697 0.666504 9.15654 0.666504 9.33335V14.6667C0.666504 14.8435 0.736742 15.0131 0.861766 15.1381C0.98679 15.2631 1.15636 15.3334 1.33317 15.3334H3.99984C4.17665 15.3334 4.34622 15.2631 4.47124 15.1381C4.59627 15.0131 4.6665 14.8435 4.6665 14.6667V9.33335C4.6665 9.15654 4.59627 8.98697 4.47124 8.86195C4.34622 8.73692 4.17665 8.66669 3.99984 8.66669ZM3.33317 14H1.99984V10H3.33317V14ZM14.6665 6.00002H11.9998C11.823 6.00002 11.6535 6.07026 11.5284 6.19528C11.4034 6.32031 11.3332 6.48988 11.3332 6.66669V14.6667C11.3332 14.8435 11.4034 15.0131 11.5284 15.1381C11.6535 15.2631 11.823 15.3334 11.9998 15.3334H14.6665C14.8433 15.3334 15.0129 15.2631 15.1379 15.1381C15.2629 15.0131 15.3332 14.8435 15.3332 14.6667V6.66669C15.3332 6.48988 15.2629 6.32031 15.1379 6.19528C15.0129 6.07026 14.8433 6.00002 14.6665 6.00002ZM13.9998 14H12.6665V7.33335H13.9998V14ZM9.33317 0.666687H6.6665C6.48969 0.666687 6.32012 0.736925 6.1951 0.861949C6.07007 0.986973 5.99984 1.15654 5.99984 1.33335V14.6667C5.99984 14.8435 6.07007 15.0131 6.1951 15.1381C6.32012 15.2631 6.48969 15.3334 6.6665 15.3334H9.33317C9.50998 15.3334 9.67955 15.2631 9.80457 15.1381C9.9296 15.0131 9.99984 14.8435 9.99984 14.6667V1.33335C9.99984 1.15654 9.9296 0.986973 9.80457 0.861949C9.67955 0.736925 9.50998 0.666687 9.33317 0.666687ZM8.6665 14H7.33317V2.00002H8.6665V14Z"
                fill="#8880EB"
              ></path>
            </svg>
          </span>
          <span>Voir encore plus de projets</span>
        </a>
      </div>
    </div>
  </div>
</template>
