<template>
  <div>
    <div class="row justify-center">
      <div class="col-12">
        <q-card class="q-mx-xl q-my-md">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Data List Surat Jalan</div>
            <div class="text-subtitle2">Table Data Surat Jalan.</div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <q-table

              title="Surat Jalan Yang Aktif"
              :data="list"
              :columns="columns"
              row-key="no_surat_jalan"
              :pagination.sync="pagination"
            >
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
                        
                          <q-btn color="primary"  label="Edit" :to="{ path: 'edit', query: {id: props.row.id} }" icon="edit" />
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
  name: 'PageDataListSuratJalan',

  data () {
    return {
      list: null,
      pagination: {
        sortBy: 'no_surat_jalan',
        descending: false,
        page: 2,
        rowsPerPage: 10,
        rowsNumber: null,
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
          sortable: true 
        },
        { 
          name: 'nama_customer', 
          align: 'center', 
          label: 'Nama Customer', 
          field: 'nama_customer', 
          sortable: true 
        },
       { 
          name: 'transporter', 
          align: 'center', 
          label: 'Transporter', 
          field: 'transporter', 
          sortable: true 
        },
        { 
          name: 'no_do_po', 
          align: 'center', 
          label: 'No DO/PO', 
          field: 'no_do_po', 
          sortable: true 
        },
        { 
          name: 'no_kendaraan', 
          align: 'center', 
          label: 'No Kendaraan', 
          field: 'no_kendaraan', 
          sortable: true 
        },
        { 
          name: 'gross', 
          align: 'center', 
          label: 'Gross', 
          field: 'gross', 
          sortable: true 
        },
        { 
          name: 'tare', 
          align: 'center', 
          label: 'Tare', 
          field: 'tare', 
          sortable: true 
        },
        { 
          name: 'netto', 
          align: 'center', 
          label: 'Netto', 
          field: 'netto', 
          sortable: true 
        },
        { 
          name: 'supir', 
          align: 'center', 
          label: 'Supir', 
          field: 'supir', 
          sortable: true 
        },
        { 
          name: 'petugas', 
          align: 'center', 
          label: 'Petugas', 
          field: 'petugas', 
          sortable: true 
        },
      ],

    }
  }, // data

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
          currentObj.list = JSON.parse(localStorage.getItem('suratJalan')).filter(suratJalan => suratJalan.disabled === false)
        } else {
          currentObj.list = [] 
        }

        currentObj.pagination.rowsNumber = currentObj.list.length
      } catch (e) {
        currentObj.showMemuatSuratJalanError()
        console.log(e)
      }
    },

  }, // methods

  mounted: function() {
    let currentObj = this
    currentObj.getSuratJalan()
  }, // Mounted
}

</script>
