import { Task } from './task';

// Esta classe representa uma lista de tarefas e suas operações associadas
export class TaskList {
    // O array 'tasks' armazena objetos do tipo 'Task' que representam as tarefas
    tasks: Task[] = [];

    // O método 'addTask' adiciona uma nova tarefa à lista
    addTask(task: Task): void {
        this.tasks.push(task);
    }

    // O método 'removeTask' remove uma tarefa da lista com base no seu ID
    removeTask(id: number): void {
        // Filtra as tarefas mantendo apenas aquelas cujo ID não corresponde ao ID fornecido
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    // O método 'completeTask' marca uma tarefa como completa com base no seu ID
    completeTask(id: number): void {
        // Encontra a tarefa com o ID especificado na lista
        const task = this.tasks.find(task => task.id === id);
        
        // Se a tarefa existir, define a propriedade 'completed' como true para marcá-la como completa
        if (task) {
            task.completed = true;
        }
    }

    // O método 'printTasks' imprime todas as tarefas na lista, mostrando ID, nome e status de conclusão
    printTasks(): void {
        this.tasks.forEach(task => {
            console.log(`ID: ${task.id}, Name: ${task.name}, Completed: ${task.completed}`);
        });
    }
}
