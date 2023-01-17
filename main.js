function showArrivals(){
    const Arrivals=document.getElementById("products-p");
    Arrivals.innerHTML="";
    newArrivals.map(e=>{
let productA=
                `<div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <img src="${e.path}" class="card-img-top" alt="..."
                        <div class="card-body">
                            <h5 class="card-title">${e.name}</h5>
                            <p class="card-text">${e.price}</p>
                            <a href="#" class="btn btn-primary">Add to Card</a>
                        </div>
                    </div>
                </div>`;
Arrivals.innerHTML+=productA;
})}

function showAClothing(){
    const Arrivals=document.getElementById("products-p");
    Arrivals.innerHTML="";
    Cloths.map(e=>{
let productA=
                `<div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <img src="${e.path}" class="card-img-top" alt="..."
                        <div class="card-body">
                            <h5 class="card-title px-3">${e.name}</h5>
                            <p class="card-text px-3">${e.price}</p>
                            <a href="#" class="btn btn-primary">Add to Card</a>
                        </div>
                    </div>
                </div>`;
Arrivals.innerHTML+=productA;
})}

function showShoes(){
    const Arrivals=document.getElementById("products-p");
    Arrivals.innerHTML="";
    shoes.map(e=>{
let productA=
                `<div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <img src="${e.path}" class="card-img-top" alt="..."
                        <div class="card-body">
                            <h5 class="card-title px-3">${e.name}</h5>
                            <p class="card-text px-3">${e.price}</p>
                            <a href="#" class="btn btn-primary">Add to Card</a>
                        </div>
                    </div>
                </div>`;
Arrivals.innerHTML+=productA;
})}

function showAccessories(){
    const Arrivals=document.getElementById("products-p");
    Arrivals.innerHTML="";
    Access.map(e=>{
let productA=
                `<div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <img src="${e.path}" class="card-img-top" alt="..."
                        <div class="card-body">
                            <h5 class="card-title px-3">${e.name}</h5>
                            <p class="card-text px-3">${e.price}</p>
                            <a href="#" class="btn btn-primary">Add to Card</a>
                        </div>
                    </div>
                </div>`;
Arrivals.innerHTML+=productA;
})}

// ********** Login Section *********//
const usersList=[
    {name:"Gurubarathi",password:12345,email:"gurubarathi@gmail.com",age:26},
    {name:"velmurugan",password:54321,email:"velmurugan@gmail.com",age:26}
    ]
console.log(usersList);

const forms = document.getElementById("fors");
const names=document.getElementById("name");
const password=document.getElementById("password");
const divs =document.getElementById("check"); 

function verifyUser(){
    const currentObject = usersList.find(e=> e.name === names.value);
   
    if(currentObject != undefined){
        if(names.value === currentObject.name && password.value==currentObject.password)
        {
            divs.innerHTML="Login  succeesfully"; 
            displayProfile();
            document.getElementById("fors").reset();
        }
    }else{
        console.log("error 404")
        const check = document.getElementById("check");
        check.textContent="Username/password is incorrect"; 
        document.getElementById("Newsign").className="bottomL"
    }
}
function hidePages(){
    const header=document.getElementById("header");
    const banner=document.getElementById("banner");
    const Log=document.getElementById("Log");
    const product=document.getElementById("product");
    product.className="displayNone";
    header.className="displayNone";
    banner.className="displayNone";
    Log.className="displayBlock";

}

function createAccount(){
    const Log=document.getElementById("Log");
    Log.className="displayNone";
    const Sign=document.getElementById("Sign");
    Sign.className="sign_form";
}

function displayProfile(){
    const header=document.getElementById("header");
    const banner=document.getElementById("banner");
    const Log=document.getElementById("Log");
    const product=document.getElementById("product");

    product.className="displayBlock";
    header.className="displayBlock";
    banner.className="displayBlock";
    Log.className="displayNone";
}
//******SignIn Section*******//

