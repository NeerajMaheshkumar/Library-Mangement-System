import { Component, HostBinding, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Router } from '@angular/router';
import { trigger, state, transition, animate, style } from '@angular/animations';

import { NavItem } from '../lib-master-page/NavItem';
import { MatSidenav } from '@angular/material/sidenav';
//import { SalesService } from '../../Shared/Service/sales.service';

@Component({
  selector: 'app-main-left-sidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(90deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MainLeftSidebarComponent implements OnInit {

  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;

  constructor(public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
  }

  onItemSelected(item: NavItem) {
	 
    if (!item.children || !item.children.length) {
      //localStorage.setItem("salesMenuCode", item.menuCode);
      //localStorage.setItem("commonMenuName", item.menuName);
    //  // this.salesService.menuCode = item.menuCode;
      this.router.navigate([item.route]);
      // this.master.appDrawer.toggle()
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
  
}

