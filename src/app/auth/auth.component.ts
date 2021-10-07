import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-auth",
  templateUrl: "auth.component.html",
  styles: [],
})
export class AuthComponent implements OnInit, OnDestroy {
  constructor() {}
  
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit(): void {}
}
