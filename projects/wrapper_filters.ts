/*
 * Public API Surface of gl-ng-filters-frontend
 */
export { ComponentModule as GlNgFiltersComponentModule } from './gl-ng-filters-frontend/src/lib/component/component.module';
export { GlNgFiltersFrontendModule } from './gl-ng-filters-frontend/src/lib/gl-ng-filters-frontend.module';

// region interfaces
export * from './gl-ng-filters-frontend/src/lib/interfaces/global.interface';
// endregion

// region filter
import { GlComponentFilterComponent } from './gl-ng-filters-frontend/src/lib/component/filter/gl-component-filter.component';
import { GlComponentFilterService } from './gl-ng-filters-frontend/src/lib/component/filter/gl-component-filter.service';
import { GlComponentFilterContainerComponent } from './gl-ng-filters-frontend/src/lib/component/filter/container/gl-component-filter-container.component';

export { GlComponentFilterComponent, GlComponentFilterService, GlComponentFilterContainerComponent };
// endregion

