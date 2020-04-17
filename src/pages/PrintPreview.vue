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

            <table id="suratJalan" align="center" style="width:100%; height: 50%">
              <tr>
                <td colspan="3">
                  <p style="font-size:12px">
                    <b>{{ data_perusahaan.nama_perusahaan }}</b>
                    <br>
                    {{ data_perusahaan.alamat_perusahaan }}
                    <br>
                    {{ data_perusahaan.kelurahan }}, {{ data_perusahaan.kecamatan }}
                    <br>
                    {{ data_perusahaan.kota}}
                    <br>
                    Telp: {{ data_perusahaan.no_telp_perusahaan }} Fax: {{ data_perusahaan.no_fax_perusahaan}}
                  </p>
                </td>
              </tr>
              
              <tr >
                <td colspan="3" >
                  <p align="center" style="font-size:14px"><b>{{ judul_surat_jalan.toUpperCase() }}</b></p>
                  <p align="right" style="font-size:12px">No Surat Jalan : {{ no_surat_jalan }}</p>
                  <hr>
                </td>
              </tr>

              <tr>
                <td width="8%">
                  <p style="font-size:12px">
                    No. Kendaraan
                    <br>
                    Nama Barang
                    <br>
                    Customer
                    <br>
                    Transporter
                    <br>
                    Nomor DO/PO
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
                    {{ no_kendaraan }}
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
              </tr>

              <tr>
                <td>
                  <p style="font-size:12px">
                    <b>Netto</b>

                  </p>
                </td>

                <td>
                  <p style="font-size:12px">
                    <b>:</b>
                    
                  </p>
                </td>

                <td>
                  <p style="font-size:12px">
                    <b>{{ netto }} kg</b>
                    
                  </p>
                </td>
              </tr>
              
              <tr >
                <td colspan="3" >
                  <hr>
                </td>
              </tr>



              <tr>
                <td colspan="2" width="15%">
                  <p align="center" style="font-size:12px">
                    Petugas
                    <br>
                    <br>
                    <br>
                    {{ petugas }}                   
                  </p>
                </td>
                <td width="15%">
                  <p align="center" style="font-size:12px">
                    Pengemudi
                    <br>
                    <br>
                    <br>
                    {{ supir }}
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
      tare:  null,
      netto: null,
      supir: null,
      petugas: null,
      id_surat: null,
    }
  },

  methods: {
    getDataPerusahaan: function() {
      let currentObj = this
      currentObj.data_perusahaan = JSON.parse(localStorage.getItem('settings'))
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
      currentObj.tare = existing[id].tare 
      currentObj.netto = existing[id].netto 
      currentObj.supir = existing[id].supir 
      currentObj.petugas = existing[id].petugas
      currentObj.id_surat = existing[id].id
      
    },
      
    print: function() {
      const d = new Printd()
      d.print( document.getElementById('suratJalan') )
    }

  },

  mounted: function() {
    let currentObj = this
    currentObj.getDataPerusahaan()
    currentObj.getDataSuratJalan()
  }
}
</script>
