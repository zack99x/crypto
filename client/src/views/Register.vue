<template>
  <section class="relative py-20 h-screen flex">
    <div class="hidden lg:block absolute top-0 left-0 mt-16 z-10">
      <BlueDotIcon />
    </div>
    <div class="hidden lg:block absolute bottom-0 right-0 mb-16">
      <YellowShieldIcon />
    </div>
    <div
      class="absolute top-0 left-0 lg:bottom-0 h-128 lg:h-auto w-full lg:w-8/12 bg-gray-50"
    ></div>
    <div class="relative container px-4 mx-auto">
      <div class="flex flex-wrap items-center -mx-4">
        <div class="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
          <div class="max-w-lg">
            <h2 class="mb-10 text-4xl font-semibold font-heading">
              Lorem ipsum dolor sit amet consectutar domor at elis
            </h2>
            <p class="text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
              aliquet orci.
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-4">
          <div
            class="lg:max-w-md p-6 lg:px-10 lg:py-12 bg-white text-center border rounded-xl"
          >
            <form @submit.prevent="register">
              <span
                class="inline-block mb-4 text-xs text-blue-400 font-semibold"
                >Inscription</span
              >
              <h3 class="mb-12 text-3xl font-semibold font-heading">
                Création d'un nouveau compte
              </h3>
              <div class="relative flex flex-wrap mb-6">
                <input
                  class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                  type="text"
                  placeholder="Satoshi"
                  v-model.trim="username"
                />
                <span
                  class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs"
                  >Votre nom d'utilisateur</span
                >
              </div>
              <div class="relative flex flex-wrap mb-6">
                <input
                  class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                  type="text"
                  placeholder="e.g john.doe@egmail.com"
                  v-model.trim="email"
                />
                <span
                  class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs"
                  >Votre adresse email</span
                >
              </div>
              <div class="relative flex flex-wrap mb-6">
                <input
                  class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                  type="password"
                  placeholder="******"
                  v-model="password"
                />
                <span
                  class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs"
                  >Mot de passe</span
                >
              </div>
              <div class="relative flex flex-wrap mb-6">
                <input
                  class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                  type="password"
                  placeholder="******"
                  v-model="confirmPassword"
                />
                <span
                  class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs"
                  >Confirmer votre mot de passe</span
                >
              </div>
              <label class="inline-flex mb-10 text-left">
                <input
                  class="mr-2"
                  type="checkbox"
                  name="terms"
                  value="1"
                  v-model="hasChecked"
                />
                <span class="-mt-1 inline-block text-sm text-gray-500"
                  >En vous inscrivant, vous acceptez
                  <a class="text-blue-400 hover:underline" href="#"
                    >notre politique de confidentialité</a
                  >
                  et
                  <a class="text-blue-400 hover:underline" href="#"
                    >notre politique de cookie</a
                  >.</span
                >
              </label>
              <button
                class="w-full inline-block py-4 text-sm text-white font-medium leading-normal bg-blue-400 hover:bg-blue-300 rounded transition duration-200"
              >
                Rejoignez nous
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { create_user } from "../api/user";
import { validateEmail } from "../utils/validator";
export default {
  components: {
    BlueDotIcon: () => import("../components/svg/BlueDotIcon.vue"),
    YellowShieldIcon: () => import("../components/svg/YellowShieldIcon.vue"),
  },

  data() {
    return {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      hasChecked: false,
    };
  },

  methods: {
    checkFormValidation() {
      if (!validateEmail(this.email)) {
        this.$toast.error("L'adresse email doit être renseignée");
        return false;
      } else if (this.username.length < 3) {
        this.$toast.error("Le nom d'utilisateur doit être renseigné");
        return false;
      } else if (this.password !== this.confirmPassword) {
        this.$toast.error("Les mots de passe ne correspondent pas");
        return false;
      } else if (!this.hasChecked) {
        this.$toast.error("Vous devez accepter les conditions d'utilisation");
        return false;
      } else {
        return true;
      }
    },
    register() {
      const isFormValid = this.checkFormValidation();
      if (isFormValid) {
        create_user(this.email, this.username, this.password)
          .then(({ data }) => {
            const { username, email, token } = data.data;

            this.$store.dispatch("user/login", {
              email,
              username,
              token,
            });
          })
          .then(() => {
            this.$toast.success("Félicitation, vous êtes inscrit !");
            this.$router.push("/dashboard");
          })
          .catch((error) => {
            this.$toast.error(
              "Oops, une erreur s'est produite, veuillez réessayer ultérieurement.."
            );
            console.log(error);
          });
      }
    },
  },
  computed: {
    userData() {
      return this.$store.getters["user/session"];
    },
  },
};
</script>
