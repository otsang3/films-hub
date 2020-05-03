use filmsDatabase;
db.dropDatabase();

db.films.insertMany([
  {
  title: "The Matrix",
  genre: "Sci-Fi",
  rating: "15",
  release_date: "11/06/1999",
  runtime: 136,
  crew: {
    director: "The Wachowskis",
    producer: "Joel Silver"
  },
  details: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
},
{
  title: "Aliens",
  genre: "Sci-Fi",
  rating: "18",
  release_date: "29/08/1986",
  runtime: 137,
  crew: {
    director: "James Cameron",
    producer: "Gale Ann Hurd"
  },
  details: "Ellen Ripley is rescued by a deep salvage team after being in hypersleep for 57 years. The moon that the Nostromo visited has been colonized, but contact is lost. This time, colonial marines have impressive firepower, but will that be enough?"
}
])
