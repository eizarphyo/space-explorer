import { Component } from '@angular/core';
import { ServeDataService } from '../service/serve-data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private dataService: ServeDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  planetData = this.dataService.planet_short_descript

  planetName: string = '';

  goTo(planetId: number) {
    for (let i = 0; i < this.planetData.length; i++) {
      if (planetId == this.planetData[i]['id']) {
        this.planetName = this.planetData[i]['title']
      }
    }
    this.router.navigateByUrl('planets/' + [this.planetName]);
    console.log("planet name from home>>", this.planetName);
  }

}
