import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<br/>'
})
export abstract class BaseFormComponent {

  formulario: FormGroup;

  constructor() { }

  abstract submit(): void;

  onSubmit() {

    this._verificarValidacoesForm(this.formulario);

    if (this.formulario.valid)
      this.submit();
  }

  private _verificarValidacoesForm(formGroup: FormGroup | FormArray) {

    Object.keys(formGroup.controls).forEach(campo => {

      const controle = formGroup.get(campo);
      controle?.markAsDirty();

      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this._verificarValidacoesForm(controle);
      }

    });

  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo)?.valid &&
      (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)
    );
  }

  verificaRequired(campo: string) {
    return (
      this.formulario.get(campo)?.hasError('required') &&
      (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)
    );
  }

  aplicaCssErro(campo: string) {
    return {
      'has-invalid': this.verificaValidTouched(campo)
    }
  }

}
