int sensorValue = 0;
int sensorPin = A0;    //analog input
int ledPin = 13;

int incomingByte = 0;

/////////////////////////////
//SETUP
void setup(){
  Serial.begin(9600);
  pinMode(2, OUTPUT);
}

void sendSerial() {
  sensorValue = analogRead(sensorPin);
  Serial.println(sensorValue);
}

void readSerial() {
  if (Serial.available() > 0) {
    incomingByte = Serial.read();
  }
//implement reading from the serial
}

////////////////////////////
//LOOP
void loop(){
  sendSerial();
  readSerial();
}

