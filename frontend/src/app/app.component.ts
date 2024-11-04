import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { FormCadastrarTransacaoComponent } from "./components/form-cadastrar-transacao/form-cadastrar-transacao.component";
import { ExtratoComponent } from "./components/extrato/extrato.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, FormCadastrarTransacaoComponent, ExtratoComponent, WelcomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  constructor() {}
}
