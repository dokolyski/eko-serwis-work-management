import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
  form = this.fb.group({
    mobile: [null, Validators.required],
    password: [null, [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  login(): void {}
}
