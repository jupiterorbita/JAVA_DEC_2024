package com.john.oop;

public class Sensei extends Ninja{
	
	private String wisdom;

	public Sensei(String name, String weapon) {
		super(name, weapon, 300);
		this.wisdom = "a smooth sea never made a skilled sailor";
	}
	
//	METHODS
	public String sayWisdom() {
		return this.getName() + " says " + this.getWisdom();
	}
	
	public void attack(Ninja target) { 
		System.out.println(this.getName() + " says to " + target.getName() + " violence is not the solution");
	}

	
//	GETTER AND SETTER ======
	public String getWisdom() {
		return wisdom;
	}

	public void setWisdom(String wisdom) {
		this.wisdom = wisdom;
	}

}
