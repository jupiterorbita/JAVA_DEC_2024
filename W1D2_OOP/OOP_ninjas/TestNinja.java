public class TestNinja{

    public static void main(String[] args) {
        System.out.println("hi");

        Ninja naruto = new Ninja();
        Ninja ninja1 = new Ninja("bob");
        Ninja ninja2 = new Ninja("Donatello", "staff", 200);

        // naruto.setWeapon("stick");
        // System.out.println(naruto.getWeapon());
  
        // naruto.displayStats();
        ninja1.displayStats();
        ninja2.displayStats();

        ninja1.attack(ninja2).attack(ninja2).attack(ninja2);

        ninja2.displayStats();
        System.out.println(ninja2);
    }
}