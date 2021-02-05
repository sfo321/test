import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule} from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ViewContainerComponent} from './view.container/view.container.component';
import {CommonService} from './common.service';
import {ButtonComponent} from './custom.button/button.component';

const modules = [
  CommonModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatCardModule,
  MatTableModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  FormsModule
];

@NgModule({
  imports: [...modules],
  providers: [CommonService],
  declarations: [ViewContainerComponent, ButtonComponent],
  exports: [ViewContainerComponent, ButtonComponent,  ...modules],
})
export class AppCommonModule {}
