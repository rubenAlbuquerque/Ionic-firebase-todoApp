import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks';
import { FireserviceService } from '../fireservice/fireservice.service';
// import { Observable } from 'rxjs';
// import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // tasks: Array<any> = [];
  tasks: any[];
  fser: FireserviceService;

  constructor() {
    this.tasks = [
      { title: 'Milk', status: 'open' },
      { title: 'Eggs', status: 'open' },
      { title: 'Pancake Mix', status: 'open' },
    ];
  }

  addTask() {
    const ntask: string = prompt('New Task');
    if (ntask !== '') {
      const t: Task = { $key: '', title: ntask, status: 'open' };
      console.log(t);
      this.fser
        .createTask(t)
        .then((resp) => {
          console.log('createTask: then - ' + resp);
        })
        .catch((error) => {
          console.log('createTask: catch - ' + error);
        });
      console.log('addTask: ' + this.tasks);
    }
  }

  markAsDone(slidingItem, task: any) {
    task.status = task.status === 'done' ? 'open' : 'done';
    console.log('markAsDone ' + task);
    this.fser.updateTask(task.$key, task);
    slidingItem.close();
  }
  removeTask(slidingItem, task: any) {
    task.status = 'removed';
    this.fser.deleteTask(task.$key);
    slidingItem.close();
  }

  ngOnInit(): void {
    this.fser.getTasks().subscribe((data) => {
      this.tasks = data.map((e) => ({
        $key: e.payload.doc.id,
        title: e.payload.doc.data().title,
        status: e.payload.doc.data().status,
      }));
      console.log(this.tasks);
    });
  }
}
