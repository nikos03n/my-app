<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <h1>Home</h1>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      ads: [
        {
          title: "First ad",
          description: "Hello i am description",
          promo: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          id: "123",
        },
        {
          title: "Second ad",
          description: "Hello i am description",
          promo: true,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          id: "1234",
        },
        {
          title: "Third ad",
          description: "Hello i am description",
          promo: true,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          id: "12345",
        },
      ],
    };
  },
};
</script>
