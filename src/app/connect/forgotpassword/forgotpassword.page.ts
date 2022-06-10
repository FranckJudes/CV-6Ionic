import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})

export class ForgotpasswordPage implements OnInit {
   experiences;
   
  experience = {
    id : '',
    nom : '',
  };

  constructor(private firestore  : AngularFirestore){
   
    this.firestore.collection('experiences')
          .valueChanges({idField: 'cv' })
          .subscribe( experiences => {
          this.experiences = experiences;
          console.log(experiences);
    })

   }

    enregister() :void{
        this.firestore.collection('experiences').add(this.experience);
    }
 
  ngOnInit(){
  }

}
