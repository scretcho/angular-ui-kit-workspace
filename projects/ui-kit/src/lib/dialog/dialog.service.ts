import {
  ApplicationRef, ComponentRef, createComponent,
  EmbeddedViewRef, EnvironmentInjector, inject, Injectable
} from '@angular/core';
import { AlertDialogConfig, ConfirmDialogConfig, DialogVariant } from '../shared/types';
import { UkAlertDialogComponent } from './alert-dialog.component';
import { UkConfirmDialogComponent } from './confirm-dialog.component';

@Injectable({ providedIn: 'root' })
export class UkDialogService {
  private readonly appRef    = inject(ApplicationRef);
  private readonly injector  = inject(EnvironmentInjector);

  /* ── Internal: mount component into body ── */
  private mount<T>(ref: ComponentRef<T>): HTMLElement {
    this.appRef.attachView(ref.hostView);
    const host = (ref.hostView as EmbeddedViewRef<unknown>).rootNodes[0] as HTMLElement;
    document.body.appendChild(host);
    ref.changeDetectorRef.detectChanges();
    return host;
  }

  private destroy<T>(ref: ComponentRef<T>, host: HTMLElement) {
    this.appRef.detachView(ref.hostView);
    ref.destroy();
    host.remove();
  }

  /* ── Alert dialog (info / success / error / warning) ── */
  alert(config: AlertDialogConfig): Promise<void> {
    return new Promise(resolve => {
      const ref = createComponent(UkAlertDialogComponent, { environmentInjector: this.injector });
      ref.setInput('config', config);
      const host = this.mount(ref);
      ref.instance.closed.subscribe(() => { this.destroy(ref, host); resolve(); });
    });
  }

  info(message: string, options: Partial<Omit<AlertDialogConfig, 'variant' | 'message'>> = {}): Promise<void> {
    return this.alert({ ...options, variant: 'info', message });
  }

  success(message: string, options: Partial<Omit<AlertDialogConfig, 'variant' | 'message'>> = {}): Promise<void> {
    return this.alert({ ...options, variant: 'success', message });
  }

  error(message: string, options: Partial<Omit<AlertDialogConfig, 'variant' | 'message'>> = {}): Promise<void> {
    return this.alert({ ...options, variant: 'error', message });
  }

  warning(message: string, options: Partial<Omit<AlertDialogConfig, 'variant' | 'message'>> = {}): Promise<void> {
    return this.alert({ ...options, variant: 'warning', message });
  }

  /* ── Confirmation dialog ── */
  confirm(config: ConfirmDialogConfig): Promise<boolean> {
    return new Promise(resolve => {
      const ref = createComponent(UkConfirmDialogComponent, { environmentInjector: this.injector });
      ref.setInput('config', config);
      const host = this.mount(ref);
      ref.instance.closed.subscribe((result: boolean) => { this.destroy(ref, host); resolve(result); });
    });
  }
}