const newUSer={id:''};
const sName=document.getElementById("sname");
const sEmail=document.getElementById("email");
const sPassword=document.getElementById("spassword");
const cPassword=document.getElementById("cpassword");

function signUser(){
   newUSer.name=sName.value;
   newUSer.email=sEmail.value;
   newUSer.password=cPassword.value;
   console.log(newUSer);
   usersList.push(newUSer);
    console.log(usersList);
 document.getElementById("form2").reset();
 const Sign=document.getElementById("Sign");
 Sign.className="displayNone";
 const Log=document.getElementById("Log");
  Log.className="displayBlock";
  document.getElementById("fors").reset();
}












            /***************************
                 Products List
            ****************************/
 //new Arrivals Api
 const newArrivals=[
    {
        path:"https://images.unsplash.com/photo-1548790176-f46bb4d5ef7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW5zJTIwJTIwYXJyaXZhbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name:"fttiset",
        price:"$39"  
      }
    ,
    
    {
      path:"https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHdvbWVucyUyMCUyMGFycml2YWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name:"Sawerwe",
      price:"$22"  
    }
    ,
    {
        path:"https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW5zJTIwJTIwQWNjZXNzb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name:"Kuruaso",
        price:"$31"  
      }
      ,
      {
        path:"https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVucyUyMCUyMGFycml2YWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name:"owal set",
        price:"$33"  
      }
    ,
    {
      path:"https://images.unsplash.com/photo-1603290939650-b553549a5739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHdvbWVucyUyMCUyMEFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name:"suhga bjh",
      price:"$37"  
    },
    {
        path:"https://images.unsplash.com/photo-1597633125097-5a9961e1f03d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name:"hipponb",
        price:"$35"  
      }
    ,
    {
      path:"https://images.unsplash.com/photo-1646371294334-d4a342578cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fHdvbWVucyUyMCUyMEFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name:"jghugid snk",
      price:"$12"  
    }
    ,
    {
      path:"https://images.unsplash.com/photo-1647233061722-43de3bee81e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHdvbWVucyUyMCUyMEFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name:"shcshda aj",
      price:"$44"  
    }
    ,
    {
      path:"https://images.unsplash.com/photo-1532947918646-8fdf3c503517?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVucyUyMCUyMEFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name:"hipponb",
      price:"$35"  
    },
   

 ]
