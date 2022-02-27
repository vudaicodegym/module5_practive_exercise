import {Tour} from "../model/tour";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class Service{
tours: Tour[] = [];
constructor( ) {
  this.tours.push(new Tour(1, "ha noi", 500, "thủ đô ngàn năm văn vở"))
  this.tours.push(new Tour(2, "sai gon", 600, "sài gòn đau lòng quá!!"))
  this.tours.push(new Tour(3, "da nang", 4500, "thành phố đáng sống nhất việt nam"))
}
create(tour: Tour){
  for (let i = 0; i < this.tours.length; i++) {
    if (tour.id === this.tours[i].id){
      this.tours[i] = tour;
      return
    }
  }
  this.tours.push(tour);
}
delete(id: number){
  for (let i = 0; i < this.tours.length; i++) {
    if (this.tours[i].id == id){
      this.tours.splice(i, 1);
      return
    }
    console.log("không xóa được")
  }
}
}
