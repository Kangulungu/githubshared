import { Component, OnInit } from '@angular/core';
import { RobotDetail } from 'src/app/shared/robot-detail.model';
import { RobotDetailService } from 'src/app/shared/robot-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-robot-detail-list',
  templateUrl: './robot-detail-list.component.html',
  styles: [
  ]
})
export class RobotDetailListComponent implements OnInit {

  constructor(private service: RobotDetailService,
    private toastr: ToastrService) {
      

   }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(rd:RobotDetail){
    this.service.formData = Object.assign({},rd);
  }
  onDelete(RobotId){
    if(confirm("Are you sure to delete this record ?")){
    this.service.deleteRobotDetail(RobotId)
    .subscribe(res =>{
      this.service.refreshList();
      this.toastr.warning('Deleted successfully','Robots Detail')
    },
    err =>{console.log(err);
    })
  }
  }
}
