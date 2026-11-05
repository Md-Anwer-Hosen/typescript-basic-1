
//basic types

let myString : string= "hello world "

let myNumber : number= 245

let myBoolean : boolean= true 

let myBigInt : bigint = 10000n



//type safe function


const add = (a: number ,b : number): number=>

{
    return a+b
}

console.log(add (4,555))



// Array and tuple an randomly modifier


const arr : string[] = ["nur", "8545" , "false"]

const arr2 : Array<string>  = ["nur", "8545" , "false"]

arr.push("only string can push")

const number : number[]  =[ 1 , 3 ,345 , 465.4 ]

const dhakaLatLong : readonly[number,number] = [23.8103 , 90.4125]  // cant push in array


const contactName = ( fastName : string , lastName? : string) :string =>

{
    return fastName + "" + lastName

}

console.log(contactName("Hello" ))


//void : 


const contactName2 = ( fastName : string , lastName? : string) : void =>

{
   console.log( fastName + "" + lastName)  // there is no return so return void

}

console.log(contactName2("Hello" ))

//default value

const contactName3 = ( fastName : string , lastName= " Bangladeshi") : void =>

{
   console.log( fastName + "" + lastName)  // there is no return so return void

}

console.log(contactName3("Hello" ))


//rest  parameters ( ...args)


const logUserAction = (...args :[string , number, boolean])=>

    {

        const [ name , age , isActive ]= args
        console.log(  name +"" + age + "" + "is" + isActive)

    }

    logUserAction( " nur" , 100 , true)



//objects


const user: {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
} = {
  name: "Hello",
  age: 5546,
  isActive: true,
  action: () => console.log("Okey"),
  badges: ["I ", "AM "],
};