import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  constructor(private http: HttpClient) { }

  get_packs(Origin: string,Destiny: string,Checkin: string,CheckOut: string,people: string){
    return new Promise((resolve, reject) => {
      this.http
        .get("http://localhost:8000/packs?Origin="+Origin+"&Destiny="+Destiny+"&Checkin="+Checkin+"&CheckOut="+CheckOut+"&people="+people)
        .subscribe(res => {
            resolve(res);
          },
          (err: any) => {
            reject(err);
          }
        )
    });
  }

  get_recommended(){
    return new Promise((resolve, reject) =>{
      this.http
        .get("http://localhost:8000/recommended")
        .subscribe(res => {
        resolve(res);
      },
        (err: any) => {
          reject(err);
        }
      )
    });
  }

  get_top(){
    return new Promise((resolve, reject) =>{
      this.http
        .get("http://localhost:8000/top")
        .subscribe(res => {
            resolve(res);
          },
          (err: any) => {
            reject(err);
          }
        )
    });
  }

  save_pack(Pack: any) {
    return new Promise((resolve, reject) => {
      return this.http
        .get("http://localhost:8000/save_pack?Airline=" + Pack.flight.Airline + "&Origin=" + Pack.flight.City_Origin + "&Destination=" + Pack.flight.City_Destination + "&HotelName=" + Pack.hotel.name + "&Place1=" + Pack.places[0].name + "&Place2=" + Pack.places[1].name + "&Place3=" + Pack.places[2].name + "&Price="+Pack.price)
        .subscribe(res => {
            resolve(res);
          },
          (err: any) => {
            reject(err);
          }
        )
    });
  }


  send_gmail(From: string,Title: string, Message: string){
    return new Promise((resolve, reject) =>{
      this.http
        .get("http://localhost:8000/send_email?From="+From+"&Title="+Title+"&Message="+Message)
        .subscribe(res => {
            resolve(res);
          },
          (err: any) => {
            reject(err);
          }
        )
    });
  }
}
