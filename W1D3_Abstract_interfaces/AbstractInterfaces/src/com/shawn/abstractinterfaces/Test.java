package com.shawn.abstractinterfaces;

public class Test {

	public static void main(String[] args) {
		Wizard w1 = new Wizard("Jeff");
		Wizard w2 = new Wizard("Johnny");
		Warrior war1 = new Warrior("Grungar");
		Rogue r1 = new Rogue("Steven");
		
		System.out.println(w2.getHealth());
		w1.attack(w2);
		System.out.println(w2.getHealth());
		
		System.out.println(r1.getHealth());
		war1.attack(r1);
		System.out.println(r1.getHealth());
	}

}
