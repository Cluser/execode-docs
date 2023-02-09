import { Component } from '@angular/core';
import { CaptureImageOptions, MediaCapture } from '@awesome-cordova-plugins/media-capture/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  constructor(private mediaCapture: MediaCapture, private toastController: ToastController) {}

  async startRecording() {
    try {
      let options: CaptureImageOptions = { limit: 1 }
      const data = await this.mediaCapture.captureVideo(options).then(x => this.presentToast())
    } catch(e) {
      console.log(e)
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      icon: 'globe'
    });

    await toast.present();
  }
}
