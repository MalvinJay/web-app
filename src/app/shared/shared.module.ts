import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    LoaderComponent,
    FileUploadComponent,
    DeleteDialogComponent
  ],
  exports: [
    CommonModule,
    FileUploadComponent,
    LoaderComponent,
    MaterialModule
  ],
  entryComponents: [
    DeleteDialogComponent
  ]
})
export class SharedModule { }