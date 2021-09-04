import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CustomItemModel } from '../../core/models/custom-item.model';
import { AddToCustom, ECustomActions, SetCustom } from '../actions/custom.actions';
import { IAppState } from '../state/app.state';
import { AdminService } from './../../core/services/admin.service';


@Injectable()
export class CustomEffects {

  @Effect()
  public addToCustom$: Observable<AddToCustom> = this.actions$.pipe(
    ofType<SetCustom>(ECustomActions.SetCustom),
    switchMap(() => this.adminService.createCard()),
    switchMap((newCard: CustomItemModel) => {
      return of(new AddToCustom(newCard));
    })
  );

  constructor(
    private adminService: AdminService,
    private actions$: Actions,
    private _store: Store<IAppState>
  ) { }
}
