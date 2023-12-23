/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const result = {};
  transactions.forEach((transaction) => {
    if(transaction.category in result) {
      result[transaction.category] += transaction.price;
    } else {
      result[transaction.category] = transaction.price;
    }
  });
  const ans = [];
  Object.keys(result).forEach((key) => {
    ans.push({
      category: key,
      totalSpent: result[key]
    })
  });
  return ans;
}

module.exports = calculateTotalSpentByCategory;
