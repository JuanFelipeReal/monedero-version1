import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecuperarContrasenaComponent } from './modal-recuperar-contrasena.component';

describe('ModalRecuperarContrasenaComponent', () => {
  let component: ModalRecuperarContrasenaComponent;
  let fixture: ComponentFixture<ModalRecuperarContrasenaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRecuperarContrasenaComponent]
    });
    fixture = TestBed.createComponent(ModalRecuperarContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
