import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [{
      itemName : "Academic Activities",
      itemDueDate : "17-04-22",
      itemPriority : "high",
      itemCategory : "Works",
  },

  {
    itemName : "Leizure Time",
    itemDueDate : "20-04-22",
    itemPriority : "high",
    itemCategory : "Personal",
},
{
  itemName : "Attending Church Chores",
  itemDueDate : "20-05-22",
  itemPriority : "high",
  itemCategory : "Serving God",
}



  ]
  today :number = Date.now()

  constructor() {}

}
