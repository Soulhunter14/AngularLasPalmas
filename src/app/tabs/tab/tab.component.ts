import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from './../tabs/tabs.component';


@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() selected: Boolean;
  @Input() title: String;

  constructor(private tabsComponent: TabsComponent) { }

  ngOnInit() {
    this.tabsComponent.addTab(this);
  }

}
