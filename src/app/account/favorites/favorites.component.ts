// Angular stuff
import { Component, OnInit, Input } from '@angular/core';

// Shared services
import { CategoryService } from '../../shared/services/category.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  providers: [CategoryService]
})
export class FavoritesComponent implements OnInit {
  @Input() user: any;
  public categories: Array<any>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.findAll()
    .map((res) => res.json())
    .subscribe(
      res => this.categories = res.categories,
      error => console.error(error.json().error)
    );
  }

  favorite() {}
}
