import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPastesPage } from './my-pastes';

@NgModule({
  declarations: [
    MyPastesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPastesPage),
  ],
  exports: [
    MyPastesPage
  ]
})
export class MyPastesPageModule {}
