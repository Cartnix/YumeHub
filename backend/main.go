package main

import (
	f "fmt"
	"net/http"

	"mapp/handlers"
)

func main() {
	http.HandleFunc("/user", handlers.Handler)
	f.Println("Setver started at port 3000")
	http.ListenAndServe(":3000", nil)
}
