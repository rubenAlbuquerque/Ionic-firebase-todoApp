import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Task } from '../tasks';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {
  private snapshotChangesSubscription: any;
  constructor(
    public af: AngularFirestore,
  ) { }
  getTasks () {
    let currentUser = firebase.auth().currentUser;
    if (currentUser){
      return this.af.collection('people').doc(currentUser.uid).collection('tasks').snapshotChanges();
    } else {
      console.error('No authenticated user');
      return of([]);
    }
    
  }
  createTask(t:Task) {
    let currentUser = firebase.auth().currentUser;
    if (currentUser) {
      return this.af.collection('people').doc(currentUser.uid).collection('tasks').add(t);
    } else {
      // Handle the error case as per your requirement
      console.error('No authenticated user');
      return Promise.reject(new Error('No authenticated user'));
    }
  }
  updateTask(TaskID:any,t:Task){
    let currentUser = firebase.auth().currentUser;
    if (currentUser) {
      return this.af.collection('people').doc(currentUser.uid).collection('tasks').doc(TaskID).set(t);
    } else {
      // Handle the error case as per your requirement
      console.error('No authenticated user');
      return;
    }
    //this.af.doc('tasks/' + TaskID).update(t);
  }
  deleteTask(TaskID:any) {
    let currentUser = firebase.auth().currentUser;
    if (currentUser) {
      return this.af.collection('people').doc(currentUser.uid).collection('tasks').doc(TaskID).delete();
    } else {
      // Handle the error case as per your requirement
      console.error('No authenticated user');
      return;
    }
  //this.af.doc('tasks/' + TaskID).delete();
  }
  unsubscribeOnLogOut(){
    //remember to unsubscribe from the snapshotChanges
    this.snapshotChangesSubscription.unsubscribe();
  }
  
}
