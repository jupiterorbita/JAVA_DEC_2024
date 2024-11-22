package com.shawn.abstractinterfaces;

public class Warrior extends Human implements Defeatable {

	public Warrior(String name) {
		super(name);
		this.strength = 30;
		this.dexterity = 15;
		this.intelligence = 5;
		this.health = 120;
	}

	@Override
	void attack(Human target) {
		int targetHealth = target.getHealth();
		int remainingHealth = targetHealth - this.strength;
		target.setHealth(remainingHealth);
	}

	@Override
	void rest() {
		this.health += 20;
	}

	@Override
	public void deathcry() {
		System.out.println("GRRRRAAAAAHHHHHHHHH!");
	}

}
