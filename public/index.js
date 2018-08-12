import angular from 'angular';
import { todoComponent } from './todo/todo.component';

/**
 * @class Has fields addValue and fancyValue. Manages state between superAwesomeComponents
 */
class IndexController {
  constructor() {
    this.addValue = 3;
    this.fancyValue = 1337;
  }
}

angular
  .module('theWholeApp', [])
  .component('todoComponent', todoComponent)
  .controller('IndexController', IndexController);
