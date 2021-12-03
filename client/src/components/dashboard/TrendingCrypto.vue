<template>
  <div class="py-4 bg-white rounded">
    <div class="px-6 pb-6 border-b border-blue-50">
      <h3 class="text-xl font-bold">Trending cryptocurrency</h3>
      <p class="text-sm text-gray-500">
        Crypto monnaies actuellement en tendance
      </p>
    </div>
    <div class="p-6" v-for="i in 8" :key="i">
      <div class="flex -mx-4">
        <div class="flex items-center w-1/2 px-4">
          <img
            class="mr-2 h-6"
            src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
            alt=""
          />
          <p class="text-sm font-medium">ETH</p>
        </div>
        <div class="w-1/2 px-4">
          <p class="mb-1 text-xs text-blue-500 font-medium">80%</p>
          <div class="flex">
            <div class="relative h-1 w-48 bg-blue-50 rounded-full">
              <div
                class="absolute top-0 left-0 h-full w-8/12 bg-blue-500 rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
