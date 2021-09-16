<template>
  <v-container style="padding-bottom: 150px">
    <v-card flat color="transparent">
      <v-card-title
        class="justify-center"
        style="font-size: 2.5rem; font-family: 'Nunito', serif; color: #2A384C !important; padding-bottom: 50px; padding-top: 150px"
      >
        Search your location so our team can reach you closer
      </v-card-title>
      <v-text-field
        v-model="searchDataMarketing"
        label="Search location"
        class="mx-4"
        append-icon="mdi-magnify"
      />
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="dataMarketing"
          :items-per-page="5"
          class="elevation"
          :search="searchDataMarketing"
          style="font-size: 1.25rem; font-family: 'Nunito', serif; color: #676767 !important; font-weight: bold"
        >
          <template #[`item.name`]="{ item }">
            <span style="padding-top: 100px;">
              {{ item.name }}
            </span>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    searchDataMarketing: null,
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'City', value: 'city', sortable: false },
      { text: 'Phone', value: 'phone', sortable: false },
      { text: 'Email', value: 'email', sortable: false }
    ],
    dataMarketing: [
      { id: 1, name: 'Marketing_01', city: 'DKI Jakarta', phone: '+62 234 5678 9012', email: 'marketing_01@atlaz.com' },
      { id: 2, name: 'Marketing_02', city: 'Bogor', phone: '+62 234 5678 9012', email: 'marketing_01@atlaz.com' },
      { id: 3, name: 'Marketing_03', city: 'Depok', phone: '+62 234 5678 9012', email: 'marketing_01@atlaz.com' },
      { id: 4, name: 'Marketing_04', city: 'Tangerang', phone: '+62 234 5678 9012', email: 'marketing_01@atlaz.com' },
      { id: 5, name: 'Marketing_05', city: 'Bekasi', phone: '+62 234 5678 9012', email: 'marketing_01@atlaz.com' }
    ]
  })
}
</script>

<style scoped>
.row tr td {
  padding-top: 60px !important;
  cursor: pointer;
}
</style>
