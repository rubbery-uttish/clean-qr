#/bin/bash
sudo tail -f /dev/cu.usbmodem1411 | go run *.go
