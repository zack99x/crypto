<template>
  <section class="py-8 flex">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
          <TrendingCrypto />
        </div>
        <div class="w-full lg:w-2/3 px-4">
          <CryptoTable />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    TrendingCrypto: () => import("./TrendingCrypto.vue"),
    CryptoTable: () => import("./CryptoTable.vue"),
  },
};
</script>
