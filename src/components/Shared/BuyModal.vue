<template>
  <v-row justify="center">
    <v-dialog v-model="modal" persistent max-width="400">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="primary" v-bind="attrs" v-on="on">Buy</v-btn>
      </template>

      <v-card>
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <v-card-title class="text">
                <h1 class="text--primary">Do you wan't to buy it?</h1>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs12>
              <v-card-text>
                <v-text-field name="name" label="Your name" type="text" v-model="name"></v-text-field>
                <v-text-field name="phone" label="Your phone" type="text" v-model="phone"></v-text-field>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs12>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="onCancel" :disabled="localLoading">Close</v-btn>
                <v-btn
                  class="success"
                  @click="onSave"
                  :disabled="localLoading"
                  :loading="localLoading"
                >Buy it!</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["ad"],
  data() {
    return {
      modal: false,
      name: "",
      phone: "",
      localLoading: false,
    };
  },
  methods: {
    onCancel() {
      this.name = "";
      this.phone = "";
      this.modal = false;
    },
    onSave() {
      if (this.name !== "" && this.phone !== "") {
        this.localLoading = true;
        this.$store
          .dispatch("createOrder", {
            name: this.name,
            phone: this.phone,
            adId: this.ad.id,
            ownerId: this.ad.ownerId,
          })
          .finally(() => {
            this.name = "";
            this.phone = "";
            this.localLoading = false;
            this.modal = false;
          });
      }
    },
  },
};
</script>

<style scoped>
.text--primary {
  font-size: 22px;
}
</style>