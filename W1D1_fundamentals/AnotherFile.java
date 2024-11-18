public class AnotherFile {
// access modifier
//    |
//    |   return type
//    |     |
//    |     |   method name (class function)
//    |     |     |
//    V     V     V
    public void sayHi() {
        System.out.println("hello there! from AnotherFile");
    }

    public String sayHello(String someName){
        return "hello " + someName;
    }

    // overloading an existing method
    public String sayHello(){
        return "hello anon";
    }

    public String sayHello(int age){
        System.out.println("hello you are " + age);
        return "hello you are " + age + " years old";
    }
}