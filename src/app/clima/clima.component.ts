import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ClimaService} from "../services/clima.service";

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.less']
})
export class ClimaComponent implements OnInit {
  public formGroup: FormGroup;
  public resultado:any = {};
  public repostaCompleta = false;
  constructor(
    private _fb: FormBuilder,
    private climaService: ClimaService
  ) {

  }

  ngOnInit(): void {
    this.formGroup = this._fb.group({
      location: ['Januaria']
    })
    this.carregarClima(this.formGroup.value);
  }
  public carregarClima(formValues:any) {
    this.climaService.getClima(formValues.location).subscribe((x: any) => {this.resultado = x})
  }

}
