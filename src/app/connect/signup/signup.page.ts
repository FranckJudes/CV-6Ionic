import { error } from 'selenium-webdriver';
import { AuthService } from 'src/app/services/auth.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth } from '@angular/fire/compat/auth';
import "firebase/compat/auth";
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

validationUserMessage ={
  names:[{type:"required", message:"Entrez votre Nom complet"}],
  phone:[{type:"required", message:"Entrez votre numero"}],
  email:[
    {type:"required", message:"Entrez votre Email"},
    {type:"pattern", message:"Email incorrect"}
  ],
  password:[
    {type:"required", message:"Entrez votre Mot de passe"},
    {type:"minlength", message:"Au moins 8 caractere"}
  ] 
}
loading : any;
message : "Echec ..."
validationFormUser: FormGroup;
  constructor(public router : Router , private afAuth : AngularFireAuth,
     public formbuilder : FormBuilder,
     private authService :AuthService,
    private alertCtrl : AlertController,
    public navCtr : NavController
    ){ }

  ngOnInit(){
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      phone : new FormControl('',Validators.compose([
        Validators.required
      ])),
      names : new FormControl('',Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    })
  }
  registerUser(value){  

        this.showalert('Veuillez','patient'); 
       const user = this.authService.userRegistration(value);
      
          if (user) { 
            this.router.navigate['/loginscreen'];
          }else {  
            this.showalert('Echec de Connexion', 'Svp Esssayer');
          } 
      
     
        console.log(error);
        
  }
  
  gotosignIn(){
    this.router.navigate(['/loginscreen'])
  }
  
  async showalert(header , message){
    const load = await this.alertCtrl.create({
      header,
      message,
      buttons : ['Okay'],
    })
    await load.present();
  }

}
