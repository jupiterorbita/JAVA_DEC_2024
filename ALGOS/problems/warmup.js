class UtilClass { // class declaration
   greetMessage(){
     return "Hi";
   }
   totalCount(numArr) {
   // Given an array of numbers,  return the sum of the array
   }
   printMessages(msgArr) {
   // Given an array of String, write a function to print messages 
   }
 }
 // outside the class (similar to main method in Java)
 var messagesPerDay = [5, 8, 6]
 var messages = ["Please call back!", "Make sure you install jdk", "DO NOT INSTALL VS CODE EXTENSION!"]

 // instantiate the class to use
 var newBot = new UtilClass() 
 console.log(newBot.greetMessage())
 console.log(newBot.totalCount(messagesPerDay));
 newBot.printMessages(messages);
