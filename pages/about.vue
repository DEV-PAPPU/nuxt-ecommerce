<template>
  <div>
    <b-row class="">
      <b-col lg="6" class="">
        <b-form-group label="Sort" label-for="sort-by-select" label-cols-sm="3" label-align-sm="right" label-size="sm"
          class="mb-0" v-slot="{ ariaDescribedby }">
          <b-input-group size="sm">
            <b-form-select id="sort-by-select" v-model="sortBy" :options="sortOptions"
              :aria-describedby="ariaDescribedby" class="w-75">
              <template #first>
                <option value="">-- Select --</option>
              </template>
            </b-form-select>

            <b-form-select v-model="sortDesc" :disabled="!sortBy" :aria-describedby="ariaDescribedby" size="sm"
              class="w-25">
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group label="Filter" label-for="filter-input" label-cols-sm="3" label-align-sm="right" label-size="sm"
          class="mb-0">
          <b-input-group size="sm">
            <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to Search"></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-table striped hover :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage"
      :filter="filter" :filter-included-fields="filterOn" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection" stacked="md" show-empty small @filtered="onFiltered">
      <template #cell(action)="data">
        <div class="d-flex">
          <button @click="edit(data.item)" class="btn btn-primary btn-md mr-1 mb-2">Edit</button>
          <button @click="edit(data.item)" class="btn btn-primary btn-md mr-1 mb-2">Delete</button>
        </div>
      </template>
    </b-table>

    <!-- pagination -->
    <b-row class="d-flex">
      <b-col lg="6">
        <b-col sm="5" md="6" class="my-1">
          <b-form-group label="Per page" label-for="per-page-select" label-cols-sm="6" label-cols-md="4"
            label-cols-lg="3" label-align-sm="right" label-size="sm" class="mb-0">
            <b-form-select id="per-page-select" v-model="perPage" :options="pageOptions" size="sm"></b-form-select>
          </b-form-group>
        </b-col>
      </b-col>
      <b-col lg="6">
        <div>
          <!-- <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" first-number last-number
            prev-class="prev-item" next-class="next-item" class="mb-0">
            <template #prev-text>
              <feather-icon icon="ChevronLeftIcon" size="18" />
            </template>
            <template #next-text>
              <feather-icon icon="ChevronRightIcon" size="18" />
            </template>
          </b-pagination> -->
        </div>
        <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="fill" size="sm"
          class="my-0">
        </b-pagination>
      </b-col>
    </b-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // Note 'isActive' is left out and will not appear in the rendered table
        fields: [
          {
            key: 'id',
            sortable: true
          },
          {
            key: 'title',
            sortable: false
          },
          {
            key: 'price',
            label: 'price',
            sortable: true,
          },
          {
            key: 'created_at',
            label: 'Date',
            sortable: true,
          },
          "action"
        ],
        items: [],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
      }
    },

      created(){
    this.loadProduct();
  },

    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },

  methods: {
    
    async loadProduct() {
        try {
               this.$axios.get('shop').then(res =>{
                   console.log(res);
                   this.items = res.data
                   this.totalRows = res.data.length
               })
             } 

            catch (err) {
                console.log(err);
                this.$toast.error({
                    title: 'Error!',
                    message: 'Someting is wrong!',
                });
            }
     
    },

    edit(product){
      const item = this.items.find(ele => ele.id === product.id)
      console.log(product)
    }
  }
  }
</script>