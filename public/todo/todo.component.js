import template from './todo.template.html';
import TodoController from './todo.controller';
import todoStyles from './todo.sass';

const bindings = {};

export const todoComponent = {
  controller: TodoController,
  template,
  bindings
};
