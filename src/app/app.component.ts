import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
userForm= new FormGroup({
  username: new FormControl(null,
     [Validators.required, Validators.minLength(3), Validators.maxLength(6)]),
  password: new FormControl(null, Validators.required)
});

public submitData(){
  console.log(this.userForm);
  let obj={
      user:this.userForm.get('username')?.value,
      password:this.userForm.get('password')?.value
  };
  console.log(obj);
  
}


}
