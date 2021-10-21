/*************************************************************************
* File Name          : TM16XX.H
* Author             : xuezhi_ning
* Date               : 23/05/2018
* Updated            : 23/05/2018
* Version            : V1.0
**************************************************************************/
/* Define to prevent recursive inclusion -------------------------------------*/
#ifndef __TM16XX_H__
#define __TM16XX_H__

#include <stdint.h>
#include <stdbool.h>
#include <Arduino.h>

// 数码管段位
//     -A-
//  F |   | B
//     -G-
//  E |   | C
//     -D- .H

// #define SEG_A 0b00000001
// #define SEG_B 0b00000010
// #define SEG_C 0b00000100
// #define SEG_D 0b00001000
// #define SEG_E 0b00010000
// #define SEG_F 0b00100000
// #define SEG_G 0b01000000
// #define SEG_H 0b10000000

/******************definitions for TM1637**********************/
#define _TM1637_ 0X01
#define TM1637_CMD_ADDR_AUTO 0x40  //地址自动增加模式
#define TM1637_CMD_ADDR_FIXED 0x44 //固定地址模式
#define TM1637_DIS_ADDR_START 0XC0 //显存起始地址
#define TM1637_DIS_ON 0x88         //显示打开
#define TM1637_DIS_OFF 0x80        //显示关闭

/******************definitions for TM1650**********************/
#define _TM1650_ 0X02
#define TM1650_CMD_SEG 0X48        //写显示数据指令
#define TM1650_KEY_CMD 0X49        //读取按键数据指令
#define TM1650_DIS_ON 0X01         //显示打开
#define TM1650_DIS_OFF 0X00        //显示关闭
#define TM1650_DIS_ADDR_START 0X68 //显存起始地址
// #define TM1650_SEG_ADDR_1 0X68
// #define TM1650_SEG_ADDR_2 0X6A
// #define TM1650_SEG_ADDR_3 0X6C
// #define TM1650_SEG_ADDR_4 0X6E

/**************definitions for brightness***********************/
// #define TM1650_BRIGHTNESS_0 0X00
// #define TM1650_BRIGHTNESS_1 0X10
// #define TM1650_BRIGHTNESS_2 0X20
// #define TM1650_BRIGHTNESS_3 0X30
// #define TM1650_BRIGHTNESS_4 0X40
// #define TM1650_BRIGHTNESS_5 0X50
// #define TM1650_BRIGHTNESS_6 0X60
// #define TM1650_BRIGHTNESS_7 0X70
// #define TM1637_BRIGHTNESS_0 0X0
// #define TM1637_BRIGHTNESS_1 0X1
// #define TM1637_BRIGHTNESS_2 0X2
// #define TM1637_BRIGHTNESS_3 0X3
// #define TM1637_BRIGHTNESS_4 0X4
// #define TM1637_BRIGHTNESS_5 0X5
// #define TM1637_BRIGHTNESS_6 0X6
// #define TM1637_BRIGHTNESS_7 0X7
/**************definitions for brightness***********************/

///@brief Class for numeric display module
const uint8_t TubeTab[] PROGMEM = {
    // HGFEDCBA
    0b00111111, // '0'
    0b00000110, // '1'
    0b01011011, // '2'
    0b01001111, // '3'
    0b01100110, // '4'
    0b01101101, // '5'
    0b01111101, // '6'
    0b00000111, // '7'
    0b01111111, // '8'
    0b01101111, // '9'
    0b01110111, // 'A'
    0b01111100, // 'b'
    0b00111001, // 'C'
    0b01011110, // 'd'
    0b01111001, // 'E'
    0b01110001, // 'F'
    0b10111111, // '0.'
    0b10000110, // '1.'
    0b11011011, // '2.'
    0b11001111, // '3.'
    0b11100110, // '4.'
    0b11101101, // '5.'
    0b11111101, // '6.'
    0b10000111, // '7.'
    0b01111111, // '8.'
    0b11101111, // '9.'
    0b11110111, // 'A.'
    0b11111100, // 'b.'
    0b10111001, // 'C.'
    0b11011110, // 'd.'
    0b11111001, // 'E.'
    0b11110001, // 'F.'
    0b00000000, // ' '
    0b01000000  // '-'
};

class TM16XX
{
public:
  TM16XX(void);

  TM16XX(uint8_t port);

  TM16XX(uint8_t type ,uint8_t dioPin, uint8_t clkPin);

  void init(uint8_t type ,uint8_t dioPin, uint8_t clkPin);

  void setType(uint8_t type);

  void setNumber(uint8_t number);

  void setpin(uint8_t dioPin, uint8_t clkPin);

  void setBrightness(uint8_t brightness);

  void setOnoff(uint8_t ON_OFF);

  void setMode(uint8_t mode);

  void display(uint16_t value);

  void display(int16_t value);

  void display(float value);

  void display(double value);

  void display(uint8_t DispData[]);

  void display(uint8_t BitAddr, uint8_t DispData);

  // void display(uint8_t BitAddr, uint8_t DispData, uint8_t point_on);

  void clearDisplay(void);

  void point(uint8_t PointFlag); // Whether to light the clock point ":". Take effect next display cycle.

  int16_t checkNum(float v, int16_t b);

  void write(uint8_t SegData[]);

  void write(uint8_t BitAddr, uint8_t SegData);

  void coding(uint8_t DispData[]);

  uint8_t coding(uint8_t DispData);

private:
  uint8_t TM16XX_TYPE;
  uint8_t DIS_ON;
  uint8_t DIS_OFF;
  uint8_t DIS_ON_OFF;
  uint8_t SEG_NUMBER;
  uint8_t BRIGHTNESS;
  uint8_t _clkPin;
  uint8_t _dioPin;
  uint8_t _PointFlag; //_PointFlag=1:the clock point on

  void writeByte(uint8_t wr_data); // Write 8 bits data to tm1637.

  uint8_t readByte(void);

  void start(void); // Send start bits

  void end(void); // Send stop bits.

  uint8_t ack(void); // Send stop bits.
};
#endif
