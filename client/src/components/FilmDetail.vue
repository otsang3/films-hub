<template lang="html">
  <div>
    <h2>{{film.title}}</h2>
    <p>{{film.details}}</p>
  </div>
</template>

<script>
export default {
  name: 'film-detail',
  props: ['film']
}
</script>

<style lang="css" scoped>
</style>
