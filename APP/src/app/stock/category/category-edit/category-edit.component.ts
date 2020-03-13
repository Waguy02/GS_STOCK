
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
const caster=require('angular-crud/gs-cast');
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-category-edit',
  styleUrls:['./category-edit.scss'],
  templateUrl: './category-edit.component.html'
})
export class CategoryEditComponent implements OnInit {
id: string;
  category: Category;
  feedback: any = {};
constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,

    )
    {
  }
ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Category()); }
          return this.categoryService.findById(id);
        })
      )
      .subscribe(category => {
          this.category = category;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement '};
        }
      );

}
save() {
    this.categoryService.save(this.category).subscribe(
      category => {
        this.category = category;
        this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
        setTimeout(() => {
          this.router.navigate(['/stock/categories']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement : "+err.message};
      }
    );
  }
cancel() {
    this.router.navigate(['/stock/categories']);
  }

}
