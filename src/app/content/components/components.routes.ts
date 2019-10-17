import { Routes, RouterModule } from '@angular/router';
import { ComponentOverviewComponent } from '../../components/shared/component-overview/component-overview.component';

const routes: Routes = [
  {
    path: 'components',
    children: [
      { path: '', component: ComponentOverviewComponent, data: { category: 'components' } },
      {
        path: 'breadcrumbs',
        loadChildren: () =>
          import('./component-demos/breadcrumbs/breadcrumbs.module').then((m) => m.BreadcrumbsDemoModule),
      },
      {
        path: 'file-input',
        loadChildren: () => import('./component-demos/file-input/file-input.module').then((m) => m.FileInputDemoModule),
      },
      {
        path: 'flavored-markdown',
        loadChildren: () =>
          import('./component-demos/flavored-markdown/flavored-markdown.module').then(
            (m) => m.FlavoredMarkdownDemoModule,
          ),
      },
      {
        path: 'markdown-parser',
        loadChildren: () => import('./component-demos/markdown/markdown.module').then((m) => m.MarkdownDemoModule),
      },
      {
        path: 'markdown-navigator',
        loadChildren: () =>
          import('./component-demos/markdown-navigator/markdown-navigator.module').then(
            (m) => m.MarkdownNavigatorDemoModule,
          ),
      },
      {
        path: 'message',
        loadChildren: () => import('./component-demos/message/message.module').then((m) => m.MessageDemoModule),
      },
      {
        path: 'paging',
        loadChildren: () => import('./component-demos/paging/paging.module').then((m) => m.PagingDemoModule),
      },
      {
        path: 'search',
        loadChildren: () => import('./component-demos/search/search.module').then((m) => m.SearchDemoModule),
      },
      {
        path: 'sidesheet',
        loadChildren: () => import('./component-demos/sidesheet/sidesheet.module').then((m) => m.SidesheetDemoModule),
      },
      {
        path: 'nav-steps',
        loadChildren: () => import('./component-demos/nav-steps/nav-steps.module').then((m) => m.NavstepsDemoModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./component-demos/notifications/notifications.module').then((m) => m.NotificationsDemoModule),
      },
      {
        path: 'tab-select',
        loadChildren: () => import('./component-demos/tab-select/tab-select.module').then((m) => m.TabSelectDemoModule),
      },
      {
        path: 'text-editor',
        loadChildren: () =>
          import('./component-demos/text-editor/text-editor.module').then((m) => m.TextEditorDemoModule),
      },
    ],
  },
];

export const componentRoutes: any = RouterModule.forChild(routes);