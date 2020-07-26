<template>
  <div class="planning">
    <Calendar/>      
    <AddForm/>
  </div>
</template>

<script>
import AddForm from '@/components/AddForm.vue'
import Calendar from '@/components/Calendar.vue'

export default {
  components: {
    AddForm,
    Calendar,
  },

  data() {
    return {
    }
  },
}
</script>
