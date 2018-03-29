import { Component, OnInit } from '@angular/core';
import { Apigit } from '../apigit';
import { ApigitService } from '../apigit.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  // selectedIssue: Apigit;
  issues: Apigit[];
  title:string;
  body: string;
  labels: string[];

  constructor(private apigitService: ApigitService) {
    this.apigitService.getIssues()
      .subscribe(issues => {
        this.issues = issues;
      })
  }

  ngOnInit() {
  }

  addIssue(event){
    event.preventDefault();
    const newIssue: Apigit = {
      title: this.title,
      body: this.body,
      labels: ["bug"]
    };

    this.apigitService.addIssue(newIssue)
      .subscribe(issue => {
        console.log(this.issues)
        this.issues.unshift(issue);
      });
  }
}
