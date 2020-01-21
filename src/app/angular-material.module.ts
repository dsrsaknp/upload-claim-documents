import {NgModule} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    imports: [MatTabsModule, MatIconModule, MatButtonModule],
    exports: [MatTabsModule, MatIconModule, MatButtonModule]
})

export class AngularMaterialModule {}