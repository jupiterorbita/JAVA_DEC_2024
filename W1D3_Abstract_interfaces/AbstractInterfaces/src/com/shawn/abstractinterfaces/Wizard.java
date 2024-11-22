package com.shawn.abstractinterfaces;

public class Wizard extends Human implements Defeatable {

	public Wizard(String name) {
		super(name);
		this.strength = 5;
		this.dexterity = 8;
		this.intelligence = 30;
		this.health = 60;
	}

	@Override
	void attack(Human target) {
		int targetHealth = target.getHealth();
		int remainingHealth = targetHealth - this.intelligence;
		target.setHealth(remainingHealth);
	}

	@Override
	void rest() {
		this.health += 20;
	}

	@Override
	public void deathcry() {
		System.out.println("You have bested my spells!");
		
	}

}
