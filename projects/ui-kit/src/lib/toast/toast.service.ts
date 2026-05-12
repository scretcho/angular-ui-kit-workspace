import { Injectable, signal } from '@angular/core';

export type ToastVariant = 'success' | 'danger' | 'warning' | 'info';
export type ToastPosition =
  | 'top-right' | 'top-left' | 'top-center'
  | 'bottom-right' | 'bottom-left' | 'bottom-center';

export interface ToastItem {
  id: string;
  message: string;
  title?: string;
  variant: ToastVariant;
  duration: number;
  icon?: string;
}

@Injectable({ providedIn: 'root' })
export class UkToastService {
  private _toasts = signal<ToastItem[]>([]);
  readonly toasts = this._toasts.asReadonly();

  show(item: Omit<ToastItem, 'id'> & { id?: string }): string {
    const id = item.id ?? crypto.randomUUID();
    this._toasts.update(list => [...list, { ...item, id }]);
    if (item.duration > 0) {
      setTimeout(() => this.dismiss(id), item.duration);
    }
    return id;
  }

  success(message: string, title?: string, duration = 4000): string {
    return this.show({ message, title, variant: 'success', duration, icon: 'check-circle-fill' });
  }

  error(message: string, title?: string, duration = 6000): string {
    return this.show({ message, title, variant: 'danger', duration, icon: 'exclamation-circle-fill' });
  }

  warning(message: string, title?: string, duration = 5000): string {
    return this.show({ message, title, variant: 'warning', duration, icon: 'exclamation-triangle-fill' });
  }

  info(message: string, title?: string, duration = 4000): string {
    return this.show({ message, title, variant: 'info', duration, icon: 'info-circle-fill' });
  }

  dismiss(id: string): void {
    this._toasts.update(list => list.filter(t => t.id !== id));
  }
}
