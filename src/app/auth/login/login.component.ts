import { Component } from '@angular/core';

@Component({
   selector: 'app-login',
  templateUrl: './login.component.html'

})
export class LoginComponent {
  authorize() {
    const clientId = 'OC1dTFiuYCsqp29RppWQS0N-odD3v6hDbU9C0GxPntI';
    const redirectUri = encodeURIComponent('http://localhost:4200/callback');
    const scope = encodeURIComponent('public');
    // const state = 'your-state'; // optional

    const url = `https://api.mooncard.co/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

    window.location.href = url;
  }
}
