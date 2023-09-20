import { Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  foods: any[] = [
    {value: 'steak-0', viewValue: 'USA'},
    {value: 'pizza-1', viewValue: 'BLR'},
    {value: 'tacos-2', viewValue: 'CHILE'},
  ];
}
