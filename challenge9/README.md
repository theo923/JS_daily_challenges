Challenge :nine:: 

Write a function formatNumber

formatNumber has one parameter n, a number

formatNumber should return the number formatted as a readable string, inserting a comma (",") as a thousands separator. If the number n is an integer, add .0 to the formatted string, otherwise, print the decimals as they are.

Example:
formatNumber(1); //Expected "1.0"

formatNumber(1000.23); //Expected "1,000.23"

formatNumber(23082342.3285); //Expected 23,082,342.3285