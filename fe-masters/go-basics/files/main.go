package main

import (
	"fmt"
	"os"

	"frontendmasters.com/go/files/fileutils"
)

func main() {
	rootPath, _ := os.Getwd()

	c, err := fileutils.ReadTextFile("data/text.txt")
	if err != nil {
		fmt.Println(c)
	} else {
		fmt.Printf("Error panic: %v", err)
	}
}
