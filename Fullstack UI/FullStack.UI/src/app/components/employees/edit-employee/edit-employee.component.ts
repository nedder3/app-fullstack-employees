import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{

  constructor(private rout: ActivatedRoute){}

  ngOnInit(): void{

    this.rout.paramMap.subscribe({
      next: (params) =>{
        params.get()
      }
    })


  }

}
