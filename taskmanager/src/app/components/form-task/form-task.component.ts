import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Priority, TaskUser } from '../../business/entities';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-task',
  imports: [ReactiveFormsModule],
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css'
})
export class FormTaskComponent {
  private service: TaskService = inject(TaskService);
  private builder: FormBuilder = inject(FormBuilder);

  priorityEnum = Priority;
  form = this.builder.group({
    name: ['', [
      Validators.required,
      Validators.maxLength(20)
    ]],
    priority: [this.priorityEnum.MEDIUM],
    description: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(120)
    ]]
  })

  get nameHaveErrors() {
    return this.form.controls.name.invalid;
  }

  get descriptionHaveErrors() {
    return this.form.controls.description.invalid;
  }

  submit() {
    let task: TaskUser = {
      name: this.form.controls.name.value!,
      description: this.form.controls.description.value!,
      priority: this.form.controls.priority.value!,
      id: 0,
      done: false
    }

    this.service.insert(task)
    console.log(this.service.tasks);
    
  }

}
