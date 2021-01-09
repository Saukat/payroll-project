import { NgModule } from '@angular/core';

import {MatButtonModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
const MaterialComponents =[
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]

})
export class MaterialModule { }
