<template>
  <div>
    SheepTable

    <v-divider/>
    <v-data-table
        :headers="headers"
        :items="response.data"
        :loading="loading"
        :footer-props="{
          'items-per-page-options': [10,20,50],
          'pagination': pagination
        }"
        disable-sort
        class="elevation-2"
    >
      <template v-slot:item="row">
        <tr>
          <td>
            <v-btn
                icon
                @click="goDetailPage(row.item.earringNumber)"
            >
              <v-icon small>
                small
                mdi-plus
              </v-icon>
            </v-btn>

          </td>
          <td>{{ row.item.motherEarringNumber }}</td>
          <td>{{ row.item.race }}</td>
          <td>{{ row.item.species }}</td>
          <td>{{ row.item.motherNumberOfBirth }}</td>
          <td>{{ row.item.earringNumber }}</td>

        </tr>
      </template>
    </v-data-table>

  </div>
</template>

<script>
import {mapGetters} from "vuex";
import sheepService from "@/services/sheep.service";

export default {
  name: 'SheepTable',

  data() {
    return {
      headers: [
        {text: 'Detay', align: 'start'},
        {text: 'Anne Küpe Numarası', align: 'start'},
        {text: 'Koyunun Irkı', align: 'start'},
        {text: 'Tür', align: 'start'},
        {text: 'Annenin Kaçıncı Doğumu', align: 'start'},
        {text: 'Kuzu Küpe Numarası', align: 'start'},
      ],
      response: {},
      params: {
        page: 1,
        size: 10,
        earringNumber: '',
        motherEarringNumber: '',
        gender: '',
        status: '',
        barn: '',
        order: '',
      },
      pagination: {
        'page': 1,
        'itemsPerPage': 10,
        'pageStart': 0,
        'pageStop': 100,
        'pageCount': 100,
        'itemsLength': 100
      }
    }

  },
  computed: {
    ...mapGetters({
      loading: 'utils/getLoading',
    }),
  },
  async created() {
    await this.getSheep()
  },
  methods: {
    async getSheep() {
      this.response = await sheepService.get('pagination/mother-not-null?page=0&size=10&earringNumber=&motherEarringNumber=&gender=&barn=&status=&order=')
    },
    goDetailPage(earringNumber) {
      this.$router.push('/sheep-detail/' + earringNumber)
    }
  }
}
</script>
