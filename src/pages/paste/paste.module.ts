import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastePage } from './paste';

@NgModule({
  declarations: [
    PastePage,
  ],
  imports: [
    IonicPageModule.forChild(PastePage),
  ],
  exports: [
    PastePage
  ]
})
export class PastePageModule {}
