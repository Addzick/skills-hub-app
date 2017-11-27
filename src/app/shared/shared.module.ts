//  Angular stuff
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// 3rd parties
import { MomentModule } from 'angular2-moment';

// Shared components
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExtendInputComponent } from './components/extend-input/extend-input.component';

// Shared detail components
import { ArticleComponent } from './components/article/article.component';
import { TenderComponent } from './components/tender/tender.component';
import { TaskComponent } from './components/task/task.component';
import { RatingComponent } from './components/rating/rating.component';
import { PropositionComponent } from './components/proposition/proposition.component';
import { EventComponent } from './components/event/event.component';
import { CommentComponent } from './components/comment/comment.component';
import { LikeComponent } from './components/like/like.component';

// Shared edit components
import { ArticleEditComponent } from './components/article/article-edit.component';

// Shared services
import { ArticleService } from './services/article.service';
import { TenderService } from './services/tender.service';
import { TaskService } from './services/task.service';
import { RatingService } from './services/rating.service';
import { PropositionService } from './services/proposition.service';
import { CategoryService } from './services/category.service';

// Shared resolvers
import { ArticleResolver } from './resolvers/article-resolver.service';
import { CategoryResolver } from './resolvers/category-resolver.service';
import { PropositionResolver } from './resolvers/proposition-resolver.service';
import { RatingResolver } from './resolvers/rating-resolver.service';
import { TaskResolver } from './resolvers/task-resolver.service';
import { TenderResolver } from './resolvers/tender-resolver.service';
import { EventService } from './services/event.service';
import { UserComponent } from './components/user/user.component';

// Shared pipes
import { EventTypePipe } from './pipes/event-type.pipe';

// Module initialization
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    RouterModule,
  ],
  declarations: [
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
    CommentComponent,
    LikeComponent,
    ArticleEditComponent,
    UserComponent,
    EventTypePipe,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
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
    CommentComponent,
    LikeComponent,
    ArticleEditComponent,
    EventTypePipe,
  ],
  providers: [
    ArticleService,
    TenderService,
    TaskService,
    RatingService,
    PropositionService,
    CategoryService,
    ArticleResolver,
    CategoryResolver,
    PropositionResolver,
    RatingResolver,
    TaskResolver,
    TenderResolver,
    EventService,
  ]
})
export class SharedModule { }
