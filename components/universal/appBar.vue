<template>
  <v-hover
      v-slot="{ hover }"
    >
    <v-app-bar
      fixed
      app
      :style="hover && scrollPosition < 50 ? 'background-color: white; font-family: Nunito, sans-serif' : scrollPosition >= 50 ? 'background-color: white;' : 'background-color: transparent;' +
      '-webkit-transition: background-color 0.3s linear 0s, box-shadow 0.3s linear 0s;' +
      '-moz-transition: background-color 0.3s linear 0s, box-shadow 0.3s linear 0s;' +
      '-o-transition: background-color 0.3s linear 0s, box-shadow 0.3s linear 0s; font-weight: bold; font-family: Nunito, sans-serif'"
      class="elevation-0 pl-9 pr-10"
    >
      <v-row>
        <v-col xs="12" sm="12" md="5">
          <v-hover
            v-slot="{ hover }"
          >
            <v-btn
              plain
              height="45"
              :style="hover ? 'color: #EBAD32; font-weight: bold' : 'font-weight: bold; color: #2A384C;'"
              to="/contact-us"
              exact
              exact-active-class="active-link-page"
            >
              Contact
            </v-btn>
          </v-hover>
          
          <v-hover
            v-slot="{ hover }"
          >
            <v-btn
              plain
              height="45"
              :style="hover ? 'color: #EBAD32; font-weight: bold' : 'font-weight: bold; color: #2A384C;'"
            >
              Our Product
            </v-btn>
          </v-hover>

          <v-hover
            v-slot="{ hover }"
          >
            <v-btn
              plain
              height="45"
              :style="hover ? 'color: #EBAD32; font-weight: bold' : 'font-weight: bold; color: #2A384C;'"
              to="/faq"
              exact
              exact-active-class="active-link-page"
            >
              FAQ
            </v-btn>
          </v-hover>
        </v-col>

        <v-col xs="12" sm="12" md="2" align="center">
          <v-img
            v-if="!hover && scrollPosition < 50"
            :src="require('~/assets/img/logo/logo_2.png')"
            width="80"
            @click="home"
            class="logo-home"
          />
          <v-img
            v-if="hover && scrollPosition < 50"
            :src="require('~/assets/img/logo/logo_2.png')"
            width="80"
            @click="home"
            class="logo-home"
          />
          <v-img
            v-if="hover && scrollPosition > 50"
            :src="require('~/assets/img/logo/logo_2.png')"
            width="80"
            @click="home"
            class="logo-home"
          />
          <v-img
            v-if="!hover && scrollPosition > 50"
            :src="require('~/assets/img/logo/logo_2.png')"
            width="80"
            @click="home"
            class="logo-home"
          />
        </v-col>

        <v-col xs="12" sm="12" md="5" align="right">
          <v-hover
            v-slot="{ hover }"
          >
            <v-btn
              plain
              height="45"
              :style="hover ? 'color: #EBAD32; font-weight: bold' : 'font-weight: bold; color: #2A384C;'"
            >
              Login
            </v-btn>
          </v-hover>
          <v-btn
            depressed
            width="150"
            height="45"
            class="font-weight-bold"
            style="background-color: #FDBF47;
              color: #2A384C !important;
              font-size: 16px !important;"
            >
            Try Atlaz
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
  </v-hover>
</template>

<script>
export default {
  computed: {
    scrollPosition() {
      return this.$store.getters['helper/scrollPosition']
    }
  },

  methods: {
    home() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Nunito', sans-serif !important;
}
.active-link-page {
  color: #FDBF47 !important;
}
.logo-home {
  cursor: pointer im;
}
</style>
