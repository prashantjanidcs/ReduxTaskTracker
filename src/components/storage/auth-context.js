import { createStore } from "redux";
const LoggedInReducer = (state = { status: 0 }, action) => {
  const storedUserLoggedInInformation = localStorage.getItem("Logged_IN");
  if (action.type === "Logged_IN") {
    localStorage.setItem("Logged_IN", "1");
    return {
      status: 1,
    };
  } else if (action.type === "Logged_OUT") {
    localStorage.removeItem("Logged_IN");
    return { status: 0 };
  }
  if (storedUserLoggedInInformation === "1") {
    return{
      status:1
    };
  }
  return state;
};

const store = createStore(LoggedInReducer);
export default store;
