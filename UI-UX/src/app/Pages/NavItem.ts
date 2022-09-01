/*export interface NavItem {
    displayName: string;
    disabled?: boolean;
    image: string;
    url?: string;
    children?: NavItem[];
    menuCode:string
  }
  */
  export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName?: string;
  route?: string;
  children?: NavItem[];
}

//http://13.234.78.100:8603/MTDealer/Page/DashBoard