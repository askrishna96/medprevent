import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-advice",
  templateUrl: "./advice.page.html",
  styleUrls: ["./advice.page.scss"]
})
export class AdvicePage implements OnInit {
  public items: any = [];
  constructor() {
    this.items = [
      { expanded: false },
      { expanded: false }
    ];
  }

  ngOnInit() {}

  expandItem(item) {
    console.log(item)
    // if (item.expanded) {
    //   item.expanded = false;
    // } else {
    //   this.items.map(listItem => {
    //     if (item == listItem) {
    //       listItem.expanded = !listItem.expanded;
    //     } else {
    //       listItem.expanded = false;
    //     }
    //     return listItem;
    //   });
    // }
  }
}
