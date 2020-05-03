const baseUrl = 'http://localhost:3000/api/films/'

export default {

  getFilms(){
    return fetch(baseUrl)
    .then(res => res.json())
  },

  deleteFilm(id){
    return fetch(baseUrl + id, {
      method: 'DELETE'
    }).then(res => res.json())
  }

}
