import { Injectable } from '@angular/core';
import { user } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends: user[];
  constructor() {
    let usuario1: user = {
      nick: 'Eduardo',
      age: 24,
      email: 'ed@aoe.aoe',
      friend: true,
      uid: 1
    };
    let usuario2: user = {
      nick: 'Freddy',
      age: 28,
      email: 'fred@aoe.aoe',
      friend: true,
      uid: 2
    };
    let usuario3: user = {
      nick: 'Yuliana',
      age: 18,
      email: 'yuli@aoe.aoe',
      friend: true,
      uid: 3
    };
    let usuario4: user = {
      nick: 'Ricardo',
      age: 17,
      email: 'rick@aoe.aoe',
      friend: false,
      uid: 4
    };
    let usuario5: user = {
      nick: 'Marcos',
      age: 30,
      email:'marcos@aoe.aoe',
      friend: false,
      uid: 5
    };
    this.friends = [usuario1,usuario2,usuario3,usuario4,usuario5]
    
   }

   getfriends(){
     return this.friends;
   }
}
