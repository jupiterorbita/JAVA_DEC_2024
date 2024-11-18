import java.util.ArrayList;

public class ArrayMethods {

    public void loopOverStuff(ArrayList<String> someArray) {
        // System.out.println(someArray);
        someArray.add("Audi");
        for (int i = 0; i < someArray.size(); i++){
            System.out.println((i+1) + " - " + someArray.get(i));
        }
    }

    // JS
    // for(let element of array) {
    //     element
    // }

    // enhanced for loop (without index ' : ')
    public void loopWithoutIndex(ArrayList<String> anArrayOfStrings){
        // System.out.println(anArrayOfStrings);
        for(String eachCar : anArrayOfStrings) {
            System.out.println(eachCar);
        }
    }

    public ArrayList<String> addAnotherCar(ArrayList<String> anArrayOfStrings, 
                                            String carName){
        anArrayOfStrings.add(carName);
        return anArrayOfStrings;
    }


}