const state = {
  tasks: {
    ID1: {
      name: "go to shop",
      title: "Go to shop",
      completed: false,
      dueDate: "2019/05/12",
      dueTime: "18:30",
      done: false
    },
    ID2: {
      name: "Get bananas",
      title: "Get bananas",
      completed: false,
      dueDate: "2019/05/13",
      dueTime: "18:30",
      done: false
    },
    ID3: {
      name: "Get apples",
      title: "Get apples",
      completed: false,
      dueDate: "2019/05/14",
      dueTime: "18:30",
      done: false
    }
  }
};
const mutations = {};
const actions = {};
const getters = {
  tasks: state => {
    return state.tasks;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
