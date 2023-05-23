import { Component } from '@angular/core';
import { ServeDataService } from '../service/serve-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(
    private dataService: ServeDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  planetDetails = this.dataService.planet_details
  name: string = '';
  img: string = "";
  description: string = "";
  type: string = "";
  moons: string = "";
  rings: string = "";
  time: string = "";
  atmosphere?: string;
  neighbors: string = "";
  namesake: string = "";
  isSun?: boolean;
  ngOnInit() {
    this.name = this.activatedRoute.snapshot.params['planetName'];
    console.log("planet name from details >> ", this.name);

    for (let i = 0; i < this.planetDetails.length; i++) {
      if (this.name == this.planetDetails[i]['title']) {
        let index = this.planetDetails[i];

        this.img = index['img'];
        this.description = index['description'];
        this.type = index['type'];
        this.moons = index['moons'];
        this.rings = index['rings'];
        this.time = index['time'];
        this.atmosphere = index['atmosphere'];
        this.neighbors = index['neighbors'];
        this.namesake = index['namesake'];
      }
    }

    if (this.name == "sun") {
      this.isSun = true;
    }

  }
}
