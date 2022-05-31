import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
// import {AuthService} from 'src/app/services/auth.service';
@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {

  validationUserMessage ={
    email:[
      {type:"required", message:"S'il vous plait Entrez votre Email"},
      {type:"pattern", message:"Email incorrect"}
    ],
    password:[
      {type:"required", message:"S'il vous plait Entrez votre Mot de passe"},
      {type:"minlength", message:"Le Mot de passe doit avoir au moins 8  caractere"}

    ] 
  }

  validationFormUser: FormGroup;
  constructor( public formbuilder: FormBuilder ,private router: Router
    ,  private nav: NavController,) { }

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
  

    // LoginUser(value){
    //   console.log("Am logged in");
    //   try{
    //      this.authservice.loginFireauth(value).then( resp =>{
    //        console.log(resp);
    //     //  this.router.navigate(['tabs'])
     
    //      if(resp.user){
    
    //        this.authservice.setUser({
    //          username : resp.user.displayName,
    //          uid: resp.user.uid
    //        })
    
    //       const userProfile = this.firestore.collection('profile').doc(resp.user.uid);
    
    //        userProfile.get().subscribe( result=>{
    
    //         if(result.exists){
    //           this.nav.navigateForward(['tabs']);
    //         }else{
    
    //           this.firestore.doc(`profile/${this.authservice.getUID()}`).set({
    //             name: resp.user.displayName,
    //             email: resp.user.email
    //           });
    
    //            this.nav.navigateForward(['uploadimage']);
    //         }
    //        })
    //      }
      
           
    //      })
    //   }catch(err){
    //     console.log(err);
    //   }
    // }
  
  
  }
}
