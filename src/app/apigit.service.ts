import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/Rx';

import { Apigit } from './apigit';
// import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApigitService {
  constructor(
    // private messageService: MessageService,
    private http: HttpClient
  ) { }

  private urlAPI = 'https://api.github.com/repos/FranciscoBarranco/pruebaLinio_FranciscoBarranco/issues';

  getIssues(): Observable<Apigit[]> {
    return this.http.get<Apigit[]>(this.urlAPI)
      .map(res => res);
  }

  addIssue(newIssue:Apigit) {
    console.log(newIssue);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic RnJhbmNpc2NvQmFycmFuY286Tm9ub25vbjA='
      })
    };
    return this.http.post<Apigit>('https://api.github.com/repos/FranciscoBarranco/pruebaLinio_FranciscoBarranco/issues', newIssue, httpOptions)
      .map(res => res);
  }

  deleteIssue(id){
    return this.http.delete('https://api.github.com/repos/octocat/hello-world/issues'+`${id}`)
      .map(res => res);
  }
  updateIssue(newIssue){
    return this.http.put('https://api.github.com/repos/octocat/hello-world/issues'+`${newIssue.id}`, newIssue)
      .map(res => res);
  }
}
