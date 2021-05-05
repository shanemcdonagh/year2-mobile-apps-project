import { Component, OnInit } from '@angular/core';

// Import class of basketball information
import {BasketballInfoService} from '../Services/basketball-info.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  // Variables
  teamData: any = [];
  teamImages: any [];
  playerData: any = [];
  images: any = ["../../assets/atlanta.png"];

 // Create local instance of class 'BasketballInfoService'
  constructor(private basketballInfoService: BasketballInfoService) {}

  // Method: Is called at initialisation of application
  ngOnInit(){
    // Calls method asynchronously - Retrieves data from class
    this.basketballInfoService.getBasketballTeams().subscribe(
      (data)=>{
        this.teamData = data.teams; // Initialise array using data retrieved from the website
        console.log(this.teamData);
      }
    );
  }
}
