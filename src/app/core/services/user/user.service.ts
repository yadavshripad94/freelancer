import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAPIResponce } from '../../models/interface/master';
import { environment } from '../../../../environments/environment.development';
import { Constant } from '../../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<IAPIResponce>{
    return this.http.get<IAPIResponce>(environment.API_URL + Constant.API_METHOD_NAME.USER.GET_ALL_USERS);
  }
}
