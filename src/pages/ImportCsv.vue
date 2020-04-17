<template>
  <div>
    <div class="row justify-center">
      <div class="col-12">
        <q-card class="q-mx-xl q-my-md">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Import Data Surat Jalan</div>
            <div class="text-subtitle2">Hati-hati semua data akan di gantikan(clean).</div>
          </q-card-section>

          <q-separator />

          <q-card-section>

            <p class="text-caption">Jangan lupa ceklis "File Has Headers", Oke?</p>
            <vue-csv-import v-model="parseCsv" :map-fields="{
              id: 'id',
              no_surat_jalan: 'no_surat_jalan',
              judul_surat_jalan: 'judul_surat_jalan',
              nama_barang: 'nama_barang',
              nama_customer: 'nama_customer',
              transporter: 'transporter',
              no_do_po: 'no_do_po',
              no_kendaraan: 'no_kendaraan',
              gross: 'gross',
              tare: 'tare',
              netto: 'netto',
              supir: 'supir',
              petugas: 'petugas',
              disabled: 'disabled',
            }"></vue-csv-import>

            <br>

            <q-btn color="primary" @click="sendCsvData" icon="publish" label="Import" />
            <br>
            <br>

            <p class="text-subtitle2">Caranya? Pilih File CSV dan klik "Next", lalu Cocok-kan semua field sesuai dengan namanya...</p>
          </q-card-section>
         
        </q-card>
      </div>
    </div> 
  </div>
</template>

<script >
import { VueCsvImport } from 'vue-csv-import';
export default {
  name: 'PageImportCsv',
  components: { VueCsvImport },
  data() {
    return {
      parseCsv: [],
    }
  },

  methods: {

    showImportSuccess: function() {
      let currentObj = this
      currentObj.$q.notify({
        message: 'Berhasil Import Surat Jalan!',
        icon: 'done_outline',
        color: 'secondary'
      })
    },

    showImportError: function() {
      let currentObj = this
      currentObj.$q.notify({
        message: 'Gagal Import Surat Jalan',
        icon: 'clear',
        color: 'red'
      })
    },

    sendCsvData: function() {
      let currentObj = this
      try {
        localStorage.setItem('suratJalan', JSON.stringify(currentObj.parseCsv))
        currentObj.showImportSuccess()
      } catch(e) {
        currentObj.showImportError()
        console.log(e)
      }
    }
  }
}
</script>
