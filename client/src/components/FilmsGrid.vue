<template lang="html">
  <div class="film-wrapper">
    <film-grid-item v-for="(film, index) in films" :key="index" :film="film" />
    <film-detail v-if="selectedFilm" :film="selectedFilm"></film-detail>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import FilmDetail from './FilmDetail.vue';
import FilmGridItem from './FilmGridItem';
import FilmService from '@/services/FilmService.js';

export default {
  data(){
    return {
      films: [],
      selectedFilm: null
    };
  },
  mounted(){
    FilmService.getFilms()
    .then(films => this.films = films)

    eventBus.$on('deleted-film', (id) => {
      const index = this.films.findIndex(film => film._id === id)
      this.films.splice(index, 1)
    })

    eventBus.$on('selected-film', film => this.selectedFilm = film)

  },
  components: {
    'film-detail': FilmDetail,
    'film-grid-item': FilmGridItem
  }
}
</script>

<style lang="css" scoped>

.film-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
