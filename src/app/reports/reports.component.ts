import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { MockDataService } from '../shared/services/mock-data.service';
import { UserMockData } from '../shared/models/user-mock-data.model';
import { DocModel } from '../shared/models/doc.model';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  public userClaimObj: UserMockData;
  public isCertificateUploaded = false;
  public isMedicalUploaded = false;
  public userId: number;
  public fileToUpload: File = null;
  public filename: string;
  public fileSizeInMb: string;
  public newFile: DocModel;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit() {
    this.userId = history.state.id;
    console.log(history.state);
    if (history.state.navigationId === 1) {
      this.router.navigate(['/claims-status']);
    }
    this.getSelectedUser();
  }

  public getSelectedUser() {
    const userIdToFetch = this.userId + 1;
    this.dataService.getUser(userIdToFetch).subscribe(data => {
      this.userClaimObj = data;
      this.isCertificateUploaded = this.userClaimObj.certificates.length > 0 ? true : false;
      this.isMedicalUploaded = this.userClaimObj.medicalReports.length > 0 ? true : false;
    });
  }

  public handleFileInput(files: FileList, docCategory: string) {
    this.fileToUpload = files.item(0);
    this.filename = this.fileToUpload.name;
    this.fileSizeInMb = (this.fileToUpload.size / (1024 * 1024)).toFixed(2) + ' MB';
    this.newFile = {
      fileName: this.filename,
      fileSize: this.fileSizeInMb
    };
    if (docCategory === 'Certificates') {
      this.userClaimObj.certificates.push(this.newFile);
      this.isCertificateUploaded = this.userClaimObj.certificates.length > 0 ? true : false;
    }
    if (docCategory === 'MedicalReports') {
      this.userClaimObj.medicalReports.push(this.newFile);
      this.isMedicalUploaded = this.userClaimObj.medicalReports.length > 0 ? true : false;
    }
    this.updateUserObj(this.userClaimObj);
  }

  public updateUserObj(userObj: UserMockData) {
    this.dataService.updateUser(userObj).subscribe(data => {
      this.userClaimObj = data;
    });
  }

  public deleteDocument(docId: number, docCategory: string) {
    if (docCategory === 'Certificates') {
      this.userClaimObj.certificates = this.userClaimObj.certificates.filter((doc, i) => {
        return docId !== i;
      });
      this.isCertificateUploaded = this.userClaimObj.certificates.length > 0 ? true : false;
    }
    if (docCategory === 'MedicalReports') {
      this.userClaimObj.medicalReports = this.userClaimObj.medicalReports.filter((doc, i) => {
        return docId !== i;
      });
      this.isMedicalUploaded = this.userClaimObj.medicalReports.length > 0 ? true : false;
    }
    this.updateUserObj(this.userClaimObj);
  }
  public goBack() {
    this.router.navigate(['/claims-status']);
  }
}
