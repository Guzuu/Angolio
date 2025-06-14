import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FamilyMember } from '../../../models/family-member.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss'],
  standalone: true,
  imports: [
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,  // Add this import
    MatSlideToggleModule,
  ]
})
export class EditMemberComponent implements OnInit {
  memberForm: FormGroup;
  selectedImage: File | null = null;
  memberId!: string;
  useExactBirthDate = new FormControl(false);
  useExactMarriageDate = new FormControl(false);
  useExactDeathDate = new FormControl(false);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
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
    });
  }

  ngOnInit() {
    this.memberId = this.route.snapshot.paramMap.get('id') || '';
    this.loadMemberData();
  }

  private loadMemberData() {
    // TODO: Load member from your service
    // const member: FamilyMember = /* get member by id */;
    
    // // Determine if dates are full dates or just years
    // const isBirthFullDate = member.birthDate instanceof Date;
    // const isMarriageFullDate = member.marriageDate instanceof Date;
    // const isDeathFullDate = member.deathDate instanceof Date;

    // // Set toggle states
    // this.useExactBirthDate.setValue(isBirthFullDate);
    // this.useExactMarriageDate.setValue(isMarriageFullDate);
    // this.useExactDeathDate.setValue(isDeathFullDate);

    // // Populate form
    // this.memberForm.patchValue({
    //   name: member.name,
    //   surname: member.surname,
    //   birthDate: isBirthFullDate ? member.birthDate : null,
    //   birthYear: !isBirthFullDate ? member.birthDate : null,
    //   marriageDate: isMarriageFullDate ? member.marriageDate : null,
    //   marriageYear: !isMarriageFullDate ? member.marriageDate : null,
    //   deathDate: isDeathFullDate ? member.deathDate : null,
    //   deathYear: !isDeathFullDate ? member.deathDate : null,
    //   gender: member.gender,
    //   motherId: member.motherId,
    //   fatherId: member.fatherId,
    //   additionalInfo: member.additionalInfo
    // });
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
        id: this.memberId,
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
      // TODO: Update member in your service
      this.router.navigate(['/family-tree']);
    }
  }

  onCancel() {
    this.router.navigate(['/family-tree']);
  }
}
