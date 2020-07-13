import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestInsightsAndAdviceRoutingModule } from './latest-insights-and-advice-routing.module';
import { EventsComponent } from './events/events.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { RecruitmentInsightsComponent } from './recruitment-insights/recruitment-insights.component';
import { AdviceTipsComponent } from './advice-tips/advice-tips.component';


@NgModule({
  declarations: [EventsComponent, LatestNewsComponent, RecruitmentInsightsComponent, AdviceTipsComponent],
  imports: [
    CommonModule,
    LatestInsightsAndAdviceRoutingModule
  ]
})
export class LatestInsightsAndAdviceModule { }
