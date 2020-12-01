import { Injectable } from '@angular/core';
import { RobotDetail } from './robot-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RobotDetailService {
  formData:RobotDetail
  readonly rootURL = 'http://localhost:62986/api';
  list : RobotDetail[];

  constructor(private http:HttpClient) { }

  postRobotDetail(){
    return this.http.post(this.rootURL+'/Robots',this.formData)
  }
  putRobotDetail(){
    return this.http.put(this.rootURL+'/Robots/'+this.formData.RobotId,this.formData)
  }
  deleteRobotDetail(id){
    return this.http.delete(this.rootURL+'/Robots/'+id)
  }

  refreshList(){
     this.http.get(this.rootURL+'/Robots')
    .toPromise()
    .then(res =>this.list = res as RobotDetail[] )
  }
}
