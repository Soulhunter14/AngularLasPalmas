import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './../tab/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit  {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.select(this.tabs.first);
  }


  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) { tab.selected = true; }
  }
  select(tab: TabComponent) {
    this.tabs.forEach( val => {
      if (val === tab) {val.selected = true; } else { val.selected = false; }
    });
  }

}
