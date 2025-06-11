import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { TaskUser } from '../../business/entities';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-table-task',
  imports: [],
  templateUrl: './table-task.component.html',
  styleUrl: './table-task.component.css'
})
export class TableTaskComponent implements AfterViewInit {
  private service = inject(TaskService);

  tasks = signal<TaskUser[]>([]);

  ngAfterViewInit(): void {
    this.tasks.set(this.service.tasks);
  }

  deleteTask(id: number) {
    this.service.delete(id)
  }
}
