import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() IntervalEmiter = new EventEmitter<number>();
  intervalController;
  currentCount = 0;

  constructor() { }

  ngOnInit() {
  }

  onGameStart(){
    this.intervalController = setInterval(() => {
      this.IntervalEmiter.emit(this.currentCount);
      this.currentCount+=1;
      console.log(this.currentCount);
    },500);
  }

  onGamePause(){
    clearInterval(this.intervalController);
    console.log("Game Paused");
  }

}
