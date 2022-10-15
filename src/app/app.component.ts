import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
userForm= new FormGroup({
  username: new FormControl(null),
  password: new FormControl(null)
});

public submitData(){
  console.log(this.userForm);
}


}
