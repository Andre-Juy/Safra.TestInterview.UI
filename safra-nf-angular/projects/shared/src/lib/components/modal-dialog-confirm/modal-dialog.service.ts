import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogConfirmComponent } from './modal-dialog-confirm.component';
import { ModalDialogMessageComponent } from './modal-dialog-message.component';

@Injectable({ providedIn: 'root' })
export class ModalDialogService {
  private dialog = inject(MatDialog);

  open(title: string, message: string) {
    return this.dialog.open(ModalDialogConfirmComponent, {
      data: { title, message },
      width: '400px',
    }).afterClosed();
  }

  openMessage(title: string, message: string) {
    return this.dialog.open(ModalDialogMessageComponent, {
      data: { title, message },
      width: '400px',
    }).afterClosed();
  }

}