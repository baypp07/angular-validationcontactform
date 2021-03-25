import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-validationform",
  templateUrl: "./validationform.component.html",
  styleUrls: ["./validationform.component.css"]
})
export class ValidationformComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ["", Validators.required],
      lastname: ["", Validators.required]
    });
  }
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert(
      "Succes!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
    );
    this.submitted = false;
    this.registerForm.reset();
  }
}
