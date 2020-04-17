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
                  <q-input 
                    outlined 
                    label="Alamat Perusahaan" 
                    hint="Required"
                    placeholder="Masukan Alamat Perusahaan." 
                    type="textarea"
                    v-model.trim="alamat_perusahaan"
                    @input="$v.alamat_perusahaan.$touch()"
                    :rules="[
                        val => $v.alamat_perusahaan.required || 'Alamat Perusahaan harus di isi.',
                    ]"
                  />
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
        nama_perusahaan: currentObj.nama_perusahaan,
        alamat_perusahaan:  currentObj.alamat_perusahaan,
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
