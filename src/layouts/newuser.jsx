import React from 'react';


export default function New_user(){
    return(
        <div>
             <div class="container pr-0 pt-20 w-screen h-screen bg- justify-items-center">
            <div class="max-w-lg mx-auto my-10 bg-white pl-8 pr-8 pt-8 pb-2 rounded-xl shadow shadow-slate-300">
      
        <form action="" class="my-10">
            <div class="flex flex-col space-y-5">
                
            <div>
            <label for="name">
                    <p class="font-medium text-slate-700 pb-2">Name </p>
                    <input id="name" name="name" type="name" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your name "></input>
                </label>
           <label for="email">
                    <p class="font-medium text-slate-700 pb-2">Email </p>
                    <input id="email" name="email" type="email" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your email "></input>
                </label>
                <label for="phonenumber">
                    <p class="font-medium text-slate-700 pb-2">PhoneNumber</p>
                    <input id="phonenumber" name="phonenumber" type="number" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your phonenumber"></input>
                </label>
                <label for="enrollnumber">
                    <p class="font-medium text-slate-700 pb-2">EnrollNumber</p>
                    <input id="enrollnumber" name="enrollnumber" type="number" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your enrollnumber"></input>
                </label>
                <label for="date">
                    <p class="font-medium text-slate-700 pb-2">Date</p>
                    <input id="date" name="date" type="date" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your date"></input>
                </label>
                </div>
                <button class="w-full py-3 font-medium text-white bg-yellow-400 hover:shadow inline-flex space-x-2 items-center justify-center" >
                    
                      <span>Add Student</span>
                </button>
               
            </div>
        </form>
        </div></div>
        </div>
    )}