import { Component,OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit{
employees: Employee[] = [
  {
    id:'4hj234-4j3h2k423-4324-32hj4hj',
    name:'tito',
    email:'tito@email.com',
    phone:291223344,
    salary:6000,
    department:'RR.HH'
  },
  {
    id:'6n5m56-76nmgh-65nm65nm-6nmnhg5',
    name:'tucci',
    email:'tucci@email.com',
    phone:291323324,
    salary:5000,
    department:'SOURCING'
  },  {
    id:'12hj1-132m3k-123mkkhjhg-2131231m',
    name:'salgueiro-kun',
    email:'salgueirok@email.com',
    phone:111223244,
    salary:9000,
    department:'TECH'
  }
];
  constructor(){}

  ngOnInit(): void{

    

  }

}
