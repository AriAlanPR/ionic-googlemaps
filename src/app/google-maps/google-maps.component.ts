import { Component, Input, Renderer2, ElementRef, Inject, OnInit } from '@angular/core';
// import { DOCUMENT } from '@angular/platform-browser';
import { Plugins } from '@capacitor/core';

const { Geolocation, Network } = Plugins;

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
