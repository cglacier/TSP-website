import axios from "axios";

export default axios.create({
    baseURL: "https://teaspoon-limited-default-rtdb.firebaseio.com/"
})