import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OidcSecurityService, LoginResponse } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'OpenId16NoStandAlone';
  isAuthenticated = false;
  constructor(public oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe((loginResponse: LoginResponse) => {
        const { isAuthenticated, userData, accessToken, idToken, configId } =
          loginResponse;
          if (loginResponse.isAuthenticated) {
            this.isAuthenticated = isAuthenticated;
          }
        // console.log("checkAuth", loginResponse);
        // console.log("userData", userData);
        // console.log("userData", loginResponse.);
        // console.log("accessToken", accessToken);
        // console.log("idToken", idToken);
        // console.log("configId", configId);
      });
      // this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated }) => {
      //   this.isAuthenticated = isAuthenticated;
  
      //   console.log('app authenticated', isAuthenticated);
      // });
      const token = this.oidcSecurityService.getAccessToken().subscribe((token) => {
        const httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + token,
          }),
          
        };
        
        console.log('httpOptions', httpOptions);
      });
  }
  

  login() {
    console.log("oidcSecurityService")
    try {
      this.oidcSecurityService.authorize();
      console.log('Authorization process started');
    } catch (error) {
      console.error('An error occurred during the authorization process:', error);
      // Additional logic to handle the error, such as displaying a message to the user
    }
  }

  logout() {
    this.oidcSecurityService
      .logoff()
      .subscribe((result) => console.log(result));
      this.isAuthenticated = false;
  }
}
