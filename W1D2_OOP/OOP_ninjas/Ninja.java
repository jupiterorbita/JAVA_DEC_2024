public class Ninja {

    // member variables
    private String name;
    private String weapon;
    private Integer health;
    private static int numberOfNinjasCreated = 0;

    // Constructor(s)
    public Ninja() {
        this.name = "anonymous";
        this.weapon = "katana";
        this.health = 150;
        numberOfNinjasCreated++;
    }

    // overloading the Ninja constuctor
    public Ninja(String someNinjaName) {
        this.name = someNinjaName;
        this.weapon = "katana";
        this.health = 150;
        numberOfNinjasCreated++;
    }

    public Ninja(String someNinjaName, String weapon, Integer hp) {
        this.name = someNinjaName;
        this.weapon = weapon;
        this.health = hp;
        numberOfNinjasCreated++;
    }

    // static method
    public static int getNumberOfNunjas() {
        return numberOfNinjasCreated;
    }


    // methods
    public void displayStats() {
        System.out.println(this.getName() + " has:\n" + this.weapon + " as their weapon\n" + this.health + " hp" + "\n-----------");
    }

    public Ninja attack(Ninja otherNinja){
        System.out.println(this.getName() + " attacks " + otherNinja.getName());
        // remoce -10 hp
        otherNinja.setHealth(otherNinja.getHealth() - 10);
        return this;
    }



    // === GETTERS AND SETTERS for the member variables ===

    // getter for name
    public String getName() {
        return this.name;
    }
    // setter for name
    public void setName(String nameParam){
        this.name = nameParam;
    }


    // getter for weapon
    public String getWeapon() {
        return this.weapon;
    }
    // setter for weapon
    public void setWeapon(String weaponParam){
        this.weapon = weaponParam;
    }
    
    
    // getter for health
    public Integer getHealth() {
        return this.health;
    }
    // setter for health
    public void setHealth(Integer healthParam){
        this.health = healthParam;
    }



}