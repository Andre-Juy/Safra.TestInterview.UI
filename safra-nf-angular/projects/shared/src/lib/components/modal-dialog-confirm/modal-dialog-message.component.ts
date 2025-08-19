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
      <button class="btn-confirm-modal-confirm" mat-raised-button color="primary" (click)="confirm()">Ok</button>
    </mat-dialog-actions>
    </div>
  `
})
export class ModalDialogMessageComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalDialogMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }
  ) {}

  confirm() {
    this.dialogRef.close(true);
  }
}
