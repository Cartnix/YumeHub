package handlers

import (
	"encoding/json"
	"io"
	"net/http"

	"mapp/model"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	url := "https://mocki.io/v1/abcdef12-3456-7890-abcd-1234567890ab"
	resp, err := http.Get(url)
	if err != nil {
		http.Error(w, "Error", http.StatusInternalServerError)
		return
	}

	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		http.Error(w, "error", http.StatusInternalServerError)
		return
	}

	var users []model.User
	if err := json.Unmarshal(body, &users); err != nil {
		http.Error(w, "error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)

}
