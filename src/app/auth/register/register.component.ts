import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  Validators,
  ValidationErrors,
} from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "register.component.html",
})
export class RegisterComponent implements OnInit {
  form = this.fb.group(
    {
      name: [null, Validators.required],
      mobile: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      repeatPassword: [null, [Validators.required, Validators.minLength(6)]],
    },
    { validators: [this.matchPassword] }
  );

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  register(): void {
    console.log("register");
  }

  private matchPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get("password")?.value;
    const repeatPassword = control.get("repeatPassword")?.value;
    if (password !== repeatPassword) {
      return { noMatch: true };
    }
    return null;
  }
}
