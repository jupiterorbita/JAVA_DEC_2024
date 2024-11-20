package com.john.oop;

public class Ninja {
//	member variables
	private String name;
	private String weapon;
	private String school;
	private int powerLevel;
	private int health;
	private int stamina;

//	CONSTRUCTOR
	public Ninja(String name, String weapon, int powerLevel) {
		this.name = name;
		this.weapon = weapon;
		this.powerLevel = powerLevel;
		this.health = 1000;
		this.stamina = 50;
		this.school = "Coding Dojo";
	}

//	METHODS 
	public void attack(Ninja target) {
		System.out.println(this.getName() + " attacks " + target.getName());
		target.setHealth(target.getHealth() - this.getPowerLevel());
		System.out.println(target.getName() + " now has " + target.getHealth() + " hp left");
	}
	
	public void displayStats() {
		System.out.println(this.getName() + " has:\n" + this.getWeapon() + "\n" + this.getHealth() + " hp");
	}

//	=== GETTERS AND SETTERS ====
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

	public String getSchool() {
		return school;
	}

	public void setSchool(String school) {
		this.school = school;
	}

	public int getPowerLevel() {
		return powerLevel;
	}

	public void setPowerLevel(int powerLevel) {
		this.powerLevel = powerLevel;
	}

	public int getHealth() {
		return health;
	}

	public void setHealth(int health) {
		this.health = health;
	}

	public int getStamina() {
		return stamina;
	}

	public void setStamina(int stamina) {
		this.stamina = stamina;
	}

}
