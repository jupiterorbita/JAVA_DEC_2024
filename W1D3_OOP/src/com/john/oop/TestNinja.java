package com.john.oop;

public class TestNinja {

	public static void main(String[] args) {
		
		Ninja ninja1 = new Ninja("Bob", "staff", 150);
		Ninja ninja2 = new Ninja("Alice", "sword", 220);
		
		ninja1.displayStats();
		ninja2.displayStats();
		
		ninja1.attack(ninja2);
		ninja2.attack(ninja1);
		
//		create the sub-class
		Sensei masterSplinter = new Sensei("Master Splinter", "staff"); 
		String message = masterSplinter.sayWisdom();
		System.out.println(message);
		
		masterSplinter.attack(ninja2);
		ninja2.attack(masterSplinter);
		
		Samurai afroSamurai = new Samurai("Afro Samurai", "katana");
		afroSamurai.attack(masterSplinter);
	}

}
