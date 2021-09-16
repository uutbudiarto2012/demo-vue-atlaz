<template>
  <v-container
    fluid
    style="background-color: #F4E8CA;
      padding-top: 80px;
      padding-bottom: 80px;
      padding-left: 5%;
      padding-right: 5%;
      margin-top: -8px"
  >
    <v-row>

      <v-col xs="12" sm="12" md="6">

        <div
          :style="scrollPosition >= 700 && scrollPosition <= 3800 ? 'position: fixed;' +
            'top: 24%;' + 
            'width: 48%;' : ''"
        >
          <v-card flat color="transparent">

            <!-- Content 1 -->
            <div v-if="scrollPosition <= 1000">
              <v-card-title
                style="font-size: 2rem;
                  font-family: 'Ubuntu', sans-serif;
                  padding-bottom: 0;
                  color: #2A384C !important"
              >
                Atlaz Academy has 
              </v-card-title>
              <v-card-text
                style="font-size: 2rem;
                  line-height: 2rem;
                  font-family: 'Ubuntu', sans-serif;
                  color: #2A384C !important"
                class="text-decoration-underline"
              >
                Learning Management System
              </v-card-text>
              <v-card-text
                style="font-size: 1.1rem;
                  line-height: 1.5rem;
                  font-family: 'Nunito', serif !important;
                  color: #2A384C !important"
              >
                The Atlaz Academy is our very own comprehensive Learning Management System (LMS) that houses the entire collection of Atlaz’s materials. Atlaz Academy also serves as a platform for support and personal progress report.
              </v-card-text>
            </div>

            <!-- content 2 -->
            <div v-if="scrollPosition > 1000 && scrollPosition <= 1600">
              <v-card-title
                style="font-size: 2rem;
                  font-family: 'Ubuntu', serif !important;
                  padding-bottom: 0;
                  color: #2A384C !important"
                >
                Atlaz Academy has 
              </v-card-title>
              <v-card-text
                style="font-size: 2rem;
                  line-height: 2rem;
                  font-family: 'Ubuntu', serif !important;
                  color: #2A384C !important"
                class="text-decoration-underline"
              >
                Physical and Interactive Textbooks
              </v-card-text>
              <v-card-text
                style="font-size: 1.1rem;
                  line-height: 1.5rem;
                  font-family: 'Nunito', serif !important;
                  color: #2A384C !important"
              >
                Atlaz provides all-new textbooks with captivating illustrations and challenging yet fun exercises. The textbooks are available in physical and digital formats for a more exciting, engaging, and motivating learning.
              </v-card-text>
            </div>

            <!-- content 3 -->
            <div v-if="scrollPosition > 1600 && scrollPosition <= 2200">
              <v-card-title
                style="font-size: 2rem;
                  font-family: 'Ubuntu', serif !important;
                  padding-bottom: 0;
                  color: #2A384C !important"
                >
                Atlaz Academy has 
              </v-card-title>
              <v-card-text
                style="font-size: 2rem;
                  line-height: 2rem;
                  font-family: 'Ubuntu', serif !important;
                  color: #2A384C !important"
                class="text-decoration-underline"
              >
                Video Lectures
              </v-card-text>
              <v-card-text
                style="
                  font-size: 1.1rem;
                  line-height: 1.5rem;
                  font-family: 'Nunito', serif !important;
                  color: #2A384C !important"
              >
                Our English Mentor will guide students throughout every unit in comprehensive and lively video lectures. Students can access these videos at any time to review the materials they are currently studying, or just for fun, really.
              </v-card-text>
            </div>

            <!-- content 4 -->
            <div v-if="scrollPosition > 2200 && scrollPosition <= 2800">
              <v-card-title
                style="font-size: 2rem;
                  font-family: 'Ubuntu', serif !important;
                  padding-bottom: 0;
                  color: #2A384C !important">
                Atlaz Academy has 
              </v-card-title>
              <v-card-text
                style="
                  font-size: 2rem;
                  line-height: 2rem;
                  font-family: 'Ubuntu', serif !important;
                  color: #2A384C !important"
                class="text-decoration-underline"
              >
                Quizzes and Assessments
              </v-card-text>
              <v-card-text
                style="
                  font-size: 1.1rem;
                  line-height: 1.5rem;
                  font-family: 'Nunito', serif !important;
                  color: #2A384C !important"
              >
                Students can access a wide selection of quizzes designed specifically to test students’ comprehension. Teachers can assess a student’s progress based on his/her performance in the test.
              </v-card-text>
            </div>

            <!-- content 5 -->
            <div v-if="scrollPosition > 2800 && scrollPosition <= 3400">
              <v-card-title
                style="font-size: 2rem;
                  font-family: 'Ubuntu', serif !important;
                  padding-bottom: 0;
                  color: #2A384C !important"
                >
                Atlaz Academy has 
              </v-card-title>
              <v-card-text
                style="
                  font-size: 2rem;
                  line-height: 2rem;
                  font-family: 'Ubuntu', serif !important;
                  color: #2A384C !important"
                class="text-decoration-underline"
              >
                Animated Videos
              </v-card-text>
              <v-card-text
                style="font-size: 1.1rem;
                  line-height: 1.5rem;
                  font-family: 'Nunito', serif !important;
                  color: #2A384C !important"
              >
                Entertaining, mostly amusing, and educational animated videos designed to help students with their learning process in a fun way!
              </v-card-text>
            </div>

            <!-- content 6 -->
            <div v-if="scrollPosition > 3400 && scrollPosition <= 4000">
              <v-card-title
                style="font-size: 2rem;
                  font-family: 'Ubuntu', serif !important;
                  padding-bottom: 0;
                  color: #2A384C !important"
                >
                Atlaz Academy has 
              </v-card-title>
              <v-card-text
                style="
                  font-size: 2rem;
                  line-height: 2rem;
                  font-family: 'Ubuntu', serif !important;
                  color: #2A384C !important"
                class="text-decoration-underline"
              >
                Teacher Resource
              </v-card-text>
              <v-card-text
                style="
                  font-size: 1.1rem;
                  line-height: 1.5rem;
                  font-family: 'Nunito', serif !important;
                  color: #2A384C !important"
              >
                A forum for Q&A and an allotted time where students can book a consulting session with a Mentor on materials with which they need further assistance. It truly is making learning process a whole lot more personal.
              </v-card-text>
            </div>

            <v-card-actions>
              <v-btn
                depressed
                class="ml-2"
                width="150"
                height="45"
                style="background-color: #FDBF47;
                  color: #2A384C !important;
                  font-size: 16px !important;"
                >
                Try Atlaz
              </v-btn>
            </v-card-actions>
          </v-card>
        </div> 

      </v-col>

      <v-col xs="12" sm="12" md="6" class="mb-12">

        <iframe
          ref="video-content-1"
          width="389"
          height="219"
          :src="urlVideoContent1Embed"
          title="YouTube video player"
          frameborder="0"
          allow="autoplay; picture-in-picture"
          allowfullscreen
          style="position: absolute; z-index: 1; margin-top: 10%; margin-left: 6%"
        ></iframe>

        <v-img
          :src="require('~/assets/img/key-feature/bg-card-right-1.png')"
          height="500"
          max-width="300"
          class="ml-auto"
        />

      </v-col>

      <v-col xs="12" sm="12" md="6"></v-col>

      <v-col xs="12" sm="12" md="6" class="mb-12">

        <iframe
          ref="video-content-1"
          width="389"
          height="219"
          :src="urlVideoContent2Embed"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="position: absolute; z-index: 1; margin-top: 10%; margin-left: 6%"
        ></iframe>
        
        <v-img
          :src="require('~/assets/img/key-feature/bg-card-right-2.png')"
          height="500"
          max-width="300"
          class="ml-auto"
        />

      </v-col>

      <v-col xs="12" sm="12" md="6"></v-col>

      <v-col xs="12" sm="12" md="6" class="mb-12">

        <iframe
          ref="video-content-1"
          width="389"
          height="219"
          :src="urlVideoContent3Embed"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="position: absolute; z-index: 1; margin-top: 10%; margin-left: 6%"
        ></iframe>

        <v-img
          :src="require('~/assets/img/key-feature/bg-card-right-3.png')"
          height="500"
          max-width="300"
          class="ml-auto"
        />

      </v-col>

      <v-col xs="12" sm="12" md="6"></v-col>

      <v-col xs="12" sm="12" md="6" class="mb-12">

        <iframe
          ref="video-content-1"
          width="389"
          height="219"
          :src="urlVideoContent4Embed"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="position: absolute; z-index: 1; margin-top: 10%; margin-left: 6%"
        ></iframe>
        
        <v-img
          :src="require('~/assets/img/key-feature/bg-card-right-4.png')"
          height="500"
          max-width="300"
          class="ml-auto"
        />

      </v-col>

      <v-col xs="12" sm="12" md="6"></v-col>

      <v-col xs="12" sm="12" md="6" class="mb-12">

        <iframe
          ref="video-content-1"
          width="389"
          height="219"
          :src="urlVideoContent5Embed"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="position: absolute; z-index: 1; margin-top: 10%; margin-left: 6%"
        ></iframe>

        <v-img
          :src="require('~/assets/img/key-feature/bg-card-right-5.png')"
          height="500"
          max-width="300"
          class="ml-auto"
        />

      </v-col>

      <v-col xs="12" sm="12" md="6">
      </v-col>

      <v-col xs="12" sm="12" md="6" class="mb-12">

        <iframe
          ref="video-content-1"
          width="389"
          height="219"
          :src="urlVideoContent6Embed"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="position: absolute; z-index: 1; margin-top: 10%; margin-left: 6%"
        ></iframe>
        
        <v-img
          :src="require('~/assets/img/key-feature/bg-card-right-6.png')"
          height="500"
          max-width="300"
          class="ml-auto"
        />

      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    // Content video 1
    urlVideoContent1: 'https://www.youtube.com/embed/TEpJZIe8W0A',
    urlVideoContent1Embed: 'https://www.youtube.com/embed/TEpJZIe8W0A',
    // Content video 2
    urlVideoContent2: 'https://www.youtube.com/embed/b4lFlGkesjc',
    urlVideoContent2Embed: 'https://www.youtube.com/embed/b4lFlGkesjc',
    // Content video 3
    urlVideoContent3: 'https://www.youtube.com/embed/3N0OHP4DQLI',
    urlVideoContent3Embed: 'https://www.youtube.com/embed/3N0OHP4DQLI',
    // Content video 4
    urlVideoContent4: 'https://www.youtube.com/embed/POq4FT8-g8I',
    urlVideoContent4Embed: 'https://www.youtube.com/embed/POq4FT8-g8I',
    // Content video 5
    urlVideoContent5: 'https://www.youtube.com/embed/_d_kAWQWLGk',
    urlVideoContent5Embed: 'https://www.youtube.com/embed/_d_kAWQWLGk',
    // Content video 5
    urlVideoContent6: 'https://www.youtube.com/embed/btzcwFY9bvQ',
    urlVideoContent6Embed: 'https://www.youtube.com/embed/btzcwFY9bvQ'
  }),

  computed: {
    scrollPosition() {
      return this.$store.getters['helper/scrollPosition']
    }
  },

  watch: {
    scrollPosition: function (val) {
      this.eventVideo(val)
    }
  },

  methods: {
    eventVideo(val) {
      // Content video 1
      if (val >= 700 && val < 1000) {
        this.urlVideoContent1Embed = this.urlVideoContent1 + '?' + 'autoplay=1' + '&' + 'mute=0'
      } else if (val >= 1000 && val <= 1100) {
        this.urlVideoContent1Embed = this.urlVideoContent1
      } else if (val < 700 && val > 600) {
        this.urlVideoContent1Embed = this.urlVideoContent1
        // Content video 2
      } else if (val >= 1200 && val < 1400) {
        this.urlVideoContent2Embed = this.urlVideoContent2 + '?' + 'autoplay=1' + '&' + 'mute=0' 
      } else if (val < 1200 && val > 1100) {
        this.urlVideoContent2Embed = this.urlVideoContent2
      } else if (val >= 1600 && val < 1700) {
        this.urlVideoContent2Embed = this.urlVideoContent2
        // Content video 3
      } else if (val >= 1800 && val < 2100) {
        this.urlVideoContent3Embed = this.urlVideoContent3 + '?' + 'autoplay=1' + '&' + 'mute=0' 
      } else if (val < 1800 && val > 1700) {
        this.urlVideoContent3Embed = this.urlVideoContent3
      } else if (val >= 2200 && val < 2300) {
        this.urlVideoContent3Embed = this.urlVideoContent3
        // Content video 4
      } else if (val >= 2400 && val < 2700) {
        this.urlVideoContent4Embed = this.urlVideoContent4 + '?' + 'autoplay=1' + '&' + 'mute=0' 
      } else if (val < 2400 && val > 2300) {
        this.urlVideoContent4Embed = this.urlVideoContent4
      } else if (val >= 2800 && val < 2900) {
        this.urlVideoContent4Embed = this.urlVideoContent4
        // Content Video 5
      } else if (val >= 3000 && val < 3300) {
        this.urlVideoContent5Embed = this.urlVideoContent5 + '?' + 'autoplay=1' + '&' + 'mute=0' 
      } else if (val < 3000 && val > 2900) {
        this.urlVideoContent5Embed = this.urlVideoContent5
      } else if (val >= 3400 && val < 3500) {
        this.urlVideoContent5Embed = this.urlVideoContent5
        // Content Video 6
      } else if (val >= 3600 && val < 3900) {
        this.urlVideoContent6Embed = this.urlVideoContent6 + '?' + 'autoplay=1' + '&' + 'mute=0' 
      } else if (val < 3600 && val > 3500) {
        this.urlVideoContent6Embed = this.urlVideoContent6
      } else if (val >= 4000 && val < 4100) {
        this.urlVideoContent6Embed = this.urlVideoContent6
      }
    }
  }
}
</script>

<style scoped>
.key-feature-left {
  position: fixed;
  top: 35%;
}
</style>