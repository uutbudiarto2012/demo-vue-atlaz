<template>
  <v-container
    style="padding: 10% 3% 10% 3%"
  >
    <v-row justify="center">
      <v-col xs="12" sm="12" md="11">
        <v-expansion-panels
          flat
        >
          <v-expansion-panel
            v-for="(item,i) in 5"
            :key="i"
            style="color: #2A384C !important"
          >
            <v-divider v-if="i === 0 || i === 2 || i === 4"/>

            <!-- Header -->
            <v-expansion-panel-header
              v-if="i === 0"
              style="font-family: 'Nunito', serif; font-size: 1.5rem; padding: 30px 0 30px 0 !important"
              class="font-weight-bold"
            >
              Why atlaz
            </v-expansion-panel-header>

            <v-expansion-panel-header
              v-if="i === 1"
              style="font-family: 'Nunito', serif; font-size: 1.5rem; padding: 30px 0 30px 0 !important"
              class="font-weight-bold"
            >
              What separates Atlaz from the competition?
            </v-expansion-panel-header>

            <v-expansion-panel-header
              v-if="i === 2"
              style="font-family: 'Nunito', serif; font-size: 1.5rem; padding: 30px 0 30px 0 !important"
              class="font-weight-bold"
            >
              What curriculum does Atlaz implement?
            </v-expansion-panel-header>

            <v-expansion-panel-header
              v-if="i === 3"
              style="font-family: 'Nunito', serif; font-size: 1.5rem; padding: 30px 0 30px 0 !important"
              class="font-weight-bold"
            >
              Who is behin Atlaz learning content?
            </v-expansion-panel-header>

            <v-expansion-panel-header
              v-if="i === 4"
              style="font-family: 'Nunito', serif; font-size: 1.5rem; padding: 30px 0 30px 0 !important"
              class="font-weight-bold"
            >
              Our school is interested in purchasing Atlaz books. Does Atlaz offer school partnership programs?
            </v-expansion-panel-header>

            <!-- Content -->
            <v-expansion-panel-content
              id="innerExPan"
              v-if="i === 0"
              style="font-size: 1.25rem; font-family: 'Nunito', serif; color: #676767 !important;"
            >
              Atlaz is an English learning platform aimed at school students from elementary, junior high to high school levels. The learning facilities offered are in the form of textbooks and supplements in online content found on the LMS (learning management system) on the website www.hiatlaz.com.
            </v-expansion-panel-content>

            <v-expansion-panel-content
              v-if="i === 1"
              style="font-size: 1.25rem; font-family: 'Nunito', serif; color: #676767 !important;"
            >
              The learning materials and methods offered by Atlaz are fresher and out-of-the-box. By adopting online learning, students can access learning content anywhere and anytime. The standards applied are also adapted to international English which will later be used in everyday life, so students will learn what they will actually use in their life.
            </v-expansion-panel-content>

            <v-expansion-panel-content
              v-if="i === 2"
              style="font-size: 1.25rem; font-family: 'Nunito', serif; color: #676767 !important;"
            >
              Atlaz uses the latest curriculum (K-13 revised 2017) with the concept of the highest-order thinking skills (HOTS), which is designed to support productive and communicative competencies, as well as the ability to collaborate.
            </v-expansion-panel-content>

            <v-expansion-panel-content
              v-if="i === 3"
              style="font-size: 1.25rem; font-family: 'Nunito', serif; color: #676767 !important;"
            >
              All Atlaz learning materials were crafted by a team consisting of seasoned professional English teachers of various teaching experiences, creative content writers, and an eagle-eyed editor.
            </v-expansion-panel-content>

            <v-expansion-panel-content
              v-if="i === 4"
              style="font-size: 1.25rem; font-family: 'Nunito', serif; color: #676767 !important;"
            >
              Absolutely! Please sign up through register OR contact us at hi@hiatlaz.com and we will get back to you soon.
            </v-expansion-panel-content>

            <v-divider v-if="i === 0 || i === 2 || i === 4"/>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
#innerExPan > * {
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 50px;
}

.v-expansion-panel-content__wrap {
  background-color: red !important;
}
</style>