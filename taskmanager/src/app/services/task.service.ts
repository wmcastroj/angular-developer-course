import { Injectable } from '@angular/core';
import { TaskUser } from '../business/entities';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private userTasks: TaskUser[] = [];
  private idTasks: number = 0;

  constructor() { }

  get tasks(): TaskUser[] {
    return this.userTasks
  }

  insert(task: TaskUser) {
    if (!this.tasks) this.idTasks = 0;

    task.id = ++this.idTasks
    this.userTasks.push(task)
  }

  delete(id: number) {
    const index = this.userTasks.findIndex(task => task.id === id)
    if (index !== -1) {
      this.userTasks.splice(index, 1)
    }
  }
}
