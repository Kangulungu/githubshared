import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Console } from 'console';
import { ToastrService } from 'ngx-toastr';
import { RobotDetailService } from 'src/app/shared/robot-detail.service';

@Component({
  selector: 'app-robot-detail',
  templateUrl: './robot-detail.component.html',
  styles: []
})
export class RobotDetailComponent implements OnInit {

  constructor(private service:RobotDetailService,
              private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.resetForm();
    
  }
  resetForm(form?:NgForm){
    if(form != null)
    form.resetForm();

    this.service.formData = {
        RobotId:0,
        Reference:'',
        Name:'',
        Price:0    
    }
  }
  onSubmit(form:NgForm){
    if(this.service.formData.RobotId==0)
    this.insertRecords(form);
    else
    this.updateRecords(form);
  }
  insertRecords(form:NgForm){
    this.service.postRobotDetail().subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.success('Submitted successfully','Robots Detail')
        this.service.refreshList();
      },
      err =>{console.log(err);
      }
    )
  }
  updateRecords(form:NgForm){
    this.service.putRobotDetail().subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.info('Submitted successfully','Robots Detail')
        this.service.refreshList();
      },
      err =>{console.log(err);
      }
    )
  }
}
