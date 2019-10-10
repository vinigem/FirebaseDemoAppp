import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    
    constructor(private firestore: AngularFirestore) { }

    getUsers() {
        return this.firestore.collection("users").snapshotChanges();
    }

    addUser(user) {
        return from(this.firestore.collection('users').add(user));
    }

    deleteUser(docId) {
        from(this.firestore.collection("users").doc(docId).delete());
    }
}