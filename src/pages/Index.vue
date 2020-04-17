<template>
  <div>

    <div class="row justify-center">
      <div class="col-12">
        <q-card class="q-mx-xl q-my-md">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Buat Surat Jalan</div>
            <div class="text-subtitle2">Buat surat jalan disini.</div>
          </q-card-section>

          <q-separator />

          <q-form @submit="buatSuratJalan">
            <q-card-section>
              <div class="row">
                <div class="col-8">
                  <q-input  
                    class="q-mr-sm"
                    label="Judul Surat Jalan" 
                    hint="Required"
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
                  
                  </div>

                </div>

                <div class="col-12 col-md-6 ">

                  <div>
                    <q-input  
                      class="q-mr-sm"
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

                    <br>

                    <q-input  
                      class="q-mr-sm"
                      outlined
                      label="Gross" 
                      hint="Required"
                      placeholder="Masukan Gross Barang." 
                      type="text"
                      v-model.trim="gross"
                      @input="$v.gross.$touch()"
                      :rules="[
                          val => $v.gross.required || 'Gross harus di isi.',
                      ]"
                    />

                    <br>

                    <q-input  
                      class="q-mr-sm"
                      outlined
                      label="Tare" 
                      hint="Required"
                      placeholder="Masukan Tare Barang." 
                      type="text"
                      v-model.trim="tare"
                      @input="$v.tare.$touch()"
                      :rules="[
                          val => $v.tare.required || 'Tare harus di isi.',
                      ]"
                    />

                    <br>

                    <q-input  
                      class="q-mr-sm"
                      outlined
                      label="Netto" 
                      hint="Required"
                      placeholder="Masukan Netto Barang." 
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
  name: 'PageBuatSuratJalan',

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
      tare: null,
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
    tare: {
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
    showBuatSuratJalanSuccess: function() {
      let currentObj = this
      currentObj.$q.notify({
        message: 'Berhasil Membuat Surat Jalan!',
        icon: 'done_outline',
        color: 'secondary'
      })
    },

    showBuatSuratJalanError: function() {
      let currentObj = this
      currentObj.$q.notify({
        message: 'Gagal Membuat Surat Jalan',
        icon: 'clear',
        color: 'red'
      })
    },

    buatSuratJalan: function() {
      let currentObj = this
        
      

      try {
        currentObj.settingsLoading = true

        var existing = JSON.parse(localStorage.getItem('suratJalan'));

        let formData = [ 
        {
          id: currentObj.id,
          judul_surat_jalan: currentObj.judul_surat_jalan,
          no_surat_jalan: currentObj.no_surat_jalan,
          nama_barang: currentObj.nama_barang,
          nama_customer: currentObj.nama_customer,
          transporter: currentObj.transporter,
          no_do_po: currentObj.no_do_po,
          no_kendaraan: currentObj.no_kendaraan,
          gross: currentObj.gross,
          tare: currentObj.tare,
          netto: currentObj.netto,
          supir: currentObj.supir,
          petugas: currentObj.petugas,
          disabled: "false"
        }
      ]   

      let formDataNotNull =  
        {
          id: currentObj.id,
          judul_surat_jalan: currentObj.judul_surat_jalan,
          no_surat_jalan:  currentObj.no_surat_jalan,
          nama_barang: currentObj.nama_barang,
          nama_customer: currentObj.nama_customer,
          transporter: currentObj.transporter,
          no_do_po: currentObj.no_do_po,
          no_kendaraan: currentObj.no_kendaraan,
          gross: currentObj.gross,
          tare: currentObj.tare,
          netto: currentObj.netto,
          supir: currentObj.supir,
          petugas: currentObj.petugas,
          disabled: "false"
        } 

        if(existing != null) {
          existing.push(formDataNotNull)
          localStorage.setItem('suratJalan', JSON.stringify(existing));
        } else {
          localStorage.setItem('suratJalan', JSON.stringify(formData));
        }

        currentObj.showBuatSuratJalanSuccess()
        currentObj.createSuratLoading = false
        currentObj.getUniqueId()
      } catch (e) {
        console.log(e)
        // data wasn't successfully saved due to
        // a Web Storage API error
        currentObj.showBuatSuratJalanError()
        currentObj.createSuratLoading = false
      }
    },

    getUniqueId () {
      let currentObj = this
      // Get the existing data
      var existing = JSON.parse(localStorage.getItem('suratJalan'));

      if (!existing) {
        currentObj.id = 0
        currentObj.no_surat_jalan = 1
        
      } else {
        currentObj.id = existing.length
        currentObj.no_surat_jalan = existing.length + 1 
        
      }
    },

    
  }, // methods

  mounted: function() {
    let currentObj = this
    currentObj.getUniqueId()
  }, // Mounted
}
</script>
