import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MachineService {
  private apiUrl: string = "http://192.168.0.139:3000";
  private machineEndpointUrl: string = this.apiUrl + "/MachineController";

  constructor(private httpClient: HttpClient) {}

  public getMachines(): Observable<any[]> {
    return this.httpClient.get<any>(this.machineEndpointUrl + "/getMachines");
  }
}