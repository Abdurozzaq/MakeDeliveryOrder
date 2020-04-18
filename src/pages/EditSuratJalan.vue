<template>
  <div>

    <div class="row justify-center">
      <div class="col-12">
        <q-card class="q-mx-xl q-my-md">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Edit Surat Jalan</div>
            <div class="text-subtitle2">Edit surat jalan disini.</div>
          </q-card-section>

          <q-separator />

          <q-form @submit="editSuratJalan">
            <q-card-section>
              <div class="row">
                <div class="col-8">
                  <q-input  
                    class="q-mr-sm"
                    label="Judul Surat Jalan" 
                    hint="Required"
                    :readonly="true"
                    placeholder="Masukan Judul Surat Jalan." 
                    type="text"
                    v-model.trim="judul_surat_jalan"
                    @input="$v.judul_surat_jalan.$touch()"
                    :rules="[
                        val => $v.judul_surat_jalan.required || 'Judul surat jalan harus di isi.',
                    ]"
                  />
                </div>
                <div class="col-4">
                  <q-input  
                    label="No. Surat Jalan" 
                    hint="Required | Otomatis di isi oleh sistem"
                    placeholder="Masukan No. Surat Jalan." 
                    type="text"
                    :readonly="true"
                    v-model.trim="no_surat_jalan"
                    @input="$v.no_surat_jalan.$touch()"
                    :rules="[
                        val => $v.no_surat_jalan.required || 'No. surat jalan harus di isi.',
                    ]"
                  />
                </div>
              </div>

              <br>


              <br>

              <div class="row">
                <div class="col-12 col-md-6">

                  <div>
                    <q-input  
                      class="q-mr-lg"
                      outlined
                      label="Nama Barang" 
                      hint="Required"
                      placeholder="Masukan Nama Barang." 
                      type="text"
                      v-model.trim="nama_barang"
                      @input="$v.nama_barang.$touch()"
                      :rules="[
                          val => $v.nama_barang.required || 'Nama barang harus di isi.',
                      ]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="inbox" />
                      </template>
                    </q-input>

                    <br> 

                    <q-input  
                      class="q-mr-lg"
                      outlined
                      label="Nama Customer" 
                      hint="Required"
                      placeholder="Masukan Nama Customer." 
                      type="text"
                      v-model.trim="nama_customer"
                      @input="$v.nama_customer.$touch()"
                      :rules="[
                          val => $v.nama_customer.required || 'Nama Customer harus di isi.',
                      ]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="face" />
                      </template>
                    </q-input>
                  
                    <br>

                    <q-input  
                      class="q-mr-lg"
                      outlined
                      label="Transporter" 
                      hint="Required"
                      placeholder="Masukan Transporter." 
                      type="text"
                      v-model.trim="transporter"
                      @input="$v.transporter.$touch()"
                      :rules="[
                          val => $v.transporter.required || 'Transporter harus di isi.',
                      ]"
                    />

                    <br>

                    <q-input  
                      class="q-mr-lg"
                      outlined
                      label="No. DO/PO" 
                      hint="Required"
                      placeholder="Masukan No. DO/PO." 
                      type="text"
                      v-model.trim="no_do_po"
                      @input="$v.no_do_po.$touch()"
                      :rules="[
                          val => $v.no_do_po.required || 'No. DO/PO harus di isi.',
                      ]"
                    />

                    <br>

                    <q-input  
                      class="q-mr-lg"
                      outlined
                      label="No Kendaraan" 
                      hint="Required"
                      placeholder="Masukan No Kendaraan." 
                      type="text"
                      v-model.trim="no_kendaraan"
                      @input="$v.no_kendaraan.$touch()"
                      :rules="[
                          val => $v.no_kendaraan.required || 'No Kendaraan harus di isi.',
                      ]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="local_shipping" />
                      </template>
                    </q-input>
                  
                  </div>

                </div>

                <div class="col-12 col-md-6 ">

                  <div>
                    <q-input  
                      class="q-mr-sm"
                      outlined
                      label="Gross" 
                      hint="Required | Satuan Kilogram"
                      placeholder="Masukan Gross Barang." 
                      type="text"
                      v-model.trim="gross"
                      @input="$v.gross.$touch()"
                      :rules="[
                          val => $v.gross.required || 'Gross harus di isi.',
                      ]"
                    />

                    <br>
                    <div class="row">
                      <div class="col-6">
                        <q-input  
                        
                          class="q-mr-sm"
                          outlined
                          label="[Gross] Jam di Timbang" 
                          hint="Required | Contoh: 13:30"
                          mask="##:##"
                          placeholder="Masukan Jam dimana Gross di Timbang" 
                          type="text"
                          v-model.trim="gross_jam"
                          @input="$v.gross_jam.$touch()"
                          :rules="[
                              val => $v.gross_jam.required || 'Jam Gross di Timbang harus di isi.',
                          ]"
                        />
                      </div>

                      <div class="col-6">
                        <q-input 
                          outlined
                          label="[Gross] Tanggal di Timbang" 
                          hint="Required | Format: DD/MM/YYYY"
                          mask="##/##/####"
                          placeholder="Masukan Tanggal Gross di Timbang" 
                          type="text"
                          v-model.trim="gross_tgl"
                          @input="$v.gross_tgl.$touch()"
                          :rules="[
                              val => $v.gross_tgl.required || 'Tanggal Gross di Timbang harus di isi.',
                          ]"
                        />
                      </div>
                    </div>
                    
                    <br>

                    <q-input  
                      class="q-mr-sm"
                      outlined
                      label="Tare" 
                      hint="Required | Satuan Kilogram"
                      placeholder="Masukan Tare Barang." 
                      type="text"
                      v-model.trim="tare"
                      @input="$v.tare.$touch()"
                      :rules="[
                          val => $v.tare.required || 'Tare harus di isi.',
                      ]"
                    />
                    <br>

                    <div class="row">
                      <div class="col-6">
                        <q-input  
                          class="q-mr-sm"
                          outlined
                          label="[Tare] Jam di Timbang" 
                          hint="Required | Contoh: 13:30"
                          mask="##:##"
                          placeholder="Masukan Jam dimana Tare di Timbang" 
                          type="text"
                          v-model.trim="tare_jam"
                          @input="$v.tare_jam.$touch()"
                          :rules="[
                              val => $v.tare_jam.required || 'Jam Tare di Timbang harus di isi.',
                          ]"
                        />
                      </div>

                      <div class="col-6">
                        <q-input 
                          outlined
                          label="[Tare] Tanggal di Timbang" 
                          hint="Required | Format: DD/MM/YYYY"
                          mask="##/##/####"
                          placeholder="Masukan Tanggal Tare di Timbang" 
                          type="text"
                          v-model.trim="tare_tgl"
                          @input="$v.tare_tgl.$touch()"
                          :rules="[
                              val => $v.tare_tgl.required || 'Tanggal Tare di Timbang harus di isi.',
                          ]"
                        />
                      </div>
                    </div>

                    <br>

                    <q-input  
                      class="q-mr-sm"
                      outlined
                      label="Netto" 
                      hint="Required | Satuan Kilogram"
                      placeholder="Masukan Netto Barang Dalam kg." 
                      type="text"
                      v-model.trim="netto"
                      @input="$v.netto.$touch()"
                      :rules="[
                          val => $v.netto.required || 'Netto harus di isi.',
                      ]"
                    />
                  </div>

                  <br>

                  <div class="row">
                    <div class="col-6">
                      <q-input  
                        class="q-mr-sm"
                        label="Supir" 
                        hint="Required"
                        placeholder="Masukan Supir." 
                        type="text"
                        v-model.trim="supir"
                        @input="$v.supir.$touch()"
                        :rules="[
                            val => $v.supir.required || 'Supir harus di isi.',
                        ]"
                      />
                    </div>
                    <div class="col-6">
                      <q-input  
                        label="Petugas" 
                        hint="Required"
                        placeholder="Masukan Petugas" 
                        type="text"
                        v-model.trim="petugas"
                        @input="$v.petugas.$touch()"
                        :rules="[
                            val => $v.petugas.required || 'Petugas harus di isi.',
                        ]"
                      />
                    </div>
                  </div>
                  
                </div>

              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions align="right">
              <q-btn type="submit" color="primary">Send</q-btn>
            </q-card-actions>
          </q-form>
          
          <q-inner-loading :showing="createSuratLoading">
            <q-spinner-dots
              color="primary"
              size="4em"
            />
          </q-inner-loading>
        </q-card>
      </div>
    </div>  

  </div>
