import { Component } from '@angular/core';
import { Task } from '../tasks';
import { FireserviceService } from '../fireservice/fireservice.service';
import { FireauthService } from '../fireauthservice/fireauthservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks: Array<any> = [];

  constructor(private fser: FireserviceService, private authService: FireauthService, private router: Router) {
    this.tasks = [
      { title: 'Milk', status: 'open' },
      { title: 'Eggs', status: 'open' },
      { title: 'Pancake Mix', status: 'open' },
    ];
  }

  addTask() {
    let ntask = prompt("New Task");
    if (ntask !== "") {
      let t: Task = { $key: "", title: ntask, status: 'open' };
      console.log(t);
      this.fser.createTask(t).then(resp => {
        console.log("createTask: then - " + resp);
      })
        .catch(error => {
          console.log("createTask: catch - " + error);
        });
      console.log("addTask: " + this.tasks);
    }
  }

  markAsDone(slidingItem: any, task: any) {
    task.status = (task.status === "done") ? "open" : "done";
    console.log("markAsDone " + task);
    this.fser.updateTask(task.$key, task);
    slidingItem.close();
  }

  removeTask(slidingItem: any, task: any) {
    task.status = "removed";
    this.fser.deleteTask(task.$key);
    slidingItem.close();
  }

  logout(){
    this.authService.doLogout()
    .then(res => {
    this.router.navigate(["/login"]);
    }, err => {
    console.log(err);
    })
    } 

  ngOnInit() {
    this.fser.getTasks().subscribe((data: any) => {
      this.tasks = data.map((e: any) => {
        const docData = e.payload.doc.data();
        return {
          $key: e.payload.doc.id,
          title: docData.title as string,
          status: docData.status as string,
        };
      });
      console.log(this.tasks);
    });
  }
}
