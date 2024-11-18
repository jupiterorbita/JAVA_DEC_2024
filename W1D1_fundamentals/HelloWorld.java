import java.util.Arrays;

// import the class from the folder
import extras.Methods;

// every file is a class
public class HelloWorld {

    // entry point to start the app
    public static void main(String[] args) {
        // System.out.println("Hello Bob!");
        // System.out.println("Hello Sue!");

        // System.out.println(Arrays.toString(args));
        // System.out.println(args[0]);
    
        // VARIABLES
        //  -- Primitive --
        boolean vote = true;
        int year = 2024;
        byte g = 123; 
        double taxRate = 3.5;
        char letter = 'a';
        long veryLargeNumber = 1232131232112312L;

        // System.out.println(year);

        // Object Types / Class Wrappers
        String name = "Steve";
        String name3 = "Steve";
        String name2 = new String("Steve");

        Integer width = 5;
        Double pie = 3.14159265;
        Boolean isAdmin = false;

        System.out.println("hello " + name);
        
        int nameLength = name.length();
        System.out.println(nameLength);

        // compare 2 strings
        System.out.println(name == name3); // false
        System.out.println(name.equals(name2)); // true
        
        // null

        // conditionals
        boolean isRaining = false;
        boolean isCold = true;
            
        if(isRaining) {
            System.out.println("Bring an umbrella.");
        }
        else if(isCold) {
            System.out.println("Wear a coat.");
        }
        else {
            System.out.println("Have fun!");
        }
    
        //  String methods
        String ninja = String.format("Hi %s, you owe me $ %.2f !", "Jack", 25.23);
        System.out.println(ninja);

        
        System.out.println("===========");
        
        // create an instance of the class we want to execute
        AnotherFile x = new AnotherFile();
        // System.out.println(x);
        x.sayHi();

        
        String message = x.sayHello("Alice");
        System.out.println(message);

        String message2 = x.sayHello();
        System.out.println(message2);

        String message4 = x.sayHello(22);
        System.out.println(message4);

        Methods blah = new Methods();
        Integer result = blah.addition(11,22);
        System.out.println(result);

    }

}