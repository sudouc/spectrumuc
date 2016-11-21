import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.css']
})
export class StatusPageComponent implements OnInit {

  title = 'Node Status Monitor';
  nodes: any[];

  constructor(private af: AngularFire) {
  }

  ngOnInit() {
    // Subscribe to the list of nodes
    this.af.database.list('/nodes').subscribe(
      data => {
        this.nodes = data;
        console.log(data);
      },
      error => { console.log(error); })
      ;
  }

  getRgbColor(color) {
    let color_string = 'black';
    if (color) {
      color_string = `rgb(${color.red}, ${color.green}, ${color.blue})`;
    }
    return color_string;
  }

}
