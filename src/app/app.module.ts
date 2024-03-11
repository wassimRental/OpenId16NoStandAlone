import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthConfigModule } from './auth_1/auth-config.module';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthConfigModule,
    AuthModule.forRoot({
      config: {
        authority: 'https://sign.rentplus.eu/oidc',
        redirectUrl:'https://2d6f-81-244-84-92.ngrok-free.app/',
        postLogoutRedirectUri:"http://localhost:4200",
        clientId: '863502',
        scope: 'openid profile email', 
        responseType: 'code',
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      },
    }),
  ],
  //parameters
  // AuthModule.forRoot({
  //   config: {
  //     authority: 'https://sign.rentplus.eu/oidc', // La URL de la autoridad de identidad
  //     redirectUrl: 'https://11c4-2a02-a03f-68ca-da00-941e-899d-1b2f-90fc.ngrok-free.app', // La URL a la que se redirige después de la autenticación exitosa
  //     postLogoutRedirectUri: 'http://localhost:4200', // La URL a la que se redirige después de cerrar la sesión
  //     clientId: '863502', // El ID de cliente proporcionado por el servidor de identidad
  //     scope: 'openid profile email', // Los alcances solicitados durante la autenticación
  //     responseType: 'code', // El tipo de respuesta esperado del servidor de identidad
  //     useRefreshToken: true, // Indica si se debe usar tokens de actualización para renovar los tokens de acceso
  //     logLevel: LogLevel.Debug, // El nivel de registro para la depuración (p. ej., Debug, Info, Warn, Error)
  //     silentRenew: true, // Habilita la renovación silenciosa de tokens para mantener la sesión activa
  //     silentRenewUrl: 'https://11c4-2a02-a03f-68ca-da00-941e-899d-1b2f-90fc.ngrok-free.app/silent-renew.html', // La URL para el proceso de renovación silenciosa
  //     automaticSilentRenew: true, // Habilita la renovación silenciosa automática
  //     accessTokenExpiringNotificationTime: 60, // Tiempo en segundos antes de que expire el token de acceso cuando se debe notificar
  //     metadataUrl: 'https://sign.rentplus.eu/oidc/.well-known/openid-configuration', // La URL para obtener metadatos de OpenID Connect
  //     clientSecret: 'your-client-secret', // El secreto del cliente (si es necesario)
  //     requireHttps: true, // Indica si se requiere HTTPS para las solicitudes
  //     timeoutInSeconds: 5, // Tiempo de espera en segundos para las solicitudes de autenticación
  //     renewTimeBeforeTokenExpiresInSeconds: 30 // Tiempo en segundos antes de que expire el token de acceso para renovarlo automáticamente
  //   },
  // }),
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
