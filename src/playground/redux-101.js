import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ count }) => ({
  type: "SET",
  count,
});

const resetCount = () => ({
  type: "RESET",
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };

    case "SET":
      return {
        count: action.count,
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ count: 101 }));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

const book = {
  title: "Ego is the enemy",
  author: "Martin squrzz",
  publisher: {
    name: "Penguin",
  },
};

const { title, author, publisher } = book;

const { name: publisherName = "anon" } = publisher;

console.log(publisherName);

const address = ["1299 S Juniper Street", "Phili", "Penns", "19479"];

const [, city, state = "NYC", zip] = address;

console.log("you are in " + city + ", " + state);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [name, , price] = item;

console.log("A medium " + name + " costs " + price);
