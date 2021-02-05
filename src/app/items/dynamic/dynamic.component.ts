import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Form, Validators, NgForm } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  btnSize: string;
  buttonsForm;
  form;
  options: string[] = ['123456789', '123987456', '789456123', '456789', '2589632', '753215987'];
  filteredOptions: Observable<string[]>;
  formValid: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      sent: [''],
      documentupld: [''],
      datesend: [''],
      comment: [''],
      passportnumber: [''],
      urgent: [''],
      deadline: ['']
    });

    this.buttonsForm = this.fb.group({
      size: [''],
    });

    this.buttonsForm.get('size').valueChanges.subscribe(res => {
      console.log(res);
      this.btnSize = res;
    });

    this.filteredOptions = this.form.get('passportnumber').valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value))
    );

    this.form.get('sent').valueChanges.subscribe(res => {
      if (res === 'sent') {
        this.form.get('passportnumber').disable();
        this.form.get('urgent').disable();
        this.form.get('deadline').disable();
      } else {
        this.form.get('passportnumber').enable();
        this.form.get('urgent').enable();
        this.form.get('deadline').enable();
      }

      if (res === 'not-sent'){
        this.form.get('documentupld').disable();
        this.form.get('datesend').disable();
      } else {
        this.form.get('documentupld').enable();
        this.form.get('datesend').enable();
      }
    });

    this.form.get('urgent').valueChanges.subscribe(res => {
      if (res !== 'urgent'){
        this.form.get('deadline').clearValidators();
        this.form.get('deadline').updateValueAndValidity();
      } else {
        this.form.get('deadline').setValidators(Validators.required);
        this.form.get('deadline').updateValueAndValidity();
      }
    });


  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  updateDocumentField(ev){
    this.form.get('documentupld').setValue('file added !!!');
  }

  send(){
    this.formValid = this.form.status;
  }

  click(ev){
    console.log(ev);

  }

}
