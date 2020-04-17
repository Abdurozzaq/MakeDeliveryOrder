<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          MakeDeliveryOrder App
        </q-toolbar-title>

        <div>Ver 0.1</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigasi
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [

        {
          title: 'Buat Surat Jalan',
          caption: 'Buat Surat Jalan Baru Disini.',
          icon: 'add',
          link: '/'
        },

        {
          title: 'Data List Surat Jalan',
          caption: 'Edit Atau Delete Surat Jalan Disini.',
          icon: 'list',
          link: '/list'
        },

        {
          title: 'Settings Perusahaan',
          caption: 'Untuk Edit Data Perusahaan.',
          icon: 'book',
          link: '/settings'
        },

        {
          title: 'Import Data Surat Jalan',
          caption: 'Semua Data akan di gantikan saat di import.',
          icon: 'publish',
          link: '/parseCsv'
        },
        {
          title: 'Data List Surat Jalan Terhapus',
          caption: 'Lihat Surat Jalan yang terhapus.',
          icon: 'delete',
          link: '/trash'
        },

      ]
    }
  }
}
</script>
