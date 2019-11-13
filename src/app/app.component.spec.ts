import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  ModalModule,
  IconModule,
  ButtonModule,
  ProgressIndicatorsModule,
  PopModule,
  FormFieldModule,
  InputModule
} from '@healthcatalyst/cashmere';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        IconModule,
        ButtonModule,
        ModalModule,
        ProgressIndicatorsModule,
        PopModule,
        InputModule,
        FormFieldModule,
        FormsModule
      ],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should create the app 2', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should create the app 3', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should create the app 4', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should create the app 5', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
