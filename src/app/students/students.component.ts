import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

    allowNewStudent = false;
    studentCreationStatus = 'No student created!';
    studentNewName = '';
    studentCreated = false;

    studentList = [
        {
            studentId: '9958',
            studentName: 'bamossza',
            studentStatus: 'จบแล้ว'
        },
        {
            studentId: '9959',
            studentName: 'DekDee',
            studentStatus: 'กำลังศึกษา'
        },
        {
            studentId: '9960',
            studentName: 'Zeza',
            studentStatus: 'จบแล้ว'
        }
    ];

    constructor() {

        setTimeout(() => {
            this.allowNewStudent = true;
        }, 3000);

    }

    ngOnInit() {

    }

    getColorStatus(status: string) {
        return status === 'จบแล้ว' ? 'green' : 'red';
    }

    onUpdateStudentName(event: Event) {
        this.studentNewName = (<HTMLInputElement>event.target).value;
    }

    onCreateStudent() {
        this.studentCreated = true;
        this.studentCreationStatus = 'Student created';
    }

    onGetId() {
        // return this.studentId;
    }

    onGetName() {
        // return this.studentName;
    }
}
