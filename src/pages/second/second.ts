import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  jornalero:Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  saveJornalero(formJornalero){
    console.log(formJornalero);
    this.jornalero = formJornalero.value;
    formJornalero.reset();
  }
}
