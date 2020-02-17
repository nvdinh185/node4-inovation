import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TimeAgoPipe } from 'time-ago-pipe';
import { IdeaCardComponent } from './components/idea-card/idea-card.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [
        // Các pipe dữ liệu không chèn ở entry
        IdeaCardComponent,
        TimeAgoPipe
    ],
    exports: [
        // Phải khai báo xuất bản ra mới sử dụng được nhé
        IdeaCardComponent,
        TimeAgoPipe
    ]
})
export class SharedModule { }