import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentService } from './common/dynamic-component.service';
export interface DynamicContentInputs {
  [k: string]: any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dynamic-angular-app';
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;
  constructor(private componentService: DynamicComponentService) {}

  addDynamicComponent() {
    this.componentService
      .getComponentBySelector('lib-publish', this.getModuleLoader())
      .then(componentRef => {
        this.container.insert(componentRef.hostView);
      });
  }

  getModuleLoader() {
    return () =>
    import('./pulgins/pulgin.module').then(m => m.PulginModule);
  }

  addComponentInputs(componentRef: ComponentRef<unknown>, inputs: DynamicContentInputs) {
    if (componentRef && componentRef.instance && inputs) {
      Object.keys(inputs).forEach(p => (componentRef.instance[p] = inputs[p]));
    }
  }

}
