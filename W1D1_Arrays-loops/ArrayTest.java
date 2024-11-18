import java.util.Arrays;
import java.util.ArrayList;

public class ArrayTest {

    public static void main(String[] args) {

        // ARRAYS
        // primitive Arrays
        int[] numbers = {11,22,33};
        System.out.println(Arrays.toString(numbers));

        for(int i = 0; i < numbers.length; i++ ) {
            numbers[i] = numbers[i] + 100;
            System.out.println(numbers[i]);
        }
        System.out.println(Arrays.toString(numbers)); // ?

        boolean[] votes = {true, false, true};
        char[] alphabet = {'a', 'b', 'c', 'd'};


        System.out.println("============ \n");
        // --- ARRAYLIST -----
        // 1. import ArrayList
        // 2. instantiate the ArrayList

        ArrayList<String> carList = new ArrayList<String>();

        carList.add("Mercedes");
        carList.add("Type R");
        carList.add("BMW");
        System.out.println(carList);

        System.out.println(carList.get(1));



        String y = "bob";
        String z = new String();
        ArrayMethods x = new ArrayMethods();
        x.loopOverStuff(carList);

        System.out.println("there are " + carList.size() + " cars");

        x.loopWithoutIndex(carList);

        ArrayList<String> newCarList = x.addAnotherCar(carList, "Honda");
        System.out.println(newCarList);
        System.out.println(newCarList == carList);
    }

}