<template>
  <div>
    <div class="row justify-center">
      <div class="col-12">
        <q-card class="q-mx-xl q-my-md">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Print (Cetak) Surat Jalan</div>
            <div class="text-subtitle2">Cetak Surat Jalan Disini.</div>
          </q-card-section>

          <q-separator />

          <q-card-section>

            <table id="suratJalan" align="center" style="font-family=sans-serif; width:100%; height: 50%">
              <tr>
                <td colspan="5">
                  <p style="font-size:12px">
                    <b>{{ nama_perusahaan }}</b>
                    <br>
                    {{ alamat_perusahaan }}
                    <br>
                    {{ kelurahan }}, {{ kecamatan }}
                    <br>
                    {{ kota}}
                    <br>
                    Telp: {{ no_telp_perusahaan }} Fax: {{ no_fax_perusahaan}}
                  </p>
                </td>
              </tr>
              
              <tr >
                <td colspan="5" style="border-bottom: thin solid">
                  <p align="center" style="font-size:16px; margin: 0 0 0px;">{{ judul_surat_jalan.toUpperCase() }}</p>
                  <p align="right" style="font-size:12px; margin: 0 0 0px;">No. Tiket : {{ no_surat_jalan }}</p>

                </td>
              </tr>

              <tr>
                <td width="8%">
                  <p style="font-size:12px">
                    No. Kendaraan
                    <br>
                    Nama Barang
                    <br>
                    Customer/Supplier
                    <br>
                    Transporter
                    <br>
                    No. DO/PO
                    <br>
                    Gross
                    <br>
                    Tare

                  </p>
                </td>

                <td width="2%">
                  <p style="font-size:12px">
                    :
                    <br>
                    :
                    <br>
                    :
                    <br>
                    :
                    <br>
                    :
                    <br>
                    :
                    <br>
                    :
                    <br>
                  </p>
                </td>

                <td>
                  <p style="font-size:12px">
                    <b>{{ no_kendaraan }}</b>
                    <br>
                    {{ nama_barang }}
                    <br>
                    {{ nama_customer }}
                    <br>
                    {{ transporter }}
                    <br>
                    {{ no_do_po }}
                    <br>
                    {{ gross }} kg
                    <br>
                    {{ tare }} kg
                  </p>
                </td>

                <td>
                  <p style="font-size:12px">
                    
                    <br>
                    
                    <br>
                   
                    <br>
                    
                    <br>
                    
                    <br>
                    Jam {{gross_jam}}
                    <br>
                    Jam {{tare_jam}}
                  </p>
                </td>

                <td>
                  <p style="font-size:12px">
                    
                    <br>
                    
                    <br>
                   
                    <br>
                    
                    <br>
                    
                    <br>
                    Tanggal {{gross_tgl}}
                    <br>
                    Tanggal {{tare_tgl}}
                  </p>
                </td>
              </tr>

              <tr>
                <td>
                  <p style="font-size:12px; margin: 0 0 3px;">
                    <b>Netto</b>

                  </p>
                </td>

                <td>
                  <p style="font-size:12px; margin: 0 0 3px;">
                    <b>:</b>
                    
                  </p>
                </td>

                <td colspan="3">
                  <p style="font-size:12px; margin: 0 0 3px;">
                    <b>{{ netto }} kg</b>
                    
                  </p>
                </td>
              </tr>
              
              <tr >
                <td colspan="5" style="border-top: thin solid; border-bottom: thin solid" >
                  
                </td>
              </tr>



              <tr>
                <td colspan="2" width="15%">
                  <p align="center" style="font-size:12px; margin-top: 8px;">
                    Petugas
                    <br>
                    <br>
                    <br>
                    <b>{{ petugas }}</b>                   
                  </p>
                </td>
                <td colspan="3" width="15%">
                  <p align="center" style="font-size:12px; margin-top: 8px;">
                    Pengemudi
                    <br>
                    <br>
                    <br>
                    <b>{{ supir }}</b>
                  </p>
                </td>

              </tr>

            </table>
            
           
          </q-card-section>

          <br>
          <br>
          <q-separator black />

          <q-card-actions align="around">
            <q-btn color="green" icon="print" @click="print" label="Print (Cetak)" />
            <q-btn color="primary" icon="edit" :to="{ path: 'edit', query: {id: id_surat} }" label="Edit" />
          </q-card-actions>
         
        </q-card>
      </div>
    </div> 
  </div>
