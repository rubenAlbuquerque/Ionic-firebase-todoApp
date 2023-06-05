import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Task } from '../tasks';
// import * as firebase from 'firebase/app';
import firebase from 'firebase/compat/app'; // Import using 'firebase/app' module

@Injectable({
  providedIn: 'root',
})
export class FireserviceService {
  private snapshotChangesSubscription: any;
  constructor(public af: AngularFirestore) {}
  getTasks() {
    const currentUser = firebase.auth().currentUser;
    return this.af
      .collection('people')
      .doc(currentUser.uid)
      .collection('tasks')
      .snapshotChanges();
  }
  createTask(t: Task) {
    const currentUser = firebase.auth().currentUser;
    return this.af
      .collection('people')
      .doc(currentUser.uid)
      .collection('tasks')
      .add(t);
  }
  updateTask(taskId: any, t: Task) {
    const currentUser = firebase.auth().currentUser;
    this.af
      .collection('people')
      .doc(currentUser.uid)
      .collection('tasks')
      .doc(taskId)
      .set(t);
    //this.af.doc('tasks/' + TaskID).update(t);
  }
  deleteTask(taskId: any) {
    const currentUser = firebase.auth().currentUser;
    this.af
      .collection('people')
      .doc(currentUser.uid)
      .collection('tasks')
      .doc(taskId)
      .delete();
    //this.af.doc('tasks/' + TaskID).delete();
  }
  unsubscribeOnLogOut() {
    //remember to unsubscribe from the snapshotChanges
    this.snapshotChangesSubscription.unsubscribe();
  }
}
