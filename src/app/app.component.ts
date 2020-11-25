import { Component } from '@angular/core';

interface User {
  username: string;
  password: string;
  confirmPassword?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'udemy-study-app';
}

// let user: User;
// user = {username: "arjun", password: "1234"};

// console.log(user.username);
// console.log(user.password);

// let numberArray: Array<number>;

// numberArray = [2,5,8];
// console.log(numberArray);
