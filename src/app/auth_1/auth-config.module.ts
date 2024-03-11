import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://sign.rentplus.eu',
            redirectUrl: window.location.origin,
            postLogoutRedirectUri: window.location.origin,
            clientId:  'app2_client_id',
            scope: 'openid profile email',  // 'openid profile ' + your scopes
            responseType: 'code',
            useRefreshToken: true,
            logLevel: LogLevel.Debug,
      
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
