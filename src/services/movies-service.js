let movies = [
    {_id: '123', title: 'Aliens', rating: 4.5},
    {_id: '234', title: 'Terminator', rating: 4.8},
    {_id: '345', title: 'Avatar', rating: 4.7}
];

const deleteMovie = (req, res) => {
    const id = req.params['_id'];
    movies = movies.filter(m => m._id !== id);
    res.json(movies);
};
app.delete('/api/movies/:_id', deleteMovie);

module.exports = (app) => {
    const getAllMovies = (req, res) => res.json(movies);
    app.get('/api/movies', getAllMovies);
};
