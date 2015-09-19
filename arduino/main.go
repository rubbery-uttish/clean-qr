package main

import (
	"fmt"
	"strconv"
)

func readAverage() int {
	count := 10
	sum := 0

	var input string
	for i := 0; i < count; i++ {
		fmt.Scanln(&input)
		value, _ := strconv.Atoi(input)
		sum += value
	}
	return sum / count
}

func readLidSensor(open chan bool) {
	opened := false
	threshold := 950

	for {
		value := readAverage()
		if opened {
			if value > threshold {
				opened = false
				open <- false
			}
		} else {
			if value < threshold {
				opened = true
				open <- true
			}
		}
	}
}

func main() {
	lidStatusChannel := make(chan bool)
	go readLidSensor(lidStatusChannel)
	for status := range lidStatusChannel {
		fmt.Println(status)
	}
}
