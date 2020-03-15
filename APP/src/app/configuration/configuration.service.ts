


import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {environment} from "../../environments/environment";

interface Configuration {
  resourceServerA: string;
  resourceServerB: string;
  stage: string;
}

@Injectable({providedIn: 'root'})
export class ConfigurationService {

  private readonly CONFIG_URL = 'assets/config/config.json';
  private configuration$: Observable<Configuration>;


  public  environment:any={};





  constructor(private http: HttpClient) {




  }



  public async loadConfigFiles() {
    if (!this.configuration$) {
      this.configuration$ = this.http.get<Configuration>(this.CONFIG_URL).pipe(

        shareReplay(1)
      );
    }
    return this.configuration$.toPromise();

  }

  public  async loadConfigurations() {

    let promise: Promise<any> = new Promise(async (resolve: any) => {
      const data= await  this.loadConfigFiles();
      this.parseConfigurationApis(data);this.parseConfigurationMain(data);
      resolve(this.environment);
    });
    return promise;




  }

  public parseConfigurationMain(data) {
    for (const key in data.main) {

      this.environment[key] = data.main[key];

    }



  }

  public parseConfigurationApis(data): any {

      for (const key in data.api_roots) {
      this.environment[key] = data.api_roots[key];
    }



  }





}

