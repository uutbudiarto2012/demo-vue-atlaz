<template>
  <v-row justify="center" style="">
      <v-col xs="12" sm="12" md="6" align="center" style="padding: 0 0 0 0">
        <v-img
          :src="require('~/assets/img/faq/cta-footer/1.png')"
        />
      </v-col>

      <v-col xs="12" sm="12" md="6" align="center"
        style="padding: 180px 0 0 0; background-color: #F4E8CA;"
      >
        <v-card width="486" flat color="transparent">
          <v-card-text
            style="font-family: 'Nunito', serif; color: #2A384C !important; font-size: 1.75rem; line-height: 2rem"
            class="font-weight-medium"
          >
            Still, confused? Email our Marketing Team with any other questions or feedback you have
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              depressed
              width="150"
              height="45"
              style="background-color: #FDBF47;
                color: #2A384C !important;
                font-size: 16px !important;"
              >
              Contact us
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
</template>