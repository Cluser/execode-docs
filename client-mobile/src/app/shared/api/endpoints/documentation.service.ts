import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DocumentationService {
  private apiUrl: string = "http://192.168.0.139:3000";
  private documentationEndpointUrl: string = this.apiUrl + "/DocumentationController";

  constructor(private httpClient: HttpClient) {}

  public getDocumentations(): Observable<any[]> {
    return this.httpClient.get<any>(this.documentationEndpointUrl + "/getDocumentations");
  }

  public uploadDocumentation(fileToUpload: any): any {
    let formData: FormData = new FormData();
    formData.append('file', fileToUpload, "filmik.mp4");
    console.log(fileToUpload);

    console.log(formData);
    return this.httpClient.post<any>(this.documentationEndpointUrl + "/uploadDocumentation", formData);
  }
}