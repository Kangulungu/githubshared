import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { RobotDetailsComponent } from './robot-details/robot-details.component';
import { RobotDetailComponent } from './robot-details/robot-detail/robot-detail.component';
import { RobotDetailListComponent } from './robot-details/robot-detail-list/robot-detail-list.component';
import { RobotDetailService } from './shared/robot-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    RobotDetailsComponent,
    RobotDetailComponent,
    RobotDetailListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [RobotDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
