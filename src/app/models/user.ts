export class User{
  name : string
  email : string
  password : string
  gender : string
  date : string 
  img :string 

  constructor(name : string, email : string, password : string, gender : string,date:string){
    this.name = name
    this.email = email
    this.password = password
    this.gender = gender
    this.date=date
    if(gender=="male")
    this.img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSos8WJJwI6qi-oyEqumgt5myV32u4aP3FvUA&usqp=CAU"
    else
    this.img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoZaQ0WjPU96ZN5YzeMoZWDD0GqOrIvRy-w&usqp=CAU"
  }
}
