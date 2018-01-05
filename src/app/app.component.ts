import { Component, ViewEncapsulation } from '@angular/core';
import { gridData } from './grid-data';

@Component({
  selector: 'seed-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
		public serviceUrl: string;    
    public reportPath: string;	
  public data: string[] = ['Snooker', 'Tennis', 'Cricket', 'Football', 'Rugby'];
  public title = 'Average Sales Comparison';
  constructor() {
	   this.serviceUrl = 'http://js.syncfusion.com/ejservices/api/ReportViewer';        
        this.reportPath = 'GroupingAgg.rdl'; 
  }
}

