import axios from "axios";

export default {
  // Gets all results
  getResults: function() {
    return axios.get("/api/results");
  },
  // updates the result with the given id
  updateResult: function(id) {
    return axios.put("/api/results/" + id);
  },
  // Saves result to the database
  saveResult: function(resultData) {
    return axios.post("/api/results", resultData);
  }
};

