#tutorial/arduino

## Arduino - LCD I2C

In this Arduino LCD I2C tutorial, we will learn how to connect an LCD I2C (Liquid Crystal Display) to the Arduino board. LCDs are very popular and widely used in electronics projects for displaying information. There are many types of LCD. This tutorial takes LCD 16x2 (16 columns and 2 rows) as an example. The other LCDs are similar.

## Hardware Required

| 1   | ×   | [Official Arduino Uno](https://amzn.to/3mvwIYu)                                                  |     |
| --- | --- | ------------------------------------------------------------------------------------------------ | --- |
| 1   | ×   | [Alternatively, DIYables STEM V3, Fully Compatible with Arduino Uno R3](https://amzn.to/4n4mxKd) |     |
| 1   | ×   | [USB 2.0 cable type A/B (for USB-A PC)](https://amzn.to/3YaG3rU)                                 |     |
| 1   | ×   | [USB 2.0 cable type C/B (for USB-C PC)](https://amzn.to/4ibHjG2)                                 |     |
| 1   | ×   | [LCD I2C 16x2](https://amzn.to/46VtR1U)                                                          |     |
| 1   | ×   | [Alternatively, LCD I2C 20x4](https://amzn.to/4fKMXgp)                                           |     |
| 1   | ×   | [Jumper Wires](https://amzn.to/3RuHEag)                                                          |     |
| 1   | ×   | [Recommended: Screw Terminal Block Shield for Arduino Uno](https://amzn.to/3XSG2Jn)              |     |
| 1   | ×   | [Recommended: Sensors/Servo Expansion Shield for Arduino Uno](https://amzn.to/4sCVg3H)           |     |
| 1   | ×   | [Recommended: Breadboard Shield for Arduino Uno](https://amzn.to/3nMuHgE)                        |     |
| 1   | ×   | [Recommended: Enclosure for Arduino Uno](https://amzn.to/47gvHfV)                                |     |
| 1   | ×   | [Recommended: Prototyping Base Plate & Breadboard Kit for Arduino UNO](https://amzn.to/4hMLpmZ)  |     |

Or you can buy the following kits:

| 1   | ×   | [DIYables STEM V3 Starter Kit (Arduino included)](https://amzn.to/4laO37p) |     |
| --- | --- | -------------------------------------------------------------------------- | --- |
| 1   | ×   | [DIYables Sensor Kit (18 sensors/displays)](https://amzn.to/449InDC)       |     |

**Disclosure:** Some links in this section are Amazon affiliate links. If you make a purchase through these links, we may earn a commission at no extra cost to you.  
Additionally, some links direct to products from our own brand, **[DIYables](https://amzn.to/4fL6Ser)** .

**Buy Note:** Another option is to create the LCD I2C display by pairing [LCD 1602 Display](https://amzn.to/4r3EIBn) and [PCF8574 I2C Adapter Module](https://amzn.to/4aZ6JVH).

## About LCD I2C 16x2

In the [previous tutorial](https://arduinogetstarted.com/tutorials/arduino-lcd), we had learned how to use the normal LCD. However, wiring between Arduino and the normal LCD is complicated. Therefore, LCD I2C has been created to simplify the wiring. Actually, LCD I2C is composed of a normal LCD, an I2C module and a potentiometer.

### Pinout

LCD I2C uses I2C interface, so it has 4 pins:

- GND pin: needs to be connected to GND (0V).
- VCC pin: the power supply for the LCD, needs to be connected to VCC (5V).
- SDA pin: I2C data signal
- SCL pin: I2C clock signal
![LCD I2C Pinout](https://arduinogetstarted.com/images/tutorial/lcd-i2c-pinout.jpg)

### LCD Coordinate

LCD I2C 16x2 includes 16 columns and 2 rows. the conlums and rows are indexed from 0.

## Wiring Diagram

![Arduino LCD I2C Wiring Diagram](https://arduinogetstarted.com/images/tutorial/arduino-lcd-i2c-wiring-diagram.jpg)

This image is created using [Fritzing](http://fritzing.org/). Click to enlarge image

| LCD I2C | Arduino Uno, Nano | Arduino Mega | boja       |
| ------- | ----------------- | ------------ | ---------- |
| Vin     | 5V                | 5V           | zuto       |
| GND     | GND               | GND          | zeleno     |
| SDA     | A4                | 20           | narancasto |
| SCL     | A5                | 21           | crveno<br> |

## How To Program For LCD I2C

Thanks to the DIYables\_LCD\_I2C library, the using LCD is a piece of cake.

```cpp
#include <DIYables\_LCD\_I2C.h>

- Declare a DIYables_LCD_I2C object with I2C address, the number of columns, the number of rows:

**

DIYables_LCD_I2C lcd(0x27, 16, 2);

- Initialize the LCD.

**

lcd.init(); lcd.backlight();

- Move cursor to the desired position (column\_index, row\_index)

**

lcd.setCursor(column\_index, row\_index);

- Print a message to the LCD.

**

lcd.print("Hello World!");
```

There are many things more that we can do with LCD (see Do More with LCD part)

***※ NOTE THAT:***

The I2C address of LCD can vary according to the manufacturers. In the code, we used 0x27 that is specified by [DIYables](https://diyables.io/products/lcd-i2c-16x2) brand

## Arduino Code

**
```cpp
#include <DIYables_LCD_I2C.h> DIYables_LCD_I2C lcd(0x27, 16, 2);

void setup() { lcd.init(); lcd.backlight(); } 
void loop() {
lcd.clear(); lcd.setCursor(0, 0); 
lcd.print("Arduino"); lcd.setCursor(2, 1); lcd.print("GetStarted.com"); delay(2000); lcd.clear(); lcd.setCursor(3, 0); lcd.print("DIYables"); lcd.setCursor(0, 1); lcd.print("www.diyables.io"); 
delay(2000); 
}
```

### Quick Steps

- Navigate to the Libraries icon on the left bar of the Arduino IDE.
- Search "DIYables LCD I2C", then find the DIYables\_LCD\_I2C library by DIYables
- Click Install button to install DIYables\_LCD\_I2C library.
![Arduino DIYables LCD I2C library](https://arduinogetstarted.com/images/tutorial/arduino-diyables-lcd-i2c-library.jpg)
- Copy the above code and open with Arduino IDE
- Click Upload button on Arduino IDE to upload code to Arduino
- See the result on LCD

- Try modifying text and position

## LCD I2C Selection Guide

There are various types of LCD I2C displays available in the market, mainly differing in background color and the shape of the I2C interface module.

![LCD I2C Selection Guide](https://arduinogetstarted.com/images/tutorial/lcd-i2c-selection-guide.jpg)

Regarding color, these displays usually come in two background colors: green and blue.

For the I2C interface module shape, there are two main aspects to consider:

- **Potentiometer size**: This includes options for thin and thick potentiometers.
- **Thick potentiometer**: Easier to adjust but occupies more space.
	- **Thin potentiometer**: More compact, saving space with its smaller height.
- **I2C selection jumper**:
- **With jumper**: Allows switching between two I2C addresses, useful when your code uses two LCD displays simultaneously. However, it can cause confusion with I2C addresses when only one LCD is used and it also requires more space.
	- **Without jumper**: This has a fixed I2C address and is very convenient when your code uses just one LCD display. Since most applications use only one LCD, this type is highly recommended.

## Video Tutorial

We are considering to make the video tutorials. If you think the video tutorials are essential, please subscribe to our [YouTube channel](https://www.youtube.com/channel/UC0k3XDWixae7IUckmCdDXZA) to give us motivation for making the videos.

## Do More with LCD

### Custom Character

lcd.print() function supports only ASCII characters. If you want to display a special character or symbol (e.g. heart, angry bird), you need to use the below character generator.

LCD 16x2 can display 32 characters (2 rows and 16 columns). Each character is composed of 40 pixels (8 rows and 5 columns).

![Arduino LCD 16x2 Pixel](https://arduinogetstarted.com/images/tutorial/arduino-lcd-pixel.jpg)

The character generator represents a character (40 pixels). You just need to do the following steps:

Click on each pixel to select/deselect

Copy below custom character code

byte customChar\[8\] = { 0b00000, 0b01010, 0b11111, 0b11111, 0b01110, 0b00100, 0b00000, 0b00000 };

Replace the customChar\[8\] in the below code

**

```cpp
byte customChar[8] = { 0b00000, 0b01010, 0b11111, 0b11111, 0b01110, 0b00100, 0b00000, 0b00000 };

void setup() {
	 lcd.init(); lcd.backlight(); lcd.createChar(0, customChar); lcd.setCursor(2, 0); lcd.write((byte)0);
} 
void loop() { }
```

Result on LCD:

![LCD custom character](https://arduinogetstarted.com/images/tutorial/lcd-custom-character.jpg)

#### Multiple custom characters

We can create up to 8 custom characters (indexed 0 to 7). The below example creates and displays three characters.

**

#include <DIYables\_LCD\_I2C.h> DIYables\_LCD\_I2C lcd(0x27, 16, 2); byte customChar0\[8\] = { 0b00000, 0b01010, 0b11111, 0b11111, 0b01110, 0b00100, 0b00000, 0b00000 }; byte customChar1\[8\] = { 0b00100, 0b01110, 0b11111, 0b00100, 0b00100, 0b00100, 0b00100, 0b00100 }; byte customChar2\[8\] = { 0b00100, 0b00100, 0b00100, 0b00100, 0b00100, 0b11111, 0b01110, 0b00100 }; void setup() { lcd.init(); lcd.backlight(); lcd.createChar(0, customChar0); lcd.createChar(1, customChar1); lcd.createChar(2, customChar2); lcd.setCursor(2, 0); lcd.write((byte)0); lcd.setCursor(4, 0); lcd.write((byte)1); lcd.setCursor(6, 0); lcd.write((byte)2); } void loop() { }

Result on LCD:

![LCD multiple custom characters](https://arduinogetstarted.com/images/tutorial/lcd-multiple-custom-characters.jpg)

#### Summary: how to use custom character on LCD

- Use the above character generator to create binary code for the custom character.
- Declare the binary code for the custom character (copy from above step)

**

byte customChar\[8\] = { 0b00000, 0b01010, 0b11111, 0b11111, 0b01110, 0b00100, 0b00000, 0b00000 };

- Create custom character and assign to an index value (from 0 to 7) in setup() function

**

lcd.createChar(index, customChar);

- Print the custom character in LCD anytime, anywhere (in setup() or loop() function)

**

lcd.setCursor(column, row); lcd.write((byte)index);

### Other functions

Add the below functions into loop() function one by one. And add delay(5000) after each function

- Clear LCD screen

**

lcd.clear();

- Move the cursor to the upper-left of the LCD

**

lcd.home();

- Move the cursor to the a position (column, row)

**

lcd.setCursor(column, row);

- Display the LCD cursor

**

lcd.cursor();

- Hides the LCD cursor.

**

lcd.noCursor();

- Display the blinking LCD cursor

**

lcd.blink()

- Turns off the blinking LCD cursor.

**

lcd.noBlink()

- And more at [LiquidCrystal Library Reference](https://arduinogetstarted.com/reference/library/arduino-lcd-library)

## Challenge Yourself

Use LCD to do one of the following projects:

- Sending text from PC (via Serial Monitor) and display on LCD. **Hint:** Refer to [How to send data from PC to Aduino](https://arduinogetstarted.com/tutorials/arduino-serial-monitor#content_pc_to_arduino)
- Displaying the pressed key of the keypad on LCD. **Hint:** Refer to [Arduino - Keypad](https://arduinogetstarted.com/tutorials/arduino-keypad)

## Troubleshooting on LCD I2C

If the text is not displayed on LCD I2C, please check the following issues:

1. Adjust the brightness of LCD by rotating potentiometer in the backside of LCD
2. Depending on manufacturers, the I2C address of LCD may be different. Usually, the default I2C address of LCD is 0x27 or 0x3F. Try these values one by one. If you still failed, run the below code to find the I2C address.

**

#include <Wire.h> void setup() { Wire.begin(); Serial.begin(9600); Serial.println("I2C Scanner"); } void loop() { byte error, address; int nDevices; Serial.println("Scanning..."); nDevices = 0; for(address = 1; address < 127; address++ ) { Wire.beginTransmission(address); error = Wire.endTransmission(); if (error == 0) { Serial.print("I2C device found at address 0x"); if (address < 16) Serial.print("0"); Serial.print(address,HEX); Serial.println("!"); nDevices++; } else if (error==4) { Serial.print("Unknown error at address 0x"); if (address < 16) Serial.print("0"); Serial.println(address,HEX); } } if (nDevices == 0) Serial.println("No I2C devices found"); else Serial.println("done"); delay(5000); }

The result on Serial Monitor:

Newbiely | Arduino IDE 2.3.8

Arduino Uno

Newbiely.ino

···

8 Serial.println("Hello World!");

Output

Serial Monitor

Message (Enter to send message to 'Arduino Uno' on 'COM15')

New Line

9600 baud

Scanning... I2C device found at address 0x3F! done Scanning... I2C device found at address 0x3F! done

Ln 11, Col 1

Arduino Uno on COM15

2

## The Best Arduino Starter Kit

- [See the best Arduino kit for beginner](https://arduinogetstarted.com/hardware/best-arduino-kit-for-beginner)