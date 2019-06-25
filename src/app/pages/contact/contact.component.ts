import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public submissionUrl = '//formcarry.com/s/gwUjWSepyrl';
  public contactForm: FormGroup;
  public successFlag: boolean;

  public services = [
    { id: 'dayof', name: 'Day Of' },
    { id: 'suites', name: 'Suites' },
    { id: 'envelopes', name: 'Envelopes' },
    { id: 'custom', name: 'Custom' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [ Validators.required ]],
      email: ['', [ Validators.required, Validators.email ]],
      message: ['', []],
      services: new FormArray(
        this.services.map(c => new FormControl(false))
      )
    });
  }

  hasError(field, validation = null) {
    const control = this.contactForm.get(field);
    const invalid = control.invalid && control.touched;
    return validation
        ? invalid && control.errors && control.errors[validation]
        : invalid;
  }

  serviceSelected(ix: number): boolean {
    return this.servicesRequired.value[ix];
  }

  submitInquiry = (event: Event) => {
    // Run Validations for all fields to prompt user if necessary
    Object.values(this.contactForm.controls).forEach(this.markControlAsTouched);

    if (this.contactForm.valid) {
      const selectedServices = this.contactForm.value.services
        .map((v, i) => v ? this.services[i].id : null)
        .filter(v => v !== null);

      const formData: FormData = new FormData();
      // formData.append('services', this.servicesRequired.value);
      formData.append('name', this.contactForm.get('name').value);
      formData.append('email', this.contactForm.get('email').value);
      formData.append('message', this.contactForm.get('message').value);
      formData.append('services', selectedServices);

      this.submit(formData);
    }
  }

  private get servicesRequired() {
    return this.contactForm.get('services') as FormArray;
  }

  private submit = (data: FormData) => {
    return this.httpClient.post(this.submissionUrl, data, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    }).subscribe((r: any) => {
      this.successFlag = true;

      // Reset success flag
      setTimeout(() => { this.successFlag = false; }, 5000);

      this.contactForm.reset();
    });
  }

  private markControlAsTouched(control: FormControl) {
    control.markAsTouched();
  }
}
