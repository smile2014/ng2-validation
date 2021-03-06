import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

import { CustomValidators } from '../../src';

@Component({
  selector: 'app',
  template: require('./app.html')
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    var password = new FormControl('', Validators.required);
    var certainPassword = new FormControl('');

    this.form = new FormGroup({
      passwordGroup: new FormGroup({
        password: password,
        certainPassword: certainPassword
      }, CustomValidators.equalTo)
    });
  }

  onSubmit(form) {
    console.log(form);
  }
}