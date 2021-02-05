import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
  providers: [FormBuilder]
})
export class DynamicComponent implements OnInit {

  btnSize: string;
  buttonsForm: FormGroup;
  form: FormGroup;
  options: string[] = ['4511267894564', '25833129632', '94453215987', '71546783564774', '1225999244582', '664429563547', '127728344323', '9760035423444', '1243456789', '12439874567', '7894756123', '99942934623'];
  filteredOptions: string[];
  formValid: string;
  urgent: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.buttonsForm = this.fb.group({size: ['']});

    this.form = this.fb.group({
      sent: [''],
      docId: [''],
      date: [''],
      comment: [''],
      passId: [''],
      urgent: [''],
      deadline: ['']
    });

    this.buttonsForm.get('size').valueChanges.subscribe(res => {
      this.btnSize = res;
    });

    this.form.get('passId').valueChanges.subscribe(res => {
      this.filteredOptions = this.filter(res);
    });

    this.form.get('sent').valueChanges.subscribe(res => {
      const sent = res === 'sent' ? 'disable' : 'enable';
      const notSent = res === 'not-sent' ? 'disable' : 'enable';
      ['passId', 'urgent', 'deadline'].forEach(x => this.form.get(x)[sent]());
      ['docId', 'date'].forEach(x => this.form.get(x)[notSent]());
    });

    this.form.get('urgent').valueChanges.subscribe(res => this.urgent = res === 'urgent');
  }

  private filter(value: string): string[] {
    return value ? this.options.filter(o => o.toLowerCase().indexOf(value.toLowerCase()) === 0) : this.options;
  }

  updateDocumentField(ev){
    if (ev.target.files[0]) {
      this.form.controls.docId.patchValue(ev.target.files[0].name, {emitEvent: false});
    }
  }

  send(){
    this.formValid = this.form.status;
  }
}
