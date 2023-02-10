import { Component } from '@angular/core';
import { CaptureVideoOptions, MediaCapture, MediaFile } from '@awesome-cordova-plugins/media-capture/ngx';
import { ToastController } from '@ionic/angular';
import { delay, tap } from 'rxjs';
import { DocumentationService } from '../shared/api/endpoints/documentation.service';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { MachineService } from '../shared/api/endpoints/machine.service';
import { LineService } from '../shared/api/endpoints/line.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public documentations: any[] = [];
  public machines: any[] = [];
  public lines: any[] = [];

  public file: any;

  constructor(private mediaCapture: MediaCapture, private toastController: ToastController,
              private documentationService: DocumentationService, private machineService: MachineService, 
              private lineService: LineService) {}

  async startRecording() {
    try {
      let options: CaptureVideoOptions = { limit: 1 }
      const data: MediaFile[] | any = await this.mediaCapture.captureVideo();
      console.log(data)

      this.readFilePath(data[0].fullPath)


    } catch(e) {
      this.presentToast('Błąd')
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      icon: 'globe'
    });
    await toast.present();
  }


  async readSecretFile(path: string ) {
    return await Filesystem.readFile({
      path: path,
      directory: Directory.Documents
    });
  };

  async getLines() {
    this.lineService.getLines().pipe(
      tap(lines => lines.forEach(line => {
        this.lines = lines
      }))
    ).subscribe()
  }

  async getMachines() {
    this.machineService.getMachines().pipe(
      tap(machines => machines.forEach(machine => {
        this.machines = machines
      }))
    ).subscribe()
  }

  async getDocumentations() {
    this.documentationService.getDocumentations().pipe(
      tap(documentations => documentations.forEach(documentation => {
        this.documentations = documentations
      }))
    ).subscribe()
  }

  async readFilePath(fullPath: string) {
    // Here's an example of reading a file with a full file path. Use this to
    // read binary data (base64 encoded) from plugins that return File URIs, such as
    // the Camera.
    const contents = await Filesystem.readFile({
      path: fullPath,
    });
  
    console.log('data:', contents);
    
    const base64Response = await fetch(`data:video/mp4;base64,${contents.data}`);
    const blob = await base64Response.blob();

    this.documentationService.uploadDocumentation(blob).subscribe()
  };

}