</template>

<script>

import { required } from 'vuelidate/lib/validators';
export default {
  name: 'PageeditSuratJalan',

  data () {
    return {
      judul_surat_jalan: null,
      no_surat_jalan: null,
      nama_barang: null,
      nama_customer: null,
      transporter: null,
      no_do_po: null,
      no_kendaraan: null,
      gross: null,
      gross_jam: null,
      gross_tgl: null,
      tare: null,
      tare_jam: null,
      tare_tgl: null,
      netto: null,
      supir: null,
      petugas: null,
      // Loading animation
      createSuratLoading: false,
      id: null,
    }
  },

  validations: {
    judul_surat_jalan: {
      required,
    },
    no_surat_jalan: {
      required,
    },
    nama_barang: {
      required,
    },
    nama_customer: {
      required,
    },
    transporter: {
      required,
    },
    no_do_po: {
      required,
    },
    no_kendaraan: {
      required,
    },
    gross: {
      required,
    },
    gross_jam: {
      required,
    },
    gross_tgl: {
      required,
    },
    tare: {
      required,
    },
    tare_jam: {
      required,
    },
    tare_tgl: {
      required,
    },
    netto: {
      required,
    },
    supir: {
      required,
    },
    petugas: {
      required,
    },
  },

  methods: {
    showeditSuratJalanSuccess: function() {
      let currentObj = this
      currentObj.$q.notify({
        message: 'Berhasil Edit Surat Jalan!',
        icon: 'done_outline',
        color: 'secondary'
      })
    },

    showeditSuratJalanError: function() {
      let currentObj = this
      currentObj.$q.notify({
        message: 'Gagal Edit Surat Jalan',
        icon: 'clear',
        color: 'red'
      })
    },

    editSuratJalan: function() {
      let currentObj = this
        
      

      try {
        currentObj.settingsLoading = true

        var existing = JSON.parse(localStorage.getItem('suratJalan'))

        let id = currentObj.$route.query.id

        existing[id].no_surat_jalan = currentObj.no_surat_jalan
        existing[id].judul_surat_jalan = currentObj.judul_surat_jalan
        existing[id].nama_barang = currentObj.nama_barang
        existing[id].nama_customer = currentObj.nama_customer
        existing[id].transporter = currentObj.transporter
        existing[id].no_do_po = currentObj.no_do_po
        existing[id].no_kendaraan = currentObj.no_kendaraan
        existing[id].gross = currentObj.gross
        existing[id].gross_jam = currentObj.gross_jam
        existing[id].gross_tgl = currentObj.gross_tgl
        existing[id].tare = currentObj.tare
        existing[id].tare_jam = currentObj.tare_jam
        existing[id].tare_tgl = currentObj.tare_tgl
        existing[id].netto = currentObj.netto
        existing[id].supir = currentObj.supir
        existing[id].petugas = currentObj.petugas        

        localStorage.setItem('suratJalan', JSON.stringify(existing))

        currentObj.showeditSuratJalanSuccess()
        currentObj.createSuratLoading = false
      } catch (e) {
        console.log(e)
        // data wasn't successfully saved due to
        // a Web Storage API error
        currentObj.showeditSuratJalanError()
        currentObj.createSuratLoading = false
      }
    },

    getOldData: function() {
      let currentObj = this
      let existing = JSON.parse(localStorage.getItem('suratJalan'))
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


    }
  }, // methods

  mounted: function() {
    let currentObj = this
    currentObj.getOldData()
  }, // Mounted
}
</script>
