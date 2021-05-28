
      //   21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
      let x = "John"
      let y = "Doe"
      console.log(x + " <> " + y)
            //   22) Create an object with properties such name, surname, email
      let person = {
            name:"Raia",
            surname:"Kisseljova",
            age:25,
            email:"rajakisseljova1996@gmail.com"
      }
      
            //   23) Delete Email from the previously created object
      delete person.email
      console.log(person)
            //   24) Create an array with 10 strings in it
      let bigArray = ["One","Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]
            //   25) Print in the console every string in the previous array
      console.log(bigArray)
      
      
      
             //   26) Create an array with 100 random numbers in it
      let arrayWithRandomNumbers = []
      for(let i = 0; i<=100; i++){
            let generatingNumbers = Math.floor(Math.random()*100)+1
            arrayWithRandomNumbers.push(generatingNumbers)
      }
      console.log(arrayWithRandomNumbers)
      
            //   27) Wrote a function to get the MAX and the MIN from the previously created array
      const findingMax = function(){
            let checkingArray = Math.max(...arrayWithRandomNumbers)
            let checkArrayForMin = Math.min(...arrayWithRandomNumbers)
            console.log("maximum value in the array is:", checkingArray)
            console.log("minimum value in the array is:", checkArrayForMin)
      }
      
      findingMax()
      
      
      
      // 28) Create an array of arrays, in which every array has 10 random numbers
      
      let generatingNumbers = Math.floor(Math.random()*100)+1
      
      
      let arrayOfArrays = [
             arrayOne = [1,5,69,85,10,2,3,10,17,99],
             arrayTwo = [51,39,54,1,5,99,63,78,52,13],
             arrayThree = [12,63,58,42,30,19,60,20,18,25]
            ]
      
      console.log(arrayOfArrays)
      
      
      //   29) Create a function that gets 2 arrays and returns the longest one
      
      const checkingLength = function(array01,array02){
            if(array01.length > array02.length){
                  console.log("First array is bigger")
            }
            else{
                  console.log("Second array is bigger")
            }
      
      }
      checkingLength(arrayOfArrays,bigArray)
      
      
      // 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
      
      