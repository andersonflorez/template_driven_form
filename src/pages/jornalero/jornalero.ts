import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JornaleroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornalero',
  templateUrl: 'jornalero.html',
})
export class JornaleroPage {

  jornalero: Array<string>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  saveJornalero(formJornalero){
    this.jornalero = formJornalero.value;
    console.log(this.jornalero);
    formJornalero.reset();
  }

}
