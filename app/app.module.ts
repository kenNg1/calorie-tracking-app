import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { DisplayComponent} from './display.component';
import { NewComponent} from './new.component';
import { EditComponent} from './edit.component';
import { FilterPipe} from './filter.pipe';
import { TotalComponent } from './total.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    DisplayComponent,
    NewComponent,
    EditComponent,
    FilterPipe,
    TotalComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
