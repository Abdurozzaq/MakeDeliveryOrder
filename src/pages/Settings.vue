<template>
  <div>

    <div class="row justify-center">
      <div class="col-12">
        <q-card class="q-mx-xl q-my-md">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Settings Data Perusahaan</div>
            <div class="text-subtitle2">Data ini digunakan pada Surat Jalan.</div>
          </q-card-section>

          <q-separator />

          <q-form @submit="settingsUpdate">
            
            <q-card-section>
              <div class="row">
                <div class="col-12 col-md-3 self-center">
                  <p class="text-subtitle1 float-right q-mr-lg">Nama Perusahaan :</p>
                </div>

                <div class="col-12 col-md-8">
                  <q-input 
                    outlined 
                    label="Nama Perusahaan" 
                    hint="Required"
                    placeholder="Masukan Nama Perusahaan." 
                    type="text"
                    v-model.trim="nama_perusahaan"
                    @input="$v.nama_perusahaan.$touch()"
                    :rules="[
                        val => $v.nama_perusahaan.required || 'Nama Perusahaan harus di isi.',
                    ]"
                  />
                </div>
              </div>

              <br>

              <div class="row">
                <div class="col-12 col-md-3 self-center">
                  <p class="text-subtitle1 float-right q-mr-lg">Alamat Perusahaan :</p>
                </div>

                <div class="col-12 col-md-8">
                  <div class="row">
                    <div class="col-6">
                      <q-input 
                        class="q-mr-lg"
                        outlined 
                        label="Alamat Perusahaan" 
                        hint="Required | Hanya Nama Jalan / Kampung"
                        placeholder="Masukan Nama Jalan / Kampung." 
                        type="text"
                        v-model.trim="alamat_perusahaan"
                        @input="$v.alamat_perusahaan.$touch()"
                        :rules="[
                            val => $v.alamat_perusahaan.required || 'Alamat Perusahaan harus di isi.',
                        ]"
                      />
                    </div>

                    <div class="col-6">
                      <q-input 
                        outlined 
                        label="Kota / Kabupaten" 
                        hint="Required"
                        placeholder="Masukan Nama Kota / Kabupaten." 
                        type="text"
                        v-model.trim="kota"
                        @input="$v.kota.$touch()"
                        :rules="[
                            val => $v.kota.required || 'Kota/Kabupaten harus di isi.',
                        ]"
                      />
                    </div>
                  </div>

                  <br>

                  <div class="row">
                    <div class="col-6">
                      <q-input 
                        class="q-mr-lg"
                        outlined 
                        label="Kecamatan" 
                        hint="Required"
                        placeholder="Masukan Kecamatan." 
                        type="text"
                        v-model.trim="kecamatan"
                        @input="$v.kecamatan.$touch()"
                        :rules="[
                            val => $v.kecamatan.required || 'Kecamatan harus di isi.',
                        ]"
                      />
                    </div>

                    <div class="col-6">
                      <q-input 
                        outlined 
                        label="Kelurahan" 
                        hint="Required"
                        placeholder="Masukan Kelurahan." 
                        type="text"
                        v-model.trim="kelurahan"
                        @input="$v.kelurahan.$touch()"
                        :rules="[
                            val => $v.kelurahan.required || 'Kelurahan harus di isi.',
                        ]"
                      />
                    </div>
                  </div>
                  
                </div>
              </div>

              <br>

              <div class="row">
                <div class="col-12 col-md-3 self-center">
                  <p class="text-subtitle1 float-right q-mr-lg">Nomor Telepon :</p>
                </div>

                <div class="col-12 col-md-8">
                  <q-input 
                    outlined 
                    label="Nomor Telepon" 
                    hint="Required"
                    placeholder="Masukan Nomor Telepon Perusahaan." 
                    type="text"
                    v-model.trim="no_telp_perusahaan"
                    @input="$v.no_telp_perusahaan.$touch()"
                    :rules="[
                        val => $v.no_telp_perusahaan.required || 'Nomor Telepon Perusahaan harus di isi.',
                    ]"
                  />
                </div>
            </div>

            <br>

            <div class="row">
                <div class="col-12 col-md-3 self-center">
                  <p class="text-subtitle1 float-right q-mr-lg">Fax :</p>
                </div>

                <div class="col-12 col-md-8">
                  <q-input 
                    outlined 
                    label="Nomor Fax" 
                    hint="Required"
                    placeholder="Masukan Nomor Fax Perusahaan." 
                    type="text"
                    v-model.trim="no_fax_perusahaan"
                    @input="$v.no_fax_perusahaan.$touch()"
                    :rules="[
                        val => $v.no_fax_perusahaan.required || 'Nomor Fax Perusahaan harus di isi.',
                    ]"
                  />
                </div>
            </div>


            </q-card-section>

            <q-separator />

            <q-card-actions align="right">
              <q-btn type="submit" color="primary">Update</q-btn>
            </q-card-actions>
          </q-form>
          
          <q-inner-loading :showing="settingsLoading">
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
import { LocalStorage } from 'quasar'
import { required } from 'vuelidate/lib/validators';
export default {
  name: 'PageSettings',
  data () {
    return {
      nama_perusahaan: null,
      alamat_perusahaan: null,
      kota: null,
      kecamatan: null,
      kelurahan: null,
      no_telp_perusahaan: null,
      no_fax_perusahaan: null,
      // Loading animation
      settingsLoading: false,
    }
  },

  validations: {
    nama_perusahaan: {
      required,
    },
    alamat_perusahaan: {
      required,
    },
    kota: {
      required,
    },
    kecamatan: {
      required,
    },
    kelurahan: {
      required,
    },
    no_telp_perusahaan: {
      required,
    },
    no_fax_perusahaan: {
      required,
    },
  },

  methods: {
    showUpdateSettingsSuccess: function() {
      let currentObj = this
      currentObj.$q.notify({
        message: 'Settings berhasil di update!',
        icon: 'done_outline',
        color: 'secondary'
      })
    },

    showUpdateSettingsError: function() {
      let currentObj = this
      currentObj.$q.notify({
        message: 'Gagal Untuk Men-update Settings',
        icon: 'clear',
        color: 'red'
      })
    },

    showUpdateSettingsDataError: function() {
      let currentObj = this
      currentObj.$q.notify({
        message: 'Gagal Mendapatkan Data Lama',
        icon: 'clear',
        color: 'red'
      })
    },

    settingsUpdate: function() {
      let currentObj = this

      const formData = {
        alamat_perusahaan:  currentObj.alamat_perusahaan,
        nama_perusahaan: currentObj.nama_perusahaan,
        kota:  currentObj.kota,
        kecamatan:  currentObj.kecamatan,
        kelurahan:  currentObj.kelurahan,
        no_telp_perusahaan: currentObj.no_telp_perusahaan,
        no_fax_perusahaan: currentObj.no_fax_perusahaan
      }
          

      try {
        currentObj.settingsLoading = true
        localStorage.setItem('settings', JSON.stringify(formData))
        currentObj.showUpdateSettingsSuccess()
        currentObj.settingsLoading= false
      } catch (e) {
        console.log(e)
        // data wasn't successfully saved due to
        // a Web Storage API error
        currentObj.showUpdateSettingsError()
        currentObj.settingsLoading= false
      }
    },

    getSettings: function() {
      let currentObj = this

      try {
        let settings = JSON.parse(localStorage.getItem('settings'));
  
        currentObj.nama_perusahaan = settings.nama_perusahaan
        currentObj.alamat_perusahaan = settings.alamat_perusahaan
        currentObj.kota = settings.kota
        currentObj.kecamatan = settings.kecamatan
        currentObj.kelurahan = settings.kelurahan
        currentObj.no_telp_perusahaan = settings.no_telp_perusahaan
        currentObj.no_fax_perusahaan = settings.no_fax_perusahaan
        
      } catch(e) {

        console.log(e)

        currentObj.showUpdateSettingsDataError()
      }

      
    },  

  },

  

  mounted: function() {
    let currentObj = this
    currentObj.getSettings()
  }
}
</script>
