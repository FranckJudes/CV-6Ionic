import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService} from 'src/app/services/auth.service';
import { LoadingController } from '@ionic/angular';
import {AngularFireAuth } from '@angular/fire/compat/auth';
import "firebase/compat/auth";


@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {
 
  alle : any;
     
    validationFormUser: FormGroup;
    connected : boolean;

    constructor( public formbuilder: FormBuilder ,private router: Router
      ,private nav: NavController, public authservice : AuthService, public afAuth : AngularFireAuth,
      private alert :AlertController,public alertCtrl : AlertController){
              
       }
       
  

  validationUserMessage ={
    email:[
      {type:"required", message:"Entrez votre Email"},
      {type:"pattern", message:"Email incorrect"}
    ],
    password:[
      {type:"required", message:"Entrez votre Mot de passe"},
      {type:"minlength", message:"Au moins 8 caractere"}

    ] 
  }
  //-------------------------------------------
  async alerte(tete : string,msg : string){
    this.alle = await  this.alert.create({
      header : tete,
      message :msg,
      buttons : ['OK']
    })   
  }
  
 
  seconnecter(value){
    console.log("hello");
     try{
          this.authservice.LoginFireauth(value).then( resp => {
            console.log(resp);
            this.router.navigate(['tabs']); 
          })
     }catch(err){
      console.log(err);
      
     }
  }
  sinscire(){
    this.router.navigate(['/signup']);
  }
    
  // }
  //-------------------------------------------------------------

 
  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    })
   
  }
  
}

