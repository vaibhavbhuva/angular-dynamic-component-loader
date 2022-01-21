import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishComponent } from './publish/publish.component';
import { BaseModule } from '../common/base-module';

@NgModule({
  declarations: [PublishComponent],
  imports: [
    CommonModule
  ]
})
export class PulginModule extends BaseModule {
  dynamicComponents = [PublishComponent];

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
}
