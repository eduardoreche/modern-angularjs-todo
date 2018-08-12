import TodoService from './todo.service';

const todoService = new TodoService();

class TodoController {
  $onInit() {
    this.todos = todoService.fetchAll();
  }

  addItem() {
    if (this.description) todoService.addItem(this.description);
    this.description = '';
  }

  toggleDone(item) {
    todoService.update(item);
  }
}

export default TodoController;
