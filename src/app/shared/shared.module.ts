//  Angular stuff
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// 3rd parties
import { MomentModule } from 'angular2-moment';
import { AgmCoreModule } from '@agm/core';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

// Shared services
import { FormService } from './services/form.service';
import { ArticleService } from './services/article.service';
import { TenderService } from './services/tender.service';
import { TaskService } from './services/task.service';
import { RatingService } from './services/rating.service';
import { PropositionService } from './services/proposition.service';
import { CategoryService } from './services/category.service';
import { CommentService } from './services/comment.service';
import { LikeService } from './services/like.service';
import { EventService } from './services/event.service';

// Shared pipes
import { EventTypePipe } from './pipes/event-type.pipe';
import { TextTruncatePipe } from './pipes/text-truncate.pipe';

// Skills-hub environment config
import { environment } from '../../environments/environment';

// Shared components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExtendInputComponent } from './components/extend-input/extend-input.component';
import { ReactionsComponent } from './components/reactions/reactions.component';
import { ArticleComponent } from './components/article/article.component';
import { TenderComponent } from './components/tender/tender.component';
import { TaskComponent } from './components/task/task.component';
import { RatingComponent } from './components/rating/rating.component';
import { PropositionComponent } from './components/proposition/proposition.component';
import { EventComponent } from './components/event/event.component';
import { EventsComponent } from './components/event/events.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsComponent } from './components/comment/comments.component';
import { LikeComponent } from './components/like/like.component';
import { LikesComponent } from './components/like/likes.component';
import { UserComponent } from './components/user/user.component';


// Module initialization
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey,
      libraries: ['places']
    }),
    DateValueAccessorModule,
  ],
  declarations: [
    EventTypePipe,
    TextTruncatePipe,
    NavbarComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ExtendInputComponent,
    ArticleComponent,
    TenderComponent,
    TaskComponent,
    RatingComponent,
    PropositionComponent,
    EventComponent,
    EventsComponent,
    CommentComponent,
    CommentsComponent,
    LikeComponent,
    LikesComponent,
    UserComponent,
    ReactionsComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    AgmCoreModule,
    DateValueAccessorModule,
    EventTypePipe,
    TextTruncatePipe,
    NavbarComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ExtendInputComponent,
    ArticleComponent,
    TenderComponent,
    TaskComponent,
    RatingComponent,
    PropositionComponent,
    EventComponent,
    EventsComponent,
    CommentComponent,
    CommentsComponent,
    LikeComponent,
    LikesComponent,
    UserComponent,
    ReactionsComponent,
  ],
  providers: [
    FormService,
    ArticleService,
    CategoryService,
    EventService,
    PropositionService,
    RatingService,
    TaskService,
    TenderService,
    CommentService,
    LikeService,
  ]
})
export class SharedModule { }
