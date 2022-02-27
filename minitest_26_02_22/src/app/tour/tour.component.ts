import {Component, Injectable, OnInit} from '@angular/core';
import {Tour} from "../model/tour";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Service} from "../service/Service";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
// @Injectable({ providedIn: 'root' })
export class TourComponent implements OnInit {
tours: Tour[] = [];
id: number = 0;
name: string ="";
price : number = 0;
description: string = "";
// formCrate!: FormGroup;

  constructor(private tourService: Service) {
    this.tours = this.tourService.tours;
  }
  tour:Tour = new Tour(0,"",0,"");

  ngOnInit(){
// this.formCrate = new FormGroup({
//   id: new FormControl(null, Validators.required),
//   name:new FormControl('', Validators.minLength(3)),
//   price: new FormControl(0, Validators.min(0)),
//   description: new FormControl(),
//   })
  }

  showEdit(id: number){
    for (let i = 0; i < this.tours.length; i++) {
      if (this.tours[i].id == id){
        this.id = this.tours[i].id;
        this.name = this.tours[i].name;
        this.price = this.tours[i].price;
        this.description = this.tours[i].description;
        // return this.tours[i].id;
        return;
      }
    }
  }

  createTour(){
    this.tours.push(new Tour(this.id, this.name, this.price, this.description));
    this.id = 0;
    this.name ="";
    this.price  = 0;
    this.description = "";
  // this.tourService.create(this.formCrate.value);
  // this.formCrate.reset();
  }

  edit(){
    this.tourService.create(new Tour(this.id, this.name, this.price, this.description));
  }
  delete(id: number){
this.tourService.delete(id);
  }
  showDetails(t: Tour) {    this.tour = new Tour(t.id,t.name,t.price,t.description)  }
}
