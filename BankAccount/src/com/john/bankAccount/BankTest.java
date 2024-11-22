package com.john.bankAccount;

public class BankTest {

	public static void main(String[] args) {
		// Create 3 bank accounts
		
		BankAccount acc1 = new BankAccount(100, 500);
		BankAccount acc2 = new BankAccount(0, 0);
		BankAccount acc3 = new BankAccount(2000, 10000);
		
		System.out.println(BankAccount.getAccounts());
		System.out.println(BankAccount.getTotalMoney());
		
		acc1.displayBalances();
//		acc2.displayBalances();
//		acc3.displayBalances();
		
		acc1.deposit("savings", 1300);
//		acc1.deposit("asdasdasd", 1300);
		

		

		// Deposit Test
		// - deposit some money into each bank account's checking or savings account and
		// display the balance each time
		// - each deposit should increase the amount of totalMoney

		// Withdrawal Test
		// - withdraw some money from each bank account's checking or savings account
		// and display the remaining balance
		// - each withdrawal should decrease the amount of totalMoney

		// Static Test (print the number of bank accounts and the totalMoney)

	}

}
