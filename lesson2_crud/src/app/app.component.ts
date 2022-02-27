import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myDemo';

  student: Student = new Student(0, "", "", "", "", "");

  list: Student[] = [
    new Student(1, 'dai', 'earth', "0123456789", "123@321", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxUAQG5JABQDUYBwxeM9OEBnh4jrb8wrJrw&usqp=CAU'),
    new Student(2, 'dai1', 'mars', "0987654321", "abc@xyz", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaqJKH_l3BrOMCqFCscRLEED4HTUxp1iNqQ&usqp=CAU'),
    new Student(3, 'dai2', 'sun', "0147852369", "ghi@jkl", 'https://gaixinh24h.com/wp-content/uploads/2020/03/hinh-gai-dep-tu-nhien-gaixinh24h-7.jpg'),
  ]

  create(): void {
    let check = true;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id == this.student.id) {
        this.list[i].name = this.student.name;
        this.list[i].address = this.student.address;
        this.list[i].phoneNumber = this.student.phoneNumber;
        this.list[i].email = this.student.email;
        this.list[i].img = this.student.img;
        check = false;
      }
    }
    if (check) {
      this.list.push(new Student(this.student.id, this.student.name, this.student.address, this.student.phoneNumber, this.student.email, this.student.img));
    }
  }

  showEdit(student: Student): void {
    this.student = new Student(student.id, student.name, student.address, student.phoneNumber, student.email, student.img);
  }

  delete(id: number): void {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        this.list.splice(i, 1);
      }
    }
  }
}

class Student {
  id: number = 0;
  name: string = '';
  address: string = '';
  phoneNumber: string = '';
  email: string = '';
  class: string = '';
  img: string = '';


  constructor(id: number, name: string, address: string, phoneNumber: string, email: string, img: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.img = img;
  }

}

