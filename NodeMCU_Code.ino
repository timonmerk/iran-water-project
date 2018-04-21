#include <OneWire.h>
#include <DallasTemperature.h>
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>

char rx_byte = 0;
const char* servera = "api.thingspeak.com";
String apiKey ="SBX1GN969ECTFFVG";
const char* ssid = "REDI-School";
const char* password = "REDI-school_2017?";
int triggerval;
int local;
int process;
ESP8266WebServer server1(80);
WiFiServer server(80);
const int led = 13;

void handleRoot() {
  digitalWrite(led, 1);
  String i = String(process);
  server1.send(200, "text/plain", i);
  digitalWrite(led, 0);
}

void handleNotFound(){
  digitalWrite(led, 1);
  String message = "File Not Found\n\n";
  message += "URI: ";
  message += server1.uri();
  message += "\nMethod: ";
  message += (server1.method() == HTTP_GET)?"GET":"POST";
  message += "\nArguments: ";
  message += server1.args();
  message += "\n";
  for (uint8_t i=0; i<server1.args(); i++){
    message += " " + server1.argName(i) + ": " + server1.arg(i) + "\n";
  }
  server1.send(404, "text/plain", message);
  digitalWrite(led, 0);
}

void setup(void){
  pinMode(led, OUTPUT);
  digitalWrite(led, 0);
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  Serial.println("");

  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  if (MDNS.begin("esp8266")) {
    Serial.println("MDNS responder started");
  }

  server1.on("/", handleRoot);

  server1.on("/inline", [](){
    server1.send(200, "text/plain", "this works as well");
  });

  server1.onNotFound(handleNotFound);

  server.begin();
  server1.begin();
  Serial.println("HTTP server started");
   pinMode(2, OUTPUT);
  digitalWrite(2, 0);
}

void loop(void){
checkWiFiClient();
server1.handleClient();
checkSerial();  
}

void checkWiFiClient(){
// Check if a client has connected
  WiFiClient client = server.available();
  if (!client) {
    return;
  }
  
  // Wait until the client sends some data
  Serial.println("new client");
  while(!client.available()){
    delay(1);
  }
  
  // Read the first line of the request
  String req = client.readStringUntil('\r');
  Serial.println(req);
  client.flush();
  
  // Match the request
  int val;
  if (req.indexOf("/gpio/0") != -1)
    val = 0;
  else if (req.indexOf("/gpio/1") != -1)
    val = 1;
  else {
    Serial.println("invalid request");
    client.stop();
    return;
  }

  // Set GPIO2 according to the request
  digitalWrite(2, val);
  
  client.flush();
  String i = String(process);
  // Prepare the response
  String s = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<!DOCTYPE HTML>\r\n<html>\r\nGPIO is now ";
  s += (val)?"high":"low";
  s += "<br>" + i;
  s += "</html>\n";
  

  // Send the response to the client
  client.print(s);
  delay(1);
  Serial.println("Client disonnected");

  // The client will actually be disconnected 
  // when the function returns and 'client' object is detroyed
}

void checkSerial(){
   if (Serial.available() > 0) {    // is a character available?
    rx_byte = Serial.read();       // get the character
  
    // check if a number was received
    if ((rx_byte >= '0') && (rx_byte <= '9')) {
      Serial.print("Transmitted Value: ");
      Serial.println(rx_byte);
      local = rx_byte;
      
      process = local - 48;
      Serial.println(process);
      sendTeperatureTS(process);
    }
    else {
      Serial.println("Not a number.");
    }
   } 
}

void sendTeperatureTS(float temp)
{
   WiFiClient client;
   if (client.connect(servera, 80)) {
   String postStr = apiKey;
   postStr += "&field1=";
   postStr += String(temp);
   postStr += "\r\n\r\n";
   client.print("POST /update HTTP/1.1\n");
   client.print("Host: api.thingspeak.com\n");
   client.print("Connection: close\n");
   client.print("X-THINGSPEAKAPIKEY: " + apiKey + "\n");
   client.print("Content-Type: application/x-www-form-urlencoded\n");
   client.print("Content-Length: ");
   client.print(postStr.length());
   client.print("\n\n");
   client.print(postStr);
   delay(100);
   }
 client.stop();
}
