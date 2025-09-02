package main

import "fmt"

var name = "Frontend Masters"

func birthday(age *int) {
	if *age > 140 {
		panic("Too old to be true")
	}
	fmt.Printf("The pointer is %v and the value is %d \n", age, *age)
	*age++
}

func main() {
	defer fmt.Println("Bye!!")

	age := 22
	birthday(&age)
	birthday(&age)
	birthday(&age)
	fmt.Println(age)
}
