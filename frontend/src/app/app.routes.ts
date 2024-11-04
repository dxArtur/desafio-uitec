import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { FormCadastrarTransacaoComponent } from './components/form-cadastrar-transacao/form-cadastrar-transacao.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { DocumentationComponent } from './components/documentation/documentation.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'cadastrar', component: FormCadastrarTransacaoComponent },
    { path: 'extrato', component: ExtratoComponent },
    { path: 'documentation', component:  DocumentationComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {}