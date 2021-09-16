<template>
  <v-img
    :src="require('~/assets/img/faq/hero-banner/1.png')"
    style="margin-top: -5.5% !important"
    height="610"
  >
    <v-container>
      <v-row class="mt-8">
        <v-col xs="12" sm="12" md="6">
          <v-card flat color="transparent" style="padding-top: 22%">

            <v-card-title style="font-size: 3.75rem; font-family: 'Ubuntu', serif; color: #2A384C !important">
              Frequently
            </v-card-title>
            
            <v-card-title style="font-size: 3.75rem; font-family: 'Ubuntu', serif; color: #2A384C !important">
              Asked Question
            </v-card-title>

            <v-card-text class="mt-8" style="font-size: 1.3rem; line-height: 1.1; font-family: 'Nunito', sans-serif; padding-bottom:0; color: #2A384C !important">
              See our FAQs for answer you might be wondering
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-account-circle
          </v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial> -->
    <!-- <v-fab-transition>
      <v-btn
        fab
        bottom
        right
        absolute
      >
        <v-icon>{mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition> -->
  </v-img>
</template>

<script>
export default {
  data: () => ({
    cycle: false,
    slides: [
      'Integrated',
      'Immersive',
      'Interactive'
    ],
    direction: 'top',
      fab: true,
      fling: false,
      hover: true,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
  }),

  watch: {
    top (val) {
      this.bottom = !val
    },
    right (val) {
      this.left = !val
    },
    bottom (val) {
      this.top = !val
    },
    left (val) {
      this.right = !val
    },
  },
}
</script>

<style scoped>
.text-decoration-underline {
  text-decoration-color: #FDBF47 !important;
}
</style>
