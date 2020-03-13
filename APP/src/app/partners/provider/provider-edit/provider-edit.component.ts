import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
const caster=require('angular-crud/gs-cast');
import { ProviderService } from '../provider.service';
import { Provider } from '../provider';

@Component({
  selector: 'app-provider-edit',
  styleUrls:['./provider-edit.scss'],
  templateUrl: './provider-edit.component.html'
})
export class ProviderEditComponent implements OnInit {
id: string;
  provider: Provider;
  feedback: any = {};
constructor(
    private route: ActivatedRoute,
    private router: Router,
    private providerService: ProviderService,
    
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
          if (id === 'new') { return of(new Provider()); }
          return this.providerService.findById(id);
        })
      )
      .subscribe(provider => {
          this.provider = provider;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );

}
save() {
    this.providerService.save(this.provider).subscribe(
      provider => {
        this.provider = provider;
        this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
        setTimeout(() => {
          this.router.navigate(['/partners/providers']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement"};
      }
    );
  }
cancel() {
    this.router.navigate(['/partners/providers']);
  }

}
