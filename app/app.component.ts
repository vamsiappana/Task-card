import { Component } from '@angular/core';

import { Uno } from './model/uno';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent { 
    private unos = [
        new Uno(
            "buy a monkey",
            false
        ),
        new Uno(
            "walk like a turtle",
            true
        )
    ]

    private currentTask = new Uno(null, false);

    addTask(){
        let uno = new Uno(this.currentTask.content, this.currentTask.completed);
        this.unos.push(uno);
        this.currentTask.content= null;
    }
 }