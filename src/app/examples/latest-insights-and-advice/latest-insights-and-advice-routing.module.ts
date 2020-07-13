import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { LatestInsightsAndAdviceComponent } from './latest-insights-and-advice.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { RecruitmentInsightsComponent } from './recruitment-insights/recruitment-insights.component';
import { AdviceTipsComponent } from './advice-tips/advice-tips.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', component:LatestInsightsAndAdviceComponent},
  { path: 'events', component:EventsComponent},
  { path: 'latest-news', component:LatestNewsComponent},
  { path: 'recruitment-insights', component:RecruitmentInsightsComponent},
  { path: 'advice-tips', component: AdviceTipsComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatestInsightsAndAdviceRoutingModule { }
