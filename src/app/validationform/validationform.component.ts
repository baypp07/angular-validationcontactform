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
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]
      ],
      phone: ["", Validators.required],
      message: ["", Validators.required]
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