</template>

<script >
import { Printd } from 'printd'
const cssText = `
  p {
    color: black;
    font-family: sans-serif;
  }
`

export default {
  name: 'PagePrintPreview',

  data() {
    return {
      data_perusahaan: null,
      data_surat_jalan: null,
      no_surat_jalan: null,
      judul_surat_jalan: null,
      nama_barang: null,
      nama_customer: null,
      transporter: null,
      no_do_po: null,
      no_kendaraan: null,
      gross: null,
      gross_jam: null,
      gross_tgl: null,
      tare:  null,
      tare_jam:  null,
      tare_tgl:  null,
      netto: null,
      supir: null,
      petugas: null,
      id_surat: null,

      // Data PT
      nama_perusahaan: null,
      alamat_perusahaan: null,
      kota: null,
      kecamatan: null,
      kelurahan: null,
      no_telp_perusahaan: null,
      no_fax_perusahaan: null,

    }
  },

  methods: {
    getDataPerusahaan: function() {
      let currentObj = this

      
      var data_pt = JSON.parse(localStorage.getItem('settings'))

      if(data_pt == null) {
        currentObj.showDataPtError()
      } else {
        currentObj.nama_perusahaan = data_pt.nama_perusahaan
        currentObj.alamat_perusahaan = data_pt.alamat_perusahaan
        currentObj.kota = data_pt.kota
        currentObj.kecamatan = data_pt.kecamatan
        currentObj.kelurahan = data_pt.kelurahan
        currentObj.no_telp_perusahaan =  data_pt.no_telp_perusahaan
        currentObj.no_fax_perusahaan = data_pt.no_fax_perusahaan
      }
    },

    getDataSuratJalan: function() {
      let currentObj = this

      let existing = JSON.parse(localStorage.getItem('suratJalan'));
      let id = currentObj.$route.query.id

      currentObj.no_surat_jalan = existing[id].no_surat_jalan 
      currentObj.judul_surat_jalan = existing[id].judul_surat_jalan 
      currentObj.nama_barang = existing[id].nama_barang 
      currentObj.nama_customer = existing[id].nama_customer 
      currentObj.transporter = existing[id].transporter 
      currentObj.no_do_po = existing[id].no_do_po 
      currentObj.no_kendaraan = existing[id].no_kendaraan 
      currentObj.gross = existing[id].gross 
      currentObj.gross_jam = existing[id].gross_jam 
      currentObj.gross_tgl = existing[id].gross_tgl 
      currentObj.tare = existing[id].tare 
      currentObj.tare_jam = existing[id].tare_jam 
      currentObj.tare_tgl = existing[id].tare_tgl 
      currentObj.netto = existing[id].netto 
      currentObj.supir = existing[id].supir 
      currentObj.petugas = existing[id].petugas
      currentObj.id_surat = existing[id].id
      
    },
      
    print: function() {
      let currentObj = this

      var data_pt = JSON.parse(localStorage.getItem('settings'))

      if(data_pt == null) {
        currentObj.showDataPtError()
      } else {
        const d = new Printd()
        d.print( document.getElementById('suratJalan'), [ cssText ] )
      }
      
    },

    showDataPtError: function() {
      let currentObj = this
      currentObj.$q.notify({
        message: 'Tidak Bisa Print Dulu, Pastikan Anda Telah Setting Data Perusahaan.',
        icon: 'clear',
        color: 'red'
      })
    },

  },

  mounted: function() {
    let currentObj = this
    currentObj.getDataPerusahaan()
    currentObj.getDataSuratJalan()
  }
}
</script>
