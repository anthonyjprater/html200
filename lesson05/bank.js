function bank() {
	let currentBalance = 30000;
	let input = prompt('Press W To Make a Withdraw\n\nPress D To Make a Deposit\n\nPress B To See Your Account Balance\n\nPress Q at Anytime to Exit');
	switch(input) {
	case "w":
    let withdraw = prompt("Please Enter Amount to Withdraw");
		if (withdraw == currentBalance) {
      let newBalance = currentBalance - withdraw;
      alert('You have Reached Your Max Withdrawal Amount');
		  alert('Your New Balance is 0');
		} else if (withdraw > currentBalance) {
			alert('Insufficient Funds');
			alert('Please Choose Another Amount')
		} else {
		  let newBalance = currentBalance - withdraw;
			alert('Your New Balance is $' + (newBalance));
		}
			bank();
    break;
	case "d":
		let deposit = prompt("Please Enter Amount to Deposit Amount");
			if (deposit > 50000) {
			alert('Max Deposit Limit Reached');
			let depositBalance = (currentBalance + 50000);
			alert('Your New Balance is ' + depositBalance);
			} else {
			let depositBalance = (currentBalance + parseInt(deposit));
			alert('Your New Balance is ' + depositBalance);
			}
			bank();
		break;
	case "b":
		let balance = prompt("Your Current Account Balance is $ " + currentBalance);
			bank();
		break;
	case "q":
		let quit = alert("Thanks for Choosing to Bank With Us")
		break;
	default:
	 return currentBalance;
    prompt('Please Choose an Available Option');
			bank();
	}
}
