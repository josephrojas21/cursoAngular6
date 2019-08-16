import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { user } from '../interfaces/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends: user [];
  query: string = '';
  constructor( private userService: UserService) {
   this.friends = userService.getfriends();
    
   }

  ngOnInit() {
  }

}
