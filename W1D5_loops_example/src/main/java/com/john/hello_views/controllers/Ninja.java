package com.john.hello_views.controllers;

public class Ninja {
	
	private String name;
	private int power;
	
	
		
	public Ninja(String name) {
		this.name = name;
		this.power = 100;
	}
	
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPower() {
		return power;
	}
	public void setPower(int power) {
		this.power = power;
	}
	
	
}
