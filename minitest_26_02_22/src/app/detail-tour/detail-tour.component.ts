import { Component, OnInit } from '@angular/core';
import {Tour} from "../model/tour";
import {Service} from "../service/Service";

@Component({
  selector: 'app-detail-tour',
  templateUrl: './detail-tour.component.html',
  styleUrls: ['./detail-tour.component.css']
})
export class DetailTourComponent implements OnInit {
  tours: Tour[] = [];
  constructor(private tourService: Service) {
    this.tours = tourService.tours;
  }

  ngOnInit(): void {
  }

}
