<template>
  <div>
    <div class="row justify-center">
      <div class="col-12">
        <q-card class="q-mx-xl q-my-md">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Data List Surat Jalan Yang Terhapus</div>
            <div class="text-subtitle2">Table Data Surat Jalan Yang Terhapus.</div>
          </q-card-section>

          <q-separator />

          <q-card-section>

            <q-table
              title="Tabel Data Surat Jalan"
              :data="data"
              :columns="columns"
              row-key="id"
              :pagination.sync="pagination"
              :loading="loading"
              :filter="filter"
              @request="onRequest"
              binary-state-sort
              no-data-label="Data Surat Jalan Tidak ditemukan"
            >

              <template v-slot:top-right>
                <q-input dense debounce="300" class="q-mr-md" v-model="search" placeholder="Cari dengan Nomor Surat Jalan?">
                </q-input>

                <q-btn color="primary" @click="searchById" class="q-mr-md" label="Cari"/>
                
                <q-btn color="primary" @click="resetButton" class="q-mr-md" label="Reset Hasil"/>
              </template>

              <template v-slot:header="props">
                <q-tr :props="props">
                  <q-th auto-width />
                  <q-th
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                  >
                    {{ col.label }}
                  </q-th>
                </q-tr>
              </template>

              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td auto-width>
                    <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
                  </q-td>
                  <q-td
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                  >
                    {{ col.value }}
                  </q-td>
                </q-tr>
                <q-tr v-show="props.expand" :props="props">
                  <q-td colspan="100%">
                    <div class="text-left">
                      <div class="row self-center">
                        
                        <q-btn color="red" class="q-mr-md" label="Aktifkan" @click="enableSuratJalan(props.row.id)" icon="publish" />
                      </div>
                    </div>
                  </q-td>
                </q-tr>
              </template>


            </q-table>
          </q-card-section>
         
        </q-card>
      </div>
    </div> 
  </div>
</template>

