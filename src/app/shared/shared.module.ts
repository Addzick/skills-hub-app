//  Angular stuff
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// 3rd parties
import { MomentModule } from 'angular2-moment';
import { AgmCoreModule } from '@agm/core';

// Shared services
import { ArticleService } from './services/article.service';
import { TenderService } from './services/tender.service';
import { TaskService } from './services/task.service';
import { RatingService } from './services/rating.service';
import { PropositionService } from './services/proposition.service';
import { CategoryService } from './services/category.service';
import { CommentService } from './services/comment.service';
import { LikeService } from './services/like.service';
import { EventService } from './services/event.service';

// Shared resolvers
import { ArticleResolver } from './resolvers/article-resolver.service';
import { CategoryResolver } from './resolvers/category-resolver.service';
import { PropositionResolver } from './resolvers/proposition-resolver.service';
import { RatingResolver } from './resolvers/rating-resolver.service';
import { TaskResolver } from './resolvers/task-resolver.service';
import { TenderResolver } from './resolvers/tender-resolver.service';
import { EventResolver } from './resolvers/event-resolver.service';
import { CommentResolver } from './resolvers/comment-resolver.service';
import { LikeResolver } from './resolvers/like-resolver.service';
import { UserResolver } from './resolvers/user-resolver.service';

// Shared pipes
import { EventTypePipe } from './pipes/event-type.pipe';
import { TextTruncatePipe } from './pipes/text-truncate.pipe';

// Shared components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExtendInputComponent } from './components/extend-input/extend-input.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotComponent } from './components/forgot/forgot.component';

import { ArticleComponent } from './components/article/article.component';
import { TenderComponent } from './components/tender/tender.component';
import { TaskComponent } from './components/task/task.component';
import { RatingComponent } from './components/rating/rating.component';
import { PropositionComponent } from './components/proposition/proposition.component';
import { EventComponent } from './components/event/event.component';
import { CommentComponent } from './components/comment/comment.component';
import { LikeComponent } from './components/like/like.component';
import { UserComponent } from './components/user/user.component';

import { ArticleDetailComponent } from './components/article/article-detail.component';
import { CommentDetailComponent } from './components/comment/comment-detail.component';
import { EventDetailComponent } from './components/event/event-detail.component';
import { LikeDetailComponent } from './components/like/like-detail.component';
import { PropositionDetailComponent } from './components/proposition/proposition-detail.component';
import { RatingDetailComponent } from './components/rating/rating-detail.component';
import { TaskDetailComponent } from './components/task/task-detail.component';
import { TenderDetailComponent } from './components/tender/tender-detail.component';
import { UserDetailComponent } from './components/user/user-detail.component';

// Skills-hub environment config
import { environment } from '../../environments/environment';

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
  ],
  declarations: [
    EventTypePipe,
    TextTruncatePipe,
    NavbarComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ExtendInputComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ArticleComponent,
    TenderComponent,
    TaskComponent,
    RatingComponent,
    PropositionComponent,
    EventComponent,
    CommentComponent,
    LikeComponent,
    UserComponent,
    ArticleDetailComponent,
    CommentDetailComponent,
    EventDetailComponent,
    LikeDetailComponent,
    PropositionDetailComponent,
    RatingDetailComponent,
    TaskDetailComponent,
    TenderDetailComponent,
    UserDetailComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    AgmCoreModule,
    EventTypePipe,
    TextTruncatePipe,
    NavbarComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ExtendInputComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ArticleComponent,
    TenderComponent,
    TaskComponent,
    RatingComponent,
    PropositionComponent,
    EventComponent,
    CommentComponent,
    LikeComponent,
    UserComponent,
    ArticleDetailComponent,
    CommentDetailComponent,
    EventDetailComponent,
    LikeDetailComponent,
    PropositionDetailComponent,
    RatingDetailComponent,
    TaskDetailComponent,
    TenderDetailComponent,
    UserDetailComponent,
  ],
  providers: [
    ArticleService,
    CategoryService,
    EventService,
    PropositionService,
    RatingService,
    TaskService,
    TenderService,
    CommentService,
    LikeService,
    ArticleResolver,
    CategoryResolver,
    PropositionResolver,
    RatingResolver,
    TaskResolver,
    TenderResolver,
    EventResolver,
    CommentResolver,
    LikeResolver,
    UserResolver,
  ]
})
export class SharedModule { }