// Clothing API
const Cloths=[
    {
    path:
    'https://media.istockphoto.com/id/1009480924/photo/photo-portrait-of-attractive-pretty-cute-lovable-fascinating-delicate-alluring-gorgeous-nice.jpg?s=612x612&w=0&k=20&c=OZHf3qtTeweGfo6JtzIKVzF8ptHlHEqbDsLG7WE9NnY=',
    name:"amazed by you cardian",
    price:"$32"
    },
    {
     path:"https://media.istockphoto.com/id/1397185406/photo/portrait-of-woman-smiling-against-wall-with-palm-tree-shade.jpg?s=612x612&w=0&k=20&c=QnX-8KeN5NXpA00iDOHJ6usI0h8h69fbCmos2XRG78k=",
     name:"Ara suits",
     price:'$21',
    },
    {
        path:"https://media.istockphoto.com/id/1170648040/photo/beautiful-lady-overjoyed-by-warm-spring-breeze-dream-of-romantic-date-wear-cute-floral-dress.jpg?s=612x612&w=0&k=20&c=UzOoNF1-F6pR5uSu6mTqnPAYR4eg6paDy4FKfhYVInU=",
        name:"del suit",
        price:'$29'
    },
    {
        path:"https://media.istockphoto.com/id/1186044662/photo/beautiful-happy-girl-walking-by-the-field.jpg?s=612x612&w=0&k=20&c=WXzzHX8MHhcR_QJDJxtaP9agTPS-6GponJEuCVeWIAg=",
        name:"sf gewf",
        price:'$33'
    },
    {
        path:'https://media.istockphoto.com/id/1297614112/photo/young-indian-female-wearing-ethnic-green-floral-summer-dress-with-jewelry-and-makeup.jpg?s=612x612&w=0&k=20&c=kARLI8jfr0fKjx_1mUXdWVCsljZExVg9UFHHEP3AQCw=',
        name:"nsb kjk",
        price:"$43"
    },
    {
     path:'https://media.istockphoto.com/id/915320148/photo/elegant-young-woman-is-looking-away-smiling-and-thinking.jpg?s=612x612&w=0&k=20&c=n2FD9mwA7bIU2ys8M3XM2L9Y_wlmVVOFcRtdF9RkUJc=',
     name:'hsudh kl',
     price:'$32'
    },
    {
        path:'https://media.istockphoto.com/id/1178855373/photo/smiling-female-dressed-boho-fashion-style-colorful-long-dress-with-black-leather-biker-jacket.jpg?s=612x612&w=0&k=20&c=3n6bVOuNVtGLZIkAzv9mbvIcnJbnuxBdUnvzfQNrAG8=',
        name:'sjhian ip',
        price:'$44'
    },
    {
        path:'https://media.istockphoto.com/id/1150453308/photo/happy-curly-african-american-woman-sitting-in-yellow-dress-on-chair-and-smiling-on-orange.jpg?s=612x612&w=0&k=20&c=9LykkTo5WYgI8SA2emDulUrUELYLXC18K4MrdCKd7IM=',
        name:'ash aosfoj ',
        price:'$22'
    },
    {
        path:'https://media.istockphoto.com/id/1164892560/photo/pretty-lady-indicating-fingers-empty-space-showing-black-friday-prices-wear-red-dress.jpg?s=612x612&w=0&k=20&c=BA3u6hjiAo8GRQ-bWSDJqhOTC0gFfL9E7LfvkwKKDMA=',
        name:'nnpjam loapo',
        price:"$39"
    }
]
// shoes Api

const shoes=[
    {
     path:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
     name:"kicki",
     price:"$14"
    }
    ,{
        path:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name:"footi",
        price:"$21"
    }
    ,{
        path:"https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name:"gootbal",
        price:"$12"
    
    }
    ,{
        path:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name:"hhsks",
        price:"$18"
    }
    ,{
        path:"https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name:"doorio",
        price:"$21"
    }
    ,{
        path:"https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name:"stepee",
        price:"$10"
    }
    ,{
        path:"https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name:"xyvoi",
        price:"$19"
    }
    ,{
        path:"https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name:"Zass",
        price:"$22"
    }
    ,{
        path:"https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name:"ewqd",
        price:"$16"
    }
]
// Accessories Api

const Access=[
    {
    path:"https://images.unsplash.com/photo-1590548784585-643d2b9f2925?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name:"bracess",
    price:"$29"
    }
    ,{
        path:"https://plus.unsplash.com/premium_photo-1670963025028-bcf3406c40fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name:"neckiue",
        price:"$23"
    }
    ,{
        path:"https://images.unsplash.com/photo-1603298333647-ed142dbbc9d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name:"ringess",
        price:"$27"
    }
    ,{
            path:"https://images.unsplash.com/photo-1571974096035-bc3568627608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name:"figsd",
            price:"$21"
     }
     ,{
        path:"https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name:"Qeer",
        price:"$31"
    }
    ,{
        path:"https://images.unsplash.com/photo-1569388330292-79cc1ec67270?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name:"Wriste",
        price:"$19"
    }
    ,{
        path:"https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name:"dwere",
        price:"$23"
    }
    ,{
        path:"https://images.unsplash.com/photo-1561172478-a203d9c8290e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name:"Sqwee",
        price:"&24"
    }
    ,
    {
        path:"https://images.unsplash.com/photo-1601057836844-a8a336439a27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name:"Gurenk",
        price:"$22"
    }
]