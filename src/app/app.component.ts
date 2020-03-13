import { Component, OnInit } from '@angular/core';
//import { $ } from 'protractor';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    $("#home").addClass("active");

    $(document).ready(function () {
      $("#home").click(function () {
        $("#home").addClass("active");
        $("#postSomething").removeClass("active");
        $("#posts").removeClass("active");
        $("#about").removeClass("active");
      });
      $("#posts").click(function () {
        $("#posts").addClass("active");
        $("#postSomething").removeClass("active");
        $("#home").removeClass("active");
        $("#about").removeClass("active");
      });
      $("#postSomething").click(function () {
        $("#postSomething").addClass("active");
        $("#home").removeClass("active");
        $("#posts").removeClass("active");
        $("#about").removeClass("active");
      });
      $("#about").click(function () {
        $("#about").addClass("active");
        $("#postSomething").removeClass("active");
        $("#posts").removeClass("active");
        $("#home").removeClass("active");
      });
    });
  }
  title = 'Blog-Frontend';
}
