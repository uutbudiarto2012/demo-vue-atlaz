<template>
  <v-container
    fluid
    style="background-color: #2A384C; padding-top: 15%; padding-bottom: 10%;"
    class="pl-16 pr-16"
  >
    <v-row>
      <v-col xs="12" sm="12" md="7">
        <v-img
          :src="require('~/assets/img/why-atlaz/1.png')"
        />
      </v-col>
      <v-col xs="12" sm="12" md="5" class="">
        <v-card
          style="background-color: #F4E8CA;
            margin-top: 6%;
            margin-left: -20%;
            padding: 70px 90px 70px 90px;
            width: 58%;
            right: 70px;
            position: absolute !important"
          rounded="0"
        >
          <v-card-title style="font-size: 2.5rem; font-family: 'Ubuntu', serif !important; color: #2A384C !important">
            Why Atlaz?
          </v-card-title>
          <v-carousel
            cycle
            :show-arrows="false"
            hide-delimiter-background
            :interval="5000"
            height="200"
          >
            <v-carousel-item
              v-for="(slide, i) in slides"
              :key="i"
            >
              <v-card-title
                style="font-family: 'Nunito', serif !important; font-size: 1.75rem; color: #2A384C !important"
                class="font-weight-bold text-decoration-underline"
              >
                {{ slide.title }}
              </v-card-title>
              <v-card-text style="font-family: 'Nunito', serif !important; font-size: 1.25rem; color: #2A384C !important">
                {{ slide.text }}
              </v-card-text>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    slides: [
      {
        title: 'Discover Beyond English',
        text: 'Study with confidence using the latest curriculum up to international standards. Experience a more effective and interactive learning experience for easy and quick English mastery.'
      },
      {
        title: 'Higher Order Thinking',
        text: 'Through a learning method that requires more cognitive processing, students are conditioned to think more critically, develop better train of thoughts, and produce remarkable output.'
      },
      {
        title: 'Relevant Skills',
        text: 'We believe that being sociable and communicative is equally important as being “booksmart.” This is why we incorporate character building into our curriculum.'
      },
      {
        title: 'The Better Method',
        text: 'Going digital is the best way to provide an evergreen and real-time access to materials, support, and resources for both students and teachers alike for a more personal learning experience.'
      }
    ]
  }),
}
</script>
