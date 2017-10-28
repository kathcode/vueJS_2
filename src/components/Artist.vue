<template>
  <div>
    <div
      v-for="artist in artists"
      v-bind:key="artist.id"
    >
      {{ artist.name }}
    </div>
  </div>
</template>

<script>
import getArtist from '../api';

export default {
  name: 'Artist',
  data() {
    return {
      artists: [],
    };
  },
  mounted: function mounted() {
    getArtist()
      .then((artist) => {
        debugger;
        this.artists = artist;
      });
  },
};
</script>

