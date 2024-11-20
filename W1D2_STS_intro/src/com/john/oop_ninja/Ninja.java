package com.john.oop_ninja;

public class Ninja {
	// member variables
	private String name;
	private String weapon;
	private Integer health;
	private static int numberOfNinjasCreated = 0;

//	Constructors
	public Ninja() {
		this.name = "anonymous";
		this.weapon = "katana";
		this.health = 150;
		numberOfNinjasCreated++;
	}

	public Ninja(String name) {
		this.name = name;
		this.weapon = "katana";
		this.health = 150;
		numberOfNinjasCreated++;
	}

	public Ninja(String name, String weapon, Integer health) {
		this.name = name;
		this.weapon = weapon;
		this.health = health;
		numberOfNinjasCreated++;
	}

//	=== METHODS ===
	// static method
	public static int getNumberOfNunjas() {
		return numberOfNinjasCreated;
	}

	// methods
	public void displayStats() {
		System.out.println(this.getName() + " has:\n" + this.weapon + " as their weapon\n" + this.health + " hp"
				+ "\n-----------");
	}

	public Ninja attack(Ninja otherNinja) {
		System.out.println(this.getName() + " attacks " + otherNinja.getName());
		// remove -10 hp
		otherNinja.setHealth(otherNinja.getHealth() - 10);
		return this;
	}

//    === GETTERS AND SETTERS ====
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getWeapon() {
		return weapon;
	}

	public void setWeapon(String weapon) {
		this.weapon = weapon;
	}

	public Integer getHealth() {
		return health;
	}

	public void setHealth(Integer health) {
		this.health = health;
	}

	public static int getNumberOfNinjasCreated() {
		return numberOfNinjasCreated;
	}

	public static void setNumberOfNinjasCreated(int numberOfNinjasCreated) {
		Ninja.numberOfNinjasCreated = numberOfNinjasCreated;
	}

}
