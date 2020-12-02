import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
// import { ContentHolderComponent } from './content-holder/content-holder.component';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LibraryComponent } from './library/library.component';
import { RouterModule } from '@angular/router';
import { ContentHolderComponent } from './content-holder/content-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    // ContentHolderComponent,
    HomeComponent,
    TrendingComponent,
    SubscriptionComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: "home", component: HomeComponent
        // children: [
        //   {
        //     path: 'content', // child route path
        //     component: ContentHolderComponent, // child route component that the router renders
        //   }]
      },
      { path: "trending", component: TrendingComponent },
      { path: "subscription", component: SubscriptionComponent },
      { path: "library", component: LibraryComponent },
      { path: "content", component: ContentHolderComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
