import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { FamilyMember } from '../../../models/family-member.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss'],
  standalone: true,
  imports: [
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    CommonModule,
    MatButtonModule,
  ]
})
export class AddMemberComponent implements OnInit {
  memberForm: FormGroup;
  selectedImage: File | null = null;
  availableMembers: FamilyMember[] = []; // This should be populated from your service
  potentialMothers: FamilyMember[] = [];
  potentialFathers: FamilyMember[] = [];

  useExactBirthDate = new FormControl(false);
  useExactMarriageDate = new FormControl(false);
  useExactDeathDate = new FormControl(false);

  private readonly currentYear = new Date().getFullYear();
  private readonly earliestYear = 1000; // Arbitrary limit for ancestral records

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.memberForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      birthYear: [{ value: null, disabled: false }],
      birthDate: [{ value: null, disabled: true }],
      marriageYear: [{ value: null, disabled: false }],
      marriageDate: [{ value: null, disabled: true }],
      deathYear: [{ value: null, disabled: false }],
      deathDate: [{ value: null, disabled: true }],
      gender: ['', Validators.required],
      motherId: [''],
      fatherId: [''],
      additionalInfo: ['']
    }, { validators: this.dateValidators });

    // Toggle subscriptions
    this.useExactBirthDate.valueChanges.subscribe(useExact => {
      const birthYear = this.memberForm.get('birthYear');
      const birthDate = this.memberForm.get('birthDate');
      if (useExact) {
        birthYear?.disable();
        birthDate?.enable();
      } else {
        birthYear?.enable();
        birthDate?.disable();
      }
    });

    this.useExactMarriageDate.valueChanges.subscribe(useExact => {
      const marriageYear = this.memberForm.get('marriageYear');
      const marriageDate = this.memberForm.get('marriageDate');
      if (useExact) {
        marriageYear?.disable();
        marriageDate?.enable();
      } else {
        marriageYear?.enable();
        marriageDate?.disable();
      }
    });

    this.useExactDeathDate.valueChanges.subscribe(useExact => {
      const deathYear = this.memberForm.get('deathYear');
      const deathDate = this.memberForm.get('deathDate');
      if (useExact) {
        deathYear?.disable();
        deathDate?.enable();
      } else {
        deathYear?.enable();
        deathDate?.disable();
      }
    });
  }

  ngOnInit() {
    // TODO: Load available members for parent selection
    this.loadAvailableMembers();
    this.loadPotentialParents();
  }

  loadAvailableMembers() {
    // TODO: Implement loading members from your data service
  }

  loadPotentialParents() {
    this.http.get('assets/family.csv', { responseType: 'text' })
      .subscribe(csv => {
        const people = this.parseCSV(csv);
        this.potentialMothers = people.filter(p => p.gender === 'Female');
        this.potentialFathers = people.filter(p => p.gender === 'Male');
      });
  }

  parseCSV(csv: string): any[] {
    const lines = csv.trim().split('\n');
    const header = lines[0].split(';');
    return lines.slice(1).map(line => {
      const cols = line.split(';');
      const obj: any = {};
      header.forEach((key, idx) => {
        obj[key] = cols[idx];
      });
      return obj;
    });
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedImage = file;
    }
  }

  onSubmit() {
    if (this.memberForm.valid) {
      const formValue = this.memberForm.value;
      const member: FamilyMember = {
        name: formValue.name,
        surname: formValue.surname,
        gender: formValue.gender,
        motherId: formValue.motherId,
        fatherId: formValue.fatherId,
        additionalInfo: formValue.additionalInfo,
        birthDate: this.useExactBirthDate.value ? formValue.birthDate : formValue.birthYear?.toString(),
        deathDate: this.useExactDeathDate.value ? formValue.deathDate : formValue.deathYear?.toString(),
        marriageDate: this.useExactMarriageDate.value ? formValue.marriageDate : formValue.marriageYear?.toString(),
      };
      const nextId = this.getNextId();
      
      const newEntry = [
        nextId,
        formValue.motherId || 0,
        formValue.fatherId || 0,
        formValue.name,
        formValue.surname,
        formValue.gender,
        this.useExactBirthDate.value ? formValue.birthDate : formValue.birthYear,
        this.useExactDeathDate.value ? formValue.deathDate : formValue.deathYear || ''
      ].join(';');

      this.http.get('assets/family.csv', { responseType: 'text' })
        .subscribe(csv => {
          const newCsv = csv + '\n' + newEntry;
          // Here you would typically call a backend service to save the file
          console.log('New CSV entry:', newEntry);
          this.router.navigate(['/family-tree']);
        });
    }
  }

  private getNextId(): number {
    // You would typically get this from your backend
    return Math.floor(Math.random() * 1000) + 101; // Temporary solution
  }

  onCancel() {
    this.router.navigate(['/family-tree']);
  }

  // Add custom validator for dates
  private dateValidators(group: FormGroup) {
    const birthYear = group.get('birthYear')?.value;
    const birthDate = group.get('birthDate')?.value;
    const deathYear = group.get('deathYear')?.value;
    const deathDate = group.get('deathDate')?.value;
    const marriageYear = group.get('marriageYear')?.value;
    const marriageDate = group.get('marriageDate')?.value;

    if (birthYear && deathYear && Number(birthYear) > Number(deathYear)) {
      return { birthAfterDeath: true };
    }

    if (birthYear && marriageYear && Number(birthYear) > Number(marriageYear)) {
      return { birthAfterMarriage: true };
    }

    if (birthDate && deathDate && new Date(birthDate) > new Date(deathDate)) {
      return { birthAfterDeath: true };
    }

    if (birthDate && marriageDate && new Date(birthDate) > new Date(marriageDate)) {
      return { birthAfterMarriage: true };
    }

    return null;
  }
}
