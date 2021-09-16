<template>
  <v-img
    :src="require('~/assets/img/contact-us/hero-banner/1.png')"
    style="margin-top: -5.5% !important"
    height="610"
  >
    <v-container>
      <v-row class="mt-8">
        <v-col xs="12" sm="12" md="6">
          <v-card flat color="transparent" style="padding-top: 22%">

            <v-card-title style="font-size: 3.75rem; font-family: 'Ubuntu', serif; color: #2A384C !important">
              Contact us
            </v-card-title>

            <v-card-text class="mt-8" style="font-size: 1.3rem; line-height: 1.1; font-family: 'Nunito', sans-serif; padding-bottom:0; color: #2A384C !important">
              Find your answer by contacting us
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
export default {
  data: () => ({
  }),
}
</script>

<style scoped>
.text-decoration-underline {
  text-decoration-color: #FDBF47 !important;
}
</style>
