import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LineService {
  private apiUrl: string = "http://192.168.0.139:3000";
  private lineEndpointUrl: string = this.apiUrl + "/LineController";

  constructor(private httpClient: HttpClient) {}

  public getLines(): Observable<any[]> {
    return this.httpClient.get<any>(this.lineEndpointUrl + "/getLines");
  }
}