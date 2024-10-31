import { Component } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {
  linkRows: string[][] = [
    ['About Us', 'Press', 'Investors'],
    ['Blog', 'Work@', 'Contact'],
    ['Doximity App', 'Op-Med', 'Research'],
    ['Directory', 'Terms of Service', 'Privacy'],
    ['Partner Overview', 'Residency Navigator', 'Developer API'],
    ['Hiring Solutions', 'Hospital Solutions', 'Help']
  ];
}
