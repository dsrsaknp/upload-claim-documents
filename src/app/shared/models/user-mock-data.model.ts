import { DocModel } from './doc.model';

export class UserMockData {
    constructor(
        public id: number,
        public patientName: string,
        public claimNumber: number,
        public dateSubmitted: string,
        public documentStatus: string,
        public certificates: DocModel[],
        public medicalReports: DocModel[]
    ) {}
}