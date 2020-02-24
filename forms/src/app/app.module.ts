import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import  {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';
import { NewFormComponent } from './new-form/new-form.component';
import { TemFormComponent } from './tem-form/tem-form.component';
import { NewReactComponent } from './new-react/new-react.component';
import { FormAbComponent } from './form-ab/form-ab.component';
import { FormArrComponent } from './form-arr/form-arr.component';
 
@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent,
    NewFormComponent,
    TemFormComponent,
    NewReactComponent,
    FormAbComponent,
    FormArrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path : 'template', component: TemplateComponent},
      {path : 'reactive', component: ReactiveComponent},
      {path: 'new-form', component: NewFormComponent},
      {path: 'tem-form', component: TemFormComponent},
      {path: 'form-ab', component: FormAbComponent},
      {path:'form-arr' , component: FormArrComponent}
    ])
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
