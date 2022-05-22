<template>
   <n-notification-provider>
      <NavBar />
      <Form />
      <Footer />
    </n-notification-provider>
</template>


<script setup>
import {NNotificationProvider} from 'naive-ui'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import Form from '../components/Form.vue'
</script>



<style scoped>
</style>