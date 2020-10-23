import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
config: any;
collection = [];
constructor(private route: ActivatedRoute, private router: Router) {
this.config = {
currentPage: 1,
itemsPerPage: 10,
totalItems:0
};
route.queryParams.subscribe(
params => this.config.currentPage= params['page']?params['page']:1 );
 
for (let i = 1; i <= 100; i++) {
this.collection.push(`item ${i}`);
}
 
}
 
pageChange(newPage: number) {
    this.router.navigate([''], { queryParams: { page: newPage } });
  }
}