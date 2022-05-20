import { Component, OnInit } from '@angular/core';
import { Router ,NavigationEnd} from '@angular/router';


@Component({
  selector: 'app-down-scroller',
  templateUrl: './down-scroller.component.html',
  styleUrls: ['./down-scroller.component.scss']
})
export class DownScrollerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  

}
