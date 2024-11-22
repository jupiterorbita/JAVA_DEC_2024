package com.shawn.abstractinterfaces;

public class Rogue extends Human implements Defeatable {

	public Rogue(String name) {
		super(name);
		this.strength = 10;
		this.dexterity = 30;
		this.intelligence = 7;
		this.health = 90;
	}

	@Override
	void attack(Human target) {
		int targetHealth = target.getHealth();
		int remainingHealth = targetHealth - this.dexterity;
		target.setHealth(remainingHealth);
	}

	@Override
	void rest() {
		this.health += 20;
	}

	@Override
	public void deathcry() {
		System.out.println("Curses!");
	}

}
