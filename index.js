
//Proble1 : Factory Function

function iPhone1(ASIN,color,display,camera){
    let obj = {}
    obj.ASIN = ASIN,
    obj.color = color,
    obj.display = display,
    obj.camera = camera

   obj.dial=()=>{
        return "tring.. tring..."
   }
   obj.sendMessage =()=>{
    return "Sending message..."
   }
   obj.cameraClick=()=>{
   return "Camera clicked"
   }
   return obj
}


let x=  iPhone1(1,"red","OLED","50px")
console.log(x)
console.log(x.sendMessage())

//Proble2 : Constructor Function

function IPhone1(ASIN,color,display,camera,bluetooth){
  
     this.ASIN = ASIN,
     this.color = color,
     this.display = display,
     this.camera = camera,
     this.bluetooth = bluetooth
 
    this.dial=()=>{
         return "tring.. tring..."
    }
    this.sendMessage =()=>{
     return "Sending message..."
    }
    this.cameraClick=()=>{
     return "Camera clicked"
    }
    this.bluetooth =()=>{
     return "Bluetooth connected successfully..."
    }
    
 }

 let phone = new IPhone1("2","yellow","LED","65PX","Active")
 console.log(phone)
 console.log(phone.sendMessage())
 