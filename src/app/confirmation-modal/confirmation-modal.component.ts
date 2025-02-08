import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmation-modal',
  imports: [CommonModule],
  templateUrl: './confirmation-modal.component.html',
})
export class ConfirmationModalComponent {
  @Input() message: string = 'Tem certeza que deseja excluir este item?';
  @Input() isOpen: boolean = false;
  @Output() confirmed = new EventEmitter<boolean>();
  @Output() canceled = new EventEmitter<void>();
  @Output() isOpenChange = new EventEmitter<boolean>();

  onConfirm() {
    this.confirmed.emit(true);
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }

  onCancel() {
    this.canceled.emit();
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }
}
