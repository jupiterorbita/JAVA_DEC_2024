package com.john.bankAccount;

public class BankAccount {
	// MEMBER VARIABLES
	private double checkingBalance;
	private double savingsBalance;

	private static int accounts;
	private static double totalMoney; // refers to the sum of all bank account checking and savings balances

	// CONSTRUCTOR
	// Be sure to increment the number of accounts
	public BankAccount(double checkingBalance, double savingsBalance) {
		this.checkingBalance = checkingBalance;
		this.savingsBalance = savingsBalance;
		accounts++;
		totalMoney += (checkingBalance + savingsBalance);
	}

	// METHODS
	// deposit
	// - users should be able to deposit money into their checking or savings
	// account
	public void deposit(String accountType, double money) {
		if (accountType.equals("savings")) {
			// add to savings account:
			this.setSavingsBalance(this.getSavingsBalance() + money);
			System.out.println("you have deposed $ " + money + " and now your savings are: $ " + this.getSavingsBalance());
		} else {
			System.out.println("nothing");
			
		}
	}
	// withdraw
	// - users should be able to withdraw money from their checking or savings
	// account
	// - do not allow them to withdraw money if there are insufficient funds
	// - all deposits and withdrawals should affect totalMoney
	// getBalance
	// - display total balance for checking and savings of a particular bank account
	public double displayBalances() {
		System.out.println("$ " + this.getCheckingBalance() + " - checking balance");
		System.out.println("$ " + this.getSavingsBalance() + " - savings balance");
		double totalMoney = this.getSavingsBalance() + this.getCheckingBalance();
		System.out.println("Total my account has combined is : $ " + totalMoney);
		return totalMoney;
	}

	// ==== GETTERS AND SETTERS ==========
	public double getCheckingBalance() {
		return checkingBalance;
	}

	public void setCheckingBalance(double checkingBalance) {
		this.checkingBalance = checkingBalance;
	}

	public double getSavingsBalance() {
		return savingsBalance;
	}

	public void setSavingsBalance(double savingsBalance) {
		this.savingsBalance = savingsBalance;
	}

	public static int getAccounts() {
		return accounts;
	}

	public static void setAccounts(int accounts) {
		BankAccount.accounts = accounts;
	}

	public static double getTotalMoney() {
		return totalMoney;
	}

	public static void setTotalMoney(double totalMoney) {
		BankAccount.totalMoney = totalMoney;
	}
}
