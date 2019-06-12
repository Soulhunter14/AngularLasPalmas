import { Component, OnInit } from '@angular/core';
import { TabComponent } from './../tab/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  tabs: Array<TabComponent> = new Array<TabComponent>();

  constructor() { }

  ngOnInit() {
  }

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) { tab.selected = true; }
    this.tabs.push(tab);
  }
  select(tab: TabComponent) {
    this.tabs.forEach( val => {
      if (val === tab) {val.selected = true; } else { val.selected = false; }
    });
  }

}
