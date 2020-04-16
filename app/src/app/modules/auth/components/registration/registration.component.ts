import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  registrationGroup: FormGroup;
  isLoading = false;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit() {
    this.registrationGroup = this._fb.group({
      userName:     ['', [Validators.minLength(6), Validators.required]],
      email:        ['', [Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/), Validators.required]],
      password:     ['', [Validators.minLength(6), Validators.pattern(/(\w+)?(?=[A-Z])\w+/g), Validators.required]],
    });
  }

  onSubmit(): void {
    this.isLoading = true;
    this.authService.registration(this.registrationGroup.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.router.navigate(['/account']);
      }, (err) => {
        // errors
        this.isLoading = false;
      });
  }

}
