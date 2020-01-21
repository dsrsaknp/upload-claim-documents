import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserMockData } from '../models/user-mock-data.model';

export class UserData implements InMemoryDbService {
    createDb() {
        const users: UserMockData[] = [
            {
                id: 1,
                patientName: 'John Smith',
                claimNumber: 121212,
                dateSubmitted: '11/32/2009',
                documentStatus: 'Completed',
                certificates: [
                    { fileName: 'Certificate1.pdf', fileSize: '2 MB' },
                    { fileName: 'Certificate2.pdf', fileSize: '3 MB' },
                    { fileName: 'Certificate3.pdf', fileSize: '2.1 MB' }
                ],
                medicalReports: [
                    { fileName: 'Medical1.pdf', fileSize: '1 MB' },
                    { fileName: 'Medical2.pdf', fileSize: '1.4 MB' },
                    { fileName: 'Medical3.pdf', fileSize: '2 MB' }
                ]
            },
            {
                id: 2,
                patientName: 'Steve B',
                claimNumber: 121213,
                dateSubmitted: '11/32/2009',
                documentStatus: 'Additional Info Required',
                certificates: [],
                medicalReports: [
                    { fileName: 'Medical1.pdf', fileSize: '1 MB' },
                    { fileName: 'Medical2.pdf', fileSize: '1.4 MB' },
                    { fileName: 'Medical3.pdf', fileSize: '2 MB' }
                ]
            },
            {
                id: 3,
                patientName: 'John Smith',
                claimNumber: 121212,
                dateSubmitted: '11/32/2009',
                documentStatus: 'Not Received',
                certificates: [
                    { fileName: 'Certificate1.pdf', fileSize: '2 MB' },
                    { fileName: 'Certificate2.pdf', fileSize: '3 MB' },
                    { fileName: 'Certificate3.pdf', fileSize: '2.1 MB' }
                ],
                medicalReports: []
            },
            {
                id: 4,
                patientName: 'John Smith',
                claimNumber: 121212,
                dateSubmitted: '11/32/2009',
                documentStatus: 'Additional Info Required',
                certificates: [
                    { fileName: 'Certificate1.pdf', fileSize: '2 MB' },
                    { fileName: 'Certificate2.pdf', fileSize: '3 MB' }
                ],
                medicalReports: [
                    { fileName: 'Medical1.pdf', fileSize: '1 MB' },
                    { fileName: 'Medical2.pdf', fileSize: '1.4 MB' }
                ]
            }
        ];
        return {users};
    }
}