<script >
export default {
  name: 'PageDataListDeletedSuratJalan',
  data() {
    return {
      data: [],
      list: null,
      // Search Keyword
      search: null,
      filter: '',
      loading: false,
      pagination: {
        sortBy: 'no_surat_jalan',
        descending: false,
        page: 1,
        rowsPerPage: 3,
        rowsNumber: 10
      },
      columns: [
        {
          name: 'no_surat_jalan',
          required: true,
          label: 'Nomor Surat Jalan',
          align: 'left',
          field: row => row.no_surat_jalan,
          format: val => `${val}`,
          sortable: true 
        },
        { 
          name: 'judul_surat_jalan', 
          align: 'center', 
          label: 'Judul Surat Jalan', 
          field: 'judul_surat_jalan', 
           
        },
        { 
          name: 'nama_barang', 
          align: 'center', 
          label: 'Nama Barang', 
          field: 'nama_barang', 
           
        },
        { 
          name: 'nama_customer', 
          align: 'center', 
          label: 'Nama Customer', 
          field: 'nama_customer', 
           
        },
       { 
          name: 'transporter', 
          align: 'center', 
          label: 'Transporter', 
          field: 'transporter', 
           
        },
        { 
          name: 'no_do_po', 
          align: 'center', 
          label: 'No DO/PO', 
          field: 'no_do_po', 
           
        },
        { 
          name: 'no_kendaraan', 
          align: 'center', 
          label: 'No Kendaraan', 
          field: 'no_kendaraan', 
           
        },
        { 
          name: 'gross', 
          align: 'center', 
          label: 'Gross', 
          field: 'gross', 
           
        },
        { 
          name: 'gross_jam', 
          align: 'center', 
          label: '[Gross] Jam di Timbang', 
          field: 'gross_jam', 
           
        },
        { 
          name: 'gross_tgl', 
          align: 'center', 
          label: '[Gross] Tanggal di Timbang', 
          field: 'gross_tgl', 
           
        },
        { 
          name: 'tare', 
          align: 'center', 
          label: 'Tare', 
          field: 'tare', 
           
        },
         { 
          name: 'tare_jam', 
          align: 'center', 
          label: '[Tare] Jam di Timbang', 
          field: 'tare_jam', 
           
        },
        { 
          name: 'tare_tgl', 
          align: 'center', 
          label: '[Tare] Tanggal di Timbang', 
          field: 'tare_tgl', 
           
        },
        { 
          name: 'netto', 
          align: 'center', 
          label: 'Netto', 
          field: 'netto', 
           
        },
        { 
          name: 'supir', 
          align: 'center', 
          label: 'Supir', 
          field: 'supir', 
           
        },
        { 
          name: 'petugas', 
          align: 'center', 
          label: 'Petugas', 
          field: 'petugas', 
           
        },
        { 
          name: 'disabled', 
          align: 'center', 
          label: 'Disabled? (system)', 
          field: 'disabled', 
           
        },

        { 
          name: 'id', 
          align: 'center', 
          label: 'Id (system)', 
          field: 'id', 
           
        },
      ],
    }

  }, // Data

  methods: {
    showMemuatSuratJalanError: function() {
      let currentObj = this
      currentObj.$q.notify({
        message: 'Gagal Memuat Surat Jalan',
        icon: 'clear',
        color: 'red'
      })
    },
    getSuratJalan: function() {
      let currentObj = this

      try {
        if (localStorage.getItem('suratJalan') != null) {
          currentObj.list = JSON.parse(localStorage.getItem('suratJalan')).filter(suratJalan => suratJalan.disabled === "true")  
        } else {
          currentObj.list = [] 
        }

      } catch (e) {
        currentObj.showMemuatSuratJalanError()
        console.log(e)
      }
    },

    /**
      * Soft Delete Feature
      */
    showEnableSuratJalanSuccess: function() {
      let currentObj = this
      currentObj.$q.notify({
        message: 'Berhasil Mengaktifkan Surat Jalan!',
        icon: 'done_outline',
        color: 'secondary'
      })
    },

    showEnableSuratJalanError: function() {
      let currentObj = this
      currentObj.$q.notify({
        message: 'Gagal Mengaktifkan Surat Jalan',
        icon: 'clear',
        color: 'red'
      })
    },

    enableSuratJalan: function(id) {
      let currentObj = this
        
      

      try {
        currentObj.settingsLoading = true

        var existing = JSON.parse(localStorage.getItem('suratJalan'));

        existing[id].disabled = "false"
               

        localStorage.setItem('suratJalan', JSON.stringify(existing));

        currentObj.showEnableSuratJalanSuccess()
        currentObj.createSuratLoading = false
        currentObj.getSuratJalan()
        currentObj.onRequest({
          pagination: this.pagination,
          filter: undefined
        })
      } catch (e) {
        console.log(e)
        // data wasn't successfully saved due to
        // a Web Storage API error
        currentObj.showEnableSuratJalanError()
        currentObj.createSuratLoading = false
      }
    },

    onRequest (props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination
      const filter = props.filter

      this.loading = true

      // emulate server
      setTimeout(() => {
        // update rowsCount with appropriate value
        this.pagination.rowsNumber = this.getRowsNumberCount(filter)

        // get all rows if "All" (0) is selected
        const fetchCount = rowsPerPage === 0 ? this.pagination.rowsNumber : rowsPerPage

        // calculate starting row of data
        const startRow = (page - 1) * rowsPerPage

        // fetch data from "server"
        const returnedData = this.fetchFromServer(startRow, fetchCount, filter, sortBy, descending)

        // clear out existing data and add new
        this.data.splice(0, this.data.length, ...returnedData)

        // don't forget to update local pagination object
        this.pagination.page = page
        this.pagination.rowsPerPage = rowsPerPage
        this.pagination.sortBy = sortBy
        this.pagination.descending = descending

        // ...and turn of loading indicator
        this.loading = false
      }, 1500)
    },

    // emulate ajax call
    // SELECT * FROM ... WHERE...LIMIT...
    fetchFromServer (startRow, count, filter, sortBy, descending) {
      const data = filter
        ? this.list.filter(row => row.name.includes(filter))
        : this.list.slice()

      // handle sortBy
      if (sortBy) {
        const sortFn = sortBy === 'desc'
          ? (descending
            ? (a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0)
            : (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
          )
          : (descending
            ? (a, b) => (parseFloat(b[sortBy]) - parseFloat(a[sortBy]))
            : (a, b) => (parseFloat(a[sortBy]) - parseFloat(b[sortBy]))
          )
        data.sort(sortFn)
      }

      return data.slice(startRow, startRow + count)
    },

    // emulate 'SELECT count(*) FROM ...WHERE...'
    getRowsNumberCount (filter) {
      if (!filter) {
        return this.list.length
      }
      let count = 0
      this.list.forEach((treat) => {
        if (treat.name.includes(filter)) {
          ++count
        }
      })
      return count
    },

    searchById: function() {
      let currentObj = this

      if (currentObj.search == null) {
        currentObj.list = JSON.parse(localStorage.getItem('suratJalan')).filter(suratJalan => suratJalan.disabled === "true")
      } else {
        currentObj.list = JSON.parse(localStorage.getItem('suratJalan')).filter(suratJalan => suratJalan.disabled === "true" && suratJalan.no_surat_jalan === JSON.parse(currentObj.search))
      }

      currentObj.onRequest({
        pagination: this.pagination,
        filter: undefined
      })

    },

    resetButton: function() {
      let currentObj = this
      currentObj.list = JSON.parse(localStorage.getItem('suratJalan')).filter(suratJalan => suratJalan.disabled === "true")
      currentObj.onRequest({
        pagination: this.pagination,
        filter: undefined
      })
    }
  }, // methods

  mounted: function() {
    let currentObj = this
    currentObj.getSuratJalan()

    // get initial data from server (1st page)
    currentObj.onRequest({
      pagination: this.pagination,
      filter: undefined
    })

  }, // Mounted
}
</script>
