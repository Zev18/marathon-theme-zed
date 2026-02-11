package main

import (
	"log"
)

type User struct {
	Id   int
	Name string
}

// Program entry point
func main() {
	u := User{Id: 1, Name: "Sam"}
	log.Print("Success!", u)
}
