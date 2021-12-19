<template>
  <section class="py-5 px-6 bg-white shadow">
    <nav class="relative">
      <div class="flex items-center">
        <div class="hidden lg:flex items-center mr-auto">
          <button class="mr-2 text-gray-200 hover:text-gray-300">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7 19.3L17 15.6C20.1 11.7 19.5 6 15.6 2.9C11.7 -0.2 5.99999 0.5 2.89999 4.3C-0.200006 8.2 0.499995 13.9 4.29999 17C7.59999 19.6 12.3 19.6 15.6 17L19.3 20.7C19.7 21.1 20.3 21.1 20.7 20.7C21.1 20.3 21.1 19.7 20.7 19.3ZM9.99999 17C6.09999 17 2.99999 13.9 2.99999 10C2.99999 6.1 6.09999 3 9.99999 3C13.9 3 17 6.1 17 10C17 13.9 13.9 17 9.99999 17Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <input
            class="pl-2 py-3 text-sm text-gray-200"
            type="text"
            placeholder="Type to search..."
          />
        </div>
        <div class="flex w-full justify-end lg:hidden">
          <button class="flex items-center">
            <svg
              class="block h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <div class="hidden lg:block">
          <button class="flex items-center">
            <div class="mr-3 text-right">
              <p class="text-sm">{{ userData.username }}</p>
              <p class="text-sm text-gray-500">{{ userData.email }}</p>
            </div>
            <div class="mr-2">
              <img
                class="w-10 h-10 rounded-full object-cover object-right"
                src="https://www.sciencesetavenir.fr/assets/img/2016/09/02/cover-r4x3w1000-5834b11017175-elon-musk.jpg"
                alt=""
              />
            </div>
          </button>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  computed: {
    userData() {
      return this.$store.getters["user/userData"];
    },
  },
};
</script>
