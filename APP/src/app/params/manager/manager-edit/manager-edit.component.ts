import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
const caster=require('angular-crud/gs-cast');
import { ManagerService } from '../manager.service';
import { Manager } from '../manager';

@Component({
  selector: 'app-manager-edit',
  styleUrls:['./manager-edit.scss'],
  templateUrl: './manager-edit.component.html'
})
export class ManagerEditComponent implements OnInit {
id: string;
  manager: Manager;
  feedback: any = {};
constructor(
    private route: ActivatedRoute,
    private router: Router,
    private managerService: ManagerService,

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
          if (id === 'new') { return of(new Manager()); }
          return this.managerService.findById(id);
        })
      )
      .subscribe(manager => {
          this.manager = manager;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );

}
save() {
    this.managerService.save(this.manager).subscribe(
      manager => {
        this.manager = manager;
        this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
        setTimeout(() => {
          this.router.navigate(['/params/managers']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement  :"+err};
      }
    );
  }
cancel() {
    this.router.navigate(['/params/managers']);
  }

}
