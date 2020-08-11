<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item v-for="ad in ads" :key="ad.id" :src="ad.imageSrc"></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row>
        <v-flex xs12 sm6 md4 v-for="ad of ads" :key="ad.id">
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" :src="ad.imageSrc">
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ad.title}}</div>

              <div>{{ad.description}}</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat>Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
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
          title: " Первое объявление",
          description: "Описание",
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
