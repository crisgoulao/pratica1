import './style.css'
import { TaskList } from './myTopics/task-list';

// Criando uma instância de TaskList
const taskList = new TaskList();

// Adicionando algumas tarefas
taskList.addTask({ id: 1, name: "Completar o projeto", completed: false });
taskList.addTask({ id: 2, name: "Estudar TypeScript", completed: false });
taskList.addTask({ id: 3, name: "Fazer compras", completed: false });

// Imprimindo a lista de tarefas inicial
console.log("Lista de tarefas inicial:");
taskList.printTasks();

// Marcando uma tarefa como completada
taskList.completeTask(1);
console.log("\nTarefa 'Completar o projeto' marcada como completa:");
taskList.printTasks();

// Removendo uma tarefa
taskList.removeTask(2);
console.log("\nTarefa 'Estudar TypeScript' removida:");

taskList.printTasks();
