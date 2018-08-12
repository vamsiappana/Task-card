import {Component, Input } from '@angular/core';

import { Uno } from '../model/uno';

@Component({
    moduleId: module.id,
    selector: 'app-card',
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.css']

})

export class TaskComponent {
    @Input() uno: Uno;

    statusToggle(){
        this.uno.completed = !this.uno.completed;
    }
}