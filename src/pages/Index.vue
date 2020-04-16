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

          <q-form @submit="updateEmail">
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
                    label="No Tiket" 
                    hint="Required"
                    placeholder="Masukan No Tiket Surat Jalan." 
                    type="text"
                    v-model.trim="judul_surat_jalan"
                    @input="$v.judul_surat_jalan.$touch()"
                    :rules="[
                        val => $v.judul_surat_jalan.required || 'No Tiket surat jalan harus di isi.',
                    ]"
                  />
                </div>
              </div>

              <br>

              
              <div class="row">
                <div class="col-12 col-md-6 self-center">

                  <div>
                      DISINI
                  </div>

                  <br>
                  
                </div>

                <div class="col-12 col-md-6 self-center">

                  <div>
                      DISINI
                  </div>

                  <br>
                  
                </div>

              </div>
              
            </q-card-section>

            <q-separator />

            <q-card-actions align="right">
              <q-btn type="submit" flat>Send</q-btn>
            </q-card-actions>
          </q-form>
          
          <q-inner-loading :showing="emailLoading">
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
export default {
  name: 'PageIndex'
}
</script>
