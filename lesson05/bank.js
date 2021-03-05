let currentBalance = 30000;

function withdrawal() {
	let withdraw = prompt("Please Enter Amount to Withdraw");
			if (withdraw == currentBalance) {
				let newBalance = currentBalance - withdraw;
				alert('You have Reached Your Max Withdrawal Amount');
				alert('Your New Balance is 0');
				currentBalance = newBalance;
			} else if (withdraw > currentBalance) {
				alert('Insufficient Funds');
				alert('Please Choose Another Amount')
			} else if ((currentBalance - withdraw) <= 300) {
				let input = prompt('Low Balance Warning Below $300\n\nWould You Like To Proceed With This Transaction? Y/N');
				switch(input) {
					case "y":
						let newBalance = currentBalance - withdraw;
						alert('Your New Balance is $' + (newBalance));
						currentBalance = newBalance;
						break;
					case "n":
						alert('Please Choose Another Amount');
						withdrawal();
						break;
				}
			} else {
				let newBalance = currentBalance - withdraw;
				alert('Your New Balance is $' + (newBalance));
				currentBalance = newBalance;
			}
}

function newDeposit() {
	let deposit = prompt("Please Enter Amount to Deposit Amount");
			if (deposit > 50000) {
			alert('Max Deposit Limit Reached');
			let depositBalance = (currentBalance + 50000);
			alert('Your New Balance is ' + depositBalance);
			currentBalance = depositBalance;
			} else {
			let depositBalance = (currentBalance + parseInt(deposit));
			alert('Your New Balance is ' + depositBalance);
			currentBalance = depositBalance;
			}
}

function checkBalance(){
	let balance = prompt("Your Current Account Balance is $ " + currentBalance);
}

function bank() {
	let input = prompt('Press W To Make a Withdraw\n\nPress D To Make a Deposit\n\nPress B To See Your Account Balance\n\nPress Q at Anytime to Exit');
	switch(input) {
		case "w":
			withdrawal();
			bank();
      break;
		case "d":
			newDeposit();
			bank();
			break;
		case "b":
			checkBalance();
			bank();
			break;
		case "q":
			let quit = alert("Thanks for Choosing to Bank With Us!")
			break;
		default:
    	prompt('Please Choose an Available Option');
			bank();
	}
}

function textswitch() {
  document.getElementById("test").innerHTML = "NO NOT THAT B OF A!!!!!";
	document.getElementById("test").style.color = "red";
}

function switchback() {
	document.getElementById("test").innerHTML = "B of A";
	document.getElementById("test").style.color = "white";
}
