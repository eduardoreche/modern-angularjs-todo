import _ from 'lodash';
import moment from 'moment';

class TodoService {
  constructor() {
    this.todos = [
      {
        id: 1,
        description: 'Todo 1',
        done: true,
        updated: moment.now()
      },
      {
        id: 2,
        description: 'Todo 2',
        done: false,
        updated: moment.now()
      },
      {
        id: 3,
        description: 'Todo 3',
        done: false,
        updated: moment.now()
      },
      {
        id: 4,
        description: 'Todo 4',
        done: true,
        updated: moment.now()
      },
      {
        id: 5,
        description: 'Todo 5',
        done: false,
        updated: moment.now()
      }
    ];
  }

  fetchAll() {
    return this.todos;
  }

  addItem(description) {
    this.todos.push({
      id: this.todos.length + 1,
      description,
      done: false
    });
  }

  removeItem(id) {
    _.remove(this.todos, { id });
  }

  update(item) {
    item.udpated = moment.now();
    _.set(_.find(this.todos, { id: item.id }), item);
  }
}

export default TodoService;
