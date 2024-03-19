import {bootstrapApplication} from "@angular/platform-browser";
import {MainComponent} from "./app/components/main/main.component";
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";

bootstrapApplication(MainComponent,
  {
    providers: [
      provideRouter(routes),
    ]
  }
  ).catch(err => console.error(err));
