import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [NgIf],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  registerVisible = false;

  swapForm() {
    this.registerVisible = !this.registerVisible;
  }

}
