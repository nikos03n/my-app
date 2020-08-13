<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Orders</h1>

        <v-list two-line subheader>
          <v-list-item
            style="background-color: beige;"
            avatar
            v-for="order in orders"
            :key="order.id"
          >
            <v-list-item-action>
              <v-checkbox color="success" :input-value="order.done" @change="markDone(order)"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{order.name}}</v-list-item-title>
              <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn :to="'/ad/' + order.adId" class="primary">Open</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: "fds3",
          name: "Vladilen",
          phone: "8-921-121-12-12",
          adId: "123",
          done: false,
        },
      ],
    };
  },
  methods: {
    markDone(order) {
      order.done = true;
    },
  },
};
</script>
