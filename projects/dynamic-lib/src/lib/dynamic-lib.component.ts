import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentService } from './common/dynamic-component.service';
export interface DynamicContentInputs { [k: string]: any; }

@Component({
  selector: 'lib-dynamic-lib',
  template: `
    <h3>
      Dynamic-lib works!
    </h3>
    <p>
	      Add a component Dynamically using Dynamic Component Service
    </p>
    <button (click)="addDynamicComponent()">Add Dynamic Component</button>
    <div #container></div>
  `,
  styles: [
  ]
})
export class DynamicLibComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;
  constructor(private componentService: DynamicComponentService) { }

  ngOnInit(): void {
  }

  addDynamicComponent() {
    this.componentService
      .getComponentBySelector('lib-publish', this.getModuleLoader())
      .then((componentRef) => {
        this.container.insert(componentRef.hostView);
      });
  }

  getModuleLoader() {
    return () => import('./pulgins/pulgin.module').then((m) => m.PulginModule);
  }


}
