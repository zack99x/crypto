<template>
  <section class="relative py-20">
    <div
      class="hidden lg:block absolute top-0 left-0 mt-16"
      src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
      alt=""
    >
      <BlueDotIcon />
    </div>
    <div class="hidden lg:block absolute bottom-0 right-0 mb-20">
      <YellowShieldIcon />
    </div>
    <div class="container px-4 mx-auto">
      <div
        class="max-w-md mx-auto py-6 lg:py-12 px-4 lg:px-8 bg-white border rounded-xl text-center"
      >
        <span class="inline-block mb-4 text-xs text-blue-400 font-semibold"
          >Connexion</span
        >
        <h3 class="mb-12 text-3xl font-semibold font-heading">
          Accéder à votre compte
        </h3>
        <form action="#">
          <div class="relative flex flex-wrap mb-6">
            <input
              class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
              type="email"
              placeholder="e.g hello@shuffle.dev"
            />
            <span
              class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs"
              >Adresse email</span
            >
          </div>
          <div class="relative flex flex-wrap mb-6">
            <input
              class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
              type="password"
              placeholder="******"
            />
            <span
              class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs"
              >Mot de passe</span
            >
          </div>
          <button
            class="w-full inline-block py-4 mb-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200"
          >
            Connexion
          </button>
          <a
            class="block pb-6 mb-6 text-sm font-semibold hover:underline border-b"
            href="#"
            >Mot de passe oublié ?</a
          >
          <a
            class="flex items-center justify-center py-4 bg-gray-900 hover:bg-gray-800 rounded"
            @click="loginWithGithub"
          >
            <span class="inline-block mr-2 w-8">
              <GitIcon />
            </span>
            <span class="text-sm text-white">Connexion avec github</span>
          </a>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { authWithGithub } from "../api/auth";

export default {
  components: {
    BlueDotIcon: () => import("../components/svg/BlueDotIcon.vue"),
    GitIcon: () => import("../components/svg/GitIcon.vue"),
    YellowShieldIcon: () => import("../components/svg/YellowShieldIcon.vue"),
  },

  methods: {
    async loginWithGithub() {
      authWithGithub();
    },
  },
};
</script>
