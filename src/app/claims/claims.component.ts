import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserMockData } from '../shared/models/user-mock-data.model';
import { DataService } from '../shared/services/data.service';
import { UserData } from '../shared/services/user-data.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {

  claims: UserData[];
  constructor(private router: Router,
              private dataService: DataService) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.dataService.getListOfUsers().subscribe(data => {
      this.claims = data;
    });
  }
  public showDetails(documentId: number) {
    this.router.navigateByUrl('/uploaded-documents', { state: { id: documentId } });
  }
}
