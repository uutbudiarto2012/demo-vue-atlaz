<template>
  <v-app>
    <v-main>
      <universal-app-bar />
      <Nuxt />
      <universal-footer />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  mounted() {
    window.addEventListener('scroll', this.updateScrollPosition)
  },

  methods: {
    ...mapActions({
      setScrollPosition: 'helper/setScrollPosition'
    }),

    updateScrollPosition() {
      this.setScrollPosition(window.scrollY)
    }
  }
}
</script>
