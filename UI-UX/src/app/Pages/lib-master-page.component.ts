

import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NavItem } from './NavItem';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-lib-master-page',
  templateUrl: './lib-master-page.component.html',
  styleUrls: ['./lib-master-page.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(90deg)'})),
      state('expanded', style({transform: 'rotate(-90deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class LibMasterPageComponent implements OnInit {
  
  isSticky: boolean = false;
navItems: NavItem[] = 
[
    {
      displayName: 'Configuration',
      iconName: 'Configuration',
      route: '',
      children:
       [
          {      
              displayName: 'Member',
              route: '',
              children: 
              [
                {
                  displayName: 'Add Member',
                  route: '/Pages/addmember',
                  children: []
                },
                {
                  displayName: 'Member List',
                  route: '/Pages/memberlist',
                  children: []
                }
              ]
          },




          {      
            displayName: 'Book',
            route: '',
            children: 
            [
              {
                displayName: 'Add Book',
                route: '/Pages/addbook',
                children: []
              },
              {
                displayName: 'Book List',
                route: '/Pages/booklist',
                children: []
              }
            ]
        }

        ]
	   },
	
     {
      displayName: 'Transactions',
      route: '',
      children: [
        {
		  children: [],
          displayName: 'Borrow',
          route: '/Page/borrow'
		},
		{
		  children: [],
          displayName: 'Return',
          route: '/Page/return'
		},
		{
		  children: [],
          displayName: 'Payment of Fine',
          route: '/Page/PayFine'
		}
		]
	}      
  ];
  
  
 
    
      headingName:string
  loginuser: string;
  expanded: boolean;
  userarray:any=[
    {ID:"1",Value:"Profile",icon:"person"},
    {ID:"2",Value:"About",icon:"help"},
    {ID:"3",Value:"Logout",icon:"power_settings_new"},
  ]
  date:Date; 
  imgUrl: SafeResourceUrl;

   constructor(private router:Router,private elementref:ElementRef) {
        setInterval(() => {
          this.date = new Date()
        }, 1000)
     }
    appd:any;
    //navItems:NavItem[]
    sidenav:boolean=true;
    companyname:string
    @ViewChild('appDrawer',{static:false}) appDrawer: MatSidenav;
    ngOnInit() {
      let img=localStorage.getItem("CmpLogo");
	  //img="E:\springboot\LibraryAppUI\src\assets\Images\Oil.jpg"
      // if (img != null) {
      //   const imageBlob = this.dataURItoBlob(img, 'image/jpeg');
      //   var file = new File([imageBlob], 'Menthee.jpg', { type: 'image/jpeg', lastModified: Date.now() });
      //   let reader = new FileReader();
      //   reader.onload = (event: ProgressEvent) => {
      //     this.imgUrl = (<FileReader>event.target).result;
      //   }
      //   reader.readAsDataURL(file);
      //   // this.imgUrl ="data:application/octet-stream;base64,"+ this.imageDetails.Image;
      // }
     // this.imgUrl="data:image/jpeg;base64,"+img
	  
      this.companyname=localStorage.getItem("CompanyName")
      const v=this.elementref.nativeElement.querySelector('#exp')
      if(v.className=="mat-menu-trigger mat-button mat-button-base"){
        this.expanded = !this.expanded;  
      }
      let treearray:any=[]
     this.loginuser=localStorage.getItem("LoginUser")
      let UserToken=localStorage.getItem("UserToken")
     // console.log(UserToken,'User')
     // let Menus=JSON.parse(localStorage.getItem("UserMenus"))
      var tree = [],
      mappedArr = {},
      arrElem,
      mappedElem;
     /* for(var i = 0, len = Menus.length; i < len; i++) {
        arrElem = Menus[i];
        mappedArr[arrElem.id] = arrElem;
        mappedArr[arrElem.id]['children'] = [];
      }
	  */
      /*for (var id in mappedArr) {
        if (mappedArr.hasOwnProperty(id)) {
          mappedElem = mappedArr[id];
          if (mappedElem.highlevel) {
            mappedArr[mappedElem['highlevel']]['children'].push(mappedElem);
            console.log(mappedArr[id])
          }
          else {
            tree.push(mappedElem);
          }
        }
      }
	  */
      //this.navItems=tree
      //console.log(tree,'User')
    }
    clickinbox(){
      this.router.navigate(['/Page/Inbox'])
    }
    toggle(){
      // console.log(this.appDrawer,"appdraw")
      this.appDrawer.toggle();
      // console.log(this.appDrawer,"appdraw")
      this.sidenav=this.appDrawer.opened
      console.log(this.sidenav,"Sidenav")
    }
    /*dataURItoBlob(dataURI, typename) {
      const byteString = atob(dataURI);
      const arrayBuffer = new ArrayBuffer(byteString.length);
      const int8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteString.length; i++) {
        int8Array[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([arrayBuffer], { type: typename });
      return blob;
    }*/
    userClick(data){
      if(data=="Logout"){
        this.router.navigate(['/Login/authlogin'])
        localStorage.clear()
      }
    }
}   