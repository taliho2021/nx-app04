import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormArray,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

export interface Importer {
  clientId: string;
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  phone1: number;
  phone2: number;
  website: string;
  email1: string;
}

@Component({
  selector: 'nx-app04-forwarders',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './forwarders.component.html',
  styleUrls: ['./forwarders.component.scss'],
})
export class ForwardersComponent {
  importerForm = this.fb.group({
    clientId: null,
    name: [null, Validators.required],
    address1: [null, Validators.required],
    address2: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
    ],
    country: [null, Validators.required],
    phone1: [null, Validators.required],
    email: [null, Validators.required],
    website: [null, Validators.required],

    bond: this.fb.group({
      effectiveDate: [''],
      bondNo: [''],
      amount: [''],
      suretyCode: [''],
      portFiled: [''],
      holderName: [''],
    }),

    addInfo: this.fb.array([]),
  });

  hasUnitNumber = false;
  importers: Importer[] = [];

  constructor(private fb: UntypedFormBuilder) {}

  get additional() {
    return this.importerForm.controls['addInfo'] as UntypedFormArray;
  }

  addaddInfo() {
    const addtionalInfo = this.fb.group({
      tel2: ['', Validators.required],
      email2: [''],
      tel3: [''],
      email3: [''],
    });
    this.additional.push(addtionalInfo);
  }

  onSubmit(): void {
    console.log(this.importers);

    alert('Thanks!');
  }
}
