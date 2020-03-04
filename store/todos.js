
export const state = () => ({
  list: []
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text: text,
      done: false,
      id: Date.now().toString(16) + Math.floor(1000 * Math.random()).toString(16),
      clicked: false
    })
  },
  remove(state, todo) {
    // state.list.splice(state.list.indexOf(todo), 1)
    for (let i = 0; i < state.list.length; i++) {
      const ob = state.list[i];
      if (ob.id == todo.id) {
        alert('Are you sure to remove ' + '"' + ob.text + '"?');
        state.list.splice(i, 1);
        return;
      }
    }
  },
  clicked(state, todo) {
    todo.clicked = !todo.clicked
  },
  update(state, content) {
    for (let i = 0; i < state.list.length; i++) {
      const ob = state.list[i];
      if (ob.clicked == true) {
        ob.text = content
        ob.clicked = !ob.clicked
      }
    }
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}

