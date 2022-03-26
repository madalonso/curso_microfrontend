import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { MessagingService, IMessageToFeature1, InjectionTokens } from 'cross-cutting-concern';
import { Router } from '@angular/router';
import { IDynamicMicroComponentInput } from '../shared/dynamic-micro/dynamic-micro.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  dynamicInput: IDynamicMicroComponentInput | undefined;
  messagingService: MessagingService = {} as MessagingService;
  messageToFeature1Sub: Subscription = {} as Subscription;
  title = 'sample-app-shell';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private injector: Injector,
              private router: Router,
              private appService: AppService) {}

  ngOnInit(): void {
    this.appService.rootInjector = this.injector;
    this.messagingService = this.injector.get<any>(InjectionTokens.messagingServiceInjectionToken);
    this.messageToFeature1Sub = this.messagingService.messageToFeature1$.subscribe(
      x => this.handleMessageToFeature1(x)
    );
    this.dynamicInput = {
      moduleName: 'Feature2Module',
      componentName: 'Feature2SubComponent'
    };
  }

  ngOnDestroy(): void {
    if (this.messageToFeature1Sub) {
      this.messageToFeature1Sub.unsubscribe();
    }
  }

  onClick(e: any, url: string): void {
    this.router.navigateByUrl(url);
  }

  private handleMessageToFeature1(message: IMessageToFeature1 | undefined): void {
    if (message) {
      this.router.navigate(['feature1']);
    }
  }

}

