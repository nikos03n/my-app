<template>
  <v-dialog width="400px" v-model="modal">
    <v-btn class="warning" flat slot="activator">Edit</v-btn>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
    };
  },
};
</script>
