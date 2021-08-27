import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {UiService} from "../../services/ui.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Task Tracker';
  showAddTask!:boolean;
  subscription!: Subscription;

  constructor(private uiService:UiService, private router:Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(
      (value) => (this.showAddTask = value)
    );
  }

  ngOnInit(): void {
  }

  hasRoute(route:string){
    return this.router.url === route;
  }



  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
