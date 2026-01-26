import axios from "axios";

class MovieDataService {

    getAll(page = 0) {
        return axios.get(`https://localhost:5000/api/v1/movies?page=${page}`);
    }

    get(id) {
        return axios.get(`https://localhost:5000/api/v1/movies/id/${id}`);
    }

    find(query, by="title", page=0) {
        return axios.get(`https://localhost:5000/api/v1/movies?${by}=${query}&page=${page}`);
    }

    createReview(data) {
        return axios.post(`https://localhost:5000/api/v1/movies/review`, data);
    }

    updateReview(data) {
        return axios.put(`https://localhost:5000/api/v1/movies/review`, data);
    }

    deleteReview(review_id, movie_id) {
        return axios.delete(`https://localhost:5000/api/v1/movies/review?review_id=${review_id}&movie_id=${movie_id}`);
    }

    getRatings() {
        return axios.get(`https://localhost:5000/api/v1/movies/ratings`);
    }
}

export default new MovieDataService();