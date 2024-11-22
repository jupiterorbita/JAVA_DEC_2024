package com.shawn.abstractinterfaces;

public abstract class Human {
	protected String name;
	protected int strength;
	protected int dexterity;
	protected int intelligence;
	protected int health;
	
	// Constructor
	public Human(String name) {
		this.name = name;
	}
	
	// abstract method
	abstract void attack(Human target);
	abstract void rest();

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getStrength() {
		return strength;
	}

	public void setStrength(int strength) {
		this.strength = strength;
	}

	public int getDexterity() {
		return dexterity;
	}

	public void setDexterity(int dexterity) {
		this.dexterity = dexterity;
	}

	public int getIntelligence() {
		return intelligence;
	}

	public void setIntelligence(int intelligence) {
		this.intelligence = intelligence;
	}

	public int getHealth() {
		return health;
	}

	public void setHealth(int health) {
		this.health = health;
	}

}
