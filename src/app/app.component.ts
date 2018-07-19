import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  evenNumbers:number[] = [];
  oddNumbers:number[] = [];

  onIntervalFired(currCount:number){
    if(currCount%2==0){
      this.evenNumbers.push(currCount);
    }else{
      this.oddNumbers.push(currCount);
    }
  }
}
