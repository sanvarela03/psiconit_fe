import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { SecurityService } from 'src/app/services/ssd/security.service';
import { Subscription } from 'rxjs';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  IsAuthenticated: boolean = false;
  private subsAuth$: Subscription;



  panelOpenState = false;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  //TREE  

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private securityService: SecurityService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.IsAuthenticated = this.securityService.IsAuthorized;
    this.subsAuth$ = this.securityService.authChallenge$.subscribe(
      (isAuth) => {
        this.IsAuthenticated = isAuth;
      }
    );

  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.subsAuth$){
      this.subsAuth$.unsubscribe();
    }
  } 

  logOut(){
    this.securityService.logOff();
  }



}
