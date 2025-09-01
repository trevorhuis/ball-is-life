package main

import "fmt"

var name = "Frontend Masters"

func calculateTax(price float32) (float32, float32) {
	return price * 0.08, price * 0.02
}

func main() {
	stateTax, localTax := calculateTax(100)
	fmt.Println(stateTax, localTax)

	printData()
}
