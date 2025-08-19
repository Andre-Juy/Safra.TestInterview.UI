import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'shared-modal-dialog',
  imports: [CommonModule, MatDialogModule],
  template: `
    <div class="modal-confirm">
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>{{ data.message }}</mat-dialog-content>
    <mat-dialog-actions align="end">
      <button class="btn-cancel-modal-confirm" mat-button mat-dialog-close>Cancelar</button>
      <button class="btn-confirm-modal-confirm" mat-raised-button color="primary" (click)="confirm()">Confirmar</button>
    </mat-dialog-actions>
    </div>
  `
})
export class ModalDialogConfirmComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalDialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }
  ) {}

  confirm() {
    this.dialogRef.close(true);
  }
}
