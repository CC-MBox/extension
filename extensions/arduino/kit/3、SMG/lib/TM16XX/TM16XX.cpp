/*************************************************************************
* File Name          : TM16XX.CPP
* Author             : xuezhi_ning
* Date               : 23/05/2018
* Updated            : 23/05/2018
* Version            : V1.0
**************************************************************************/
/* Includes ------------------------------------------------------------------*/
#include "TM16XX.h"

TM16XX::TM16XX(void)
{
}

TM16XX::TM16XX(uint8_t port)
{
}

TM16XX::TM16XX(uint8_t type, uint8_t dioPin, uint8_t clkPin)
{
  setType(type);
  setNumber(4);
  setpin(dioPin, clkPin);
  setBrightness(7);
  clearDisplay();
}

void TM16XX::init(uint8_t type, uint8_t dioPin, uint8_t clkPin)
{
  setType(type);
  setNumber(4);
  setpin(dioPin, clkPin);
  setBrightness(7);
  clearDisplay();
}

void TM16XX::setType(uint8_t type)
{
  TM16XX_TYPE = type;
  if (TM16XX_TYPE == _TM1637_)
  {
    DIS_ON = TM1637_DIS_ON;
    DIS_OFF = TM1637_DIS_OFF;
  }
  else if (TM16XX_TYPE == _TM1650_)
  {
    DIS_ON = TM1650_DIS_ON;
    DIS_OFF = TM1650_DIS_OFF;
  }
}

void TM16XX::setNumber(uint8_t number)
{
  SEG_NUMBER = number;
}

void TM16XX::setpin(uint8_t dioPin, uint8_t clkPin)
{
  _dioPin = dioPin;
  _clkPin = clkPin;
  pinMode(_clkPin, OUTPUT);
  pinMode(_dioPin, OUTPUT);
}

void TM16XX::setBrightness(uint8_t brightness = 7)
{
  BRIGHTNESS = brightness & 0b00000111;
  if (TM16XX_TYPE == _TM1650_)
  {
    BRIGHTNESS <<= 4;
  }
  DIS_ON_OFF = DIS_ON;
}

void TM16XX::setOnoff(uint8_t ON_OFF)
{

  if (TM16XX_TYPE == _TM1637_)
  {
    start();
    writeByte(BRIGHTNESS + ON_OFF);
    end();
  }
  else if (TM16XX_TYPE == _TM1650_)
  {
    start();
    writeByte(TM1650_CMD_SEG);
    writeByte(BRIGHTNESS + ON_OFF);
    end();
  }
}

void TM16XX::setMode(uint8_t mode)
{
  switch (mode)
  {
  case 1:
    DIS_ON_OFF = DIS_ON;
    setOnoff(DIS_ON_OFF);
    break;
  case 2:
    DIS_ON_OFF = DIS_OFF;
    setOnoff(DIS_ON_OFF);
    break;
  case 3:
    clearDisplay();
    break;
  case 4:
    point(0X80);
    break;
  }
}

void TM16XX::display(uint16_t value)
{
  display((int16_t)value);
}

void TM16XX::display(int16_t value)
{
  uint8_t buf[4] = {' ', ' ', ' ', ' '};
  uint8_t index = 3;
  uint16_t number = 0;
  uint16_t number_h = 0;
  uint16_t number_l = 0;
  uint8_t isNeg = 0x20;

  if (value > 9999 || value < -999)
  {
    buf[3] = 0x0e;
  }
  else
  {
    if (value < 0)
    {
      value = -value;
      isNeg = 0x21; //显示负号'-'
    }
  }

  number = value;
  do
  {
    number_h = number;
    number /= 10;
    number_l = number_h - 10 * number;
    buf[index--] = number_l;
  } while (number);
  buf[index] = isNeg;
  display(buf);
}

void TM16XX::display(double value)
{
  display((float)value);
}

void TM16XX::display(float value)
{
Posotion_1:
  uint8_t buf[4] = {' ', ' ', ' ', ' '};
  uint8_t tempBuf[4];
  uint8_t b = 0;
  uint8_t bit_num = 0;
  uint8_t int_num = 0;
  uint8_t isNeg = 0;
  double number = value;
  if (number >= 9999.5 || number <= -999.5)
  {
    buf[0] = ' ';
    buf[1] = ' ';
    buf[3] = ' ';
    buf[4] = 0x0e;
  }
  else
  {
    //处理负数
    if (number < 0.0)
    {
      number = -number;
      isNeg = 1; //负数标志
    }
    //显示数据将1.999显示为2.00 Round correctly so that print(1.999, 2) prints as "2.00"
    double rounding = 0.5; //舍弃的值
    rounding /= 10.0;
    number += rounding; //12.8
    // 显示整数部分 Extract the integer part of the number and print it
    uint16_t int_part = (uint16_t)number;         //12
    double remainder = number - (double)int_part; //余数部分   0.8
    do
    {
      uint16_t m = int_part;        //123.4
      int_part /= 10;               //12
      int8_t c = m - 10 * int_part; //3.4
      tempBuf[int_num] = c;
      int_num++;
    } while (int_part);

    bit_num = isNeg + int_num + 1;

    if (bit_num > 4)
    {
      bit_num = 4;
      // digits = 4 - (isNeg + int_num);
      goto Posotion_1;
    }
    b = 4 - bit_num;
    if (isNeg)
    {
      buf[b++] = 0x21; // '-' 显示负数符号 display minus sign
    }
    for (uint8_t i = int_num; i > 0; i--)
    {
      buf[b++] = tempBuf[i - 1];
    }
    // 显示小数点，但需要有小数的时候 Print the decimal point, but only if there are digits beyond

    buf[b - 1] += 0x10; // display '.'
    remainder *= 10.0;
    int16_t toPrint = int16_t(remainder);
    buf[b++] = toPrint;
    remainder -= toPrint;
  }
  display(buf);

  // uint8_t buf[4] = {' ', ' ', ' ', ' '};
  // uint8_t index = 3;
  // uint16_t number = 0;
  // uint16_t number_h = 0;
  // uint16_t number_l = 0;
  // uint8_t isNeg = 0x20;

  // if (value > 9999.5 || value < -999.5)
  // {
  //   buf[3] = 0x0e;
  // }
  // else
  // {
  //   if (value < 0.0)
  //   {
  //     value = -value;
  //     isNeg = 0x21; //显示负号'-'
  //   }
  // }
  // buf[index--] = ((uint8_t)(value * 10)) % 10; //余数部分

  // number = (uint16_t)value;
  // Serial.println(number);
  // do
  // {
  //   number_h = number;
  //   number /= 10;
  //   number_l = number_h - 10 * number;
  //   buf[index--] = number_l;
  // } while (number);
  // buf[2] += 0x10; // display '.'
  // buf[index] = isNeg;
  // display(buf);

  // bool isStart = false;
  // uint8_t index = 0;
  // uint8_t buf[4] = {' ', ' ', ' ', ' '};
  // //  bool isNeg = false;
  // if ((float)value < 0)
  // {
  //   value = -value;
  //   buf[index++] = 0x21;
  // }
  // for (uint8_t i = 0; i < 7; i++)
  // {
  //   int n = checkNum(value, 2 - i);
  //   if (n >= 1 || i == 2)
  //   {
  //     isStart = true;
  //   }
  //   if (isStart)
  //   {
  //     if (i == 2)
  //     {
  //       buf[index] = n + 0x10;
  //     }
  //     else
  //     {
  //       buf[index] = n;
  //     }
  //     index++;
  //   }
  //   if (index > 2)
  //   {
  //     break;
  //   }
  // }
  // display(buf);
}

// void TM16XX::display(double value, uint8_t digits)
// {
// Posotion_1:
//   uint8_t buf[4] = {' ', ' ', ' ', ' '};
//   uint8_t tempBuf[4];
//   uint8_t b = 0;
//   uint8_t bit_num = 0;
//   uint8_t int_num = 0;
//   uint8_t isNeg = 0;
//   double number = value;
//   if (number >= 9999.5 || number <= -999.5)
//   {
//     buf[0] = ' ';
//     buf[1] = ' ';
//     buf[3] = ' ';
//     buf[4] = 0x0e;
//   }
//   else
//   {
//     //处理负数
//     if (number < 0.0)
//     {
//       number = -number;
//       isNeg = 1; //负数标志
//     }
//     //显示数据将1.999显示为2.00 Round correctly so that print(1.999, 2) prints as "2.00"
//     double rounding = 0.5; //舍弃的值
//     for (uint8_t i = 0; i < digits; ++i)
//     {
//       rounding /= 10.0;
//     }
//     number += rounding; //12.8

//     // 显示整数部分 Extract the integer part of the number and print it
//     uint16_t int_part = (uint16_t)number;         //12
//     double remainder = number - (double)int_part; //余数部分   0.8
//     do
//     {
//       uint16_t m = int_part;        //123.4
//       int_part /= 10;               //12
//       int8_t c = m - 10 * int_part; //3.4
//       tempBuf[int_num] = c;
//       int_num++;
//     } while (int_part);

//     bit_num = isNeg + int_num + digits;

//     if (bit_num > 4)
//     {
//       bit_num = 4;
//       digits = 4 - (isNeg + int_num);
//       goto Posotion_1;
//     }
//     b = 4 - bit_num;
//     if (isNeg)
//     {
//       buf[b++] = 0x21; // '-' 显示负数符号 display minus sign
//     }
//     for (uint8_t i = int_num; i > 0; i--)
//     {
//       buf[b++] = tempBuf[i - 1];
//     }
//     // 显示小数点，但需要有小数的时候 Print the decimal point, but only if there are digits beyond
//     if (digits > 0)
//     {
//       buf[b - 1] += 0x10; // display '.'
//       // 下一位中 提取一个数字  Extract digits from the remainder one at a time
//       while (digits-- > 0)
//       {
//         remainder *= 10.0;
//         int16_t toPrint = int16_t(remainder);
//         buf[b++] = toPrint;
//         remainder -= toPrint;
//       }
//     }
//   }
//   display(buf);
// }

void TM16XX::display(uint8_t DispData[])
{
  uint8_t SegData[4];
  uint8_t i;
  for (i = 0; i < 4; i++)
  {
    SegData[i] = DispData[i];
  }
  coding(SegData);
  write(SegData);
}

void TM16XX::display(uint8_t BitAddr, uint8_t DispData)
{
  uint8_t SegData;

  if ((DispData >= 'A' && DispData <= 'F'))
  {
    DispData = DispData - 'A' + 10;
  }
  else if ((DispData >= 'a' && DispData <= 'f'))
  {
    DispData = DispData - 'a' + 10;
  }
  SegData = coding(DispData);
  write(BitAddr, SegData);
}

// void TM16XX::display(uint8_t BitAddr, uint8_t DispData, uint8_t point_on)
// {
//   uint8_t SegData;

//   if ((DispData >= 'A' && DispData <= 'F'))
//   {
//     DispData = DispData - 'A' + 10;
//   }
//   else if ((DispData >= 'a' && DispData <= 'f'))
//   {
//     DispData = DispData - 'a' + 10;
//   }
//   if (point_on == POINT_ON)
//   {
//     SegData = coding(DispData + 0x10);
//   }
//   else
//   {
//     SegData = coding(DispData);
//   }
//   write(BitAddr, SegData);
// }

void TM16XX::point(uint8_t PointFlag)
{
  _PointFlag = PointFlag;
}

void TM16XX::clearDisplay(void)
{
  uint8_t buf[SEG_NUMBER];
  for (uint8_t i = 0; i < SEG_NUMBER; i++)
  {
    buf[i] = ' ';
  }
  display(buf);
}

int16_t TM16XX::checkNum(float v, int16_t b) //校验数据，四舍五入
{
  if (b >= 0)
  {
    return floor((v - floor(v / pow(10, b + 1)) * (pow(10, b + 1))) / pow(10, b));
  }
  else
  {
    b = -b;
    int i = 0;
    for (i = 0; i < b; i++)
    {
      v = v * 10;
    }
    return ((int)(v) % 10);
  }
}

void TM16XX::coding(uint8_t DispData[])
{
  for (uint8_t i = 0; i < SEG_NUMBER; i++)
  {
    if (DispData[i] >= sizeof(TubeTab) / sizeof(*TubeTab))
    {
      DispData[i] = ' ';
    }
    //DispData[i] = TubeTab[DispData[i]];
    DispData[i] = pgm_read_byte(&TubeTab[DispData[i]]) + _PointFlag; //+ PointData;
  }
}

uint8_t TM16XX::coding(uint8_t DispData)
{
  if (DispData >= sizeof(TubeTab) / sizeof(*TubeTab)) //计算数组长度，如果数值大于数字长度，填充空格
  {
    DispData = ' ';
  }
  //DispData = TubeTab[DispData];
  DispData = pgm_read_byte(&TubeTab[DispData]) + _PointFlag; //+ PointData;
  return DispData;
}

void TM16XX::write(uint8_t SegData[])
{
  if (TM16XX_TYPE == _TM1637_)
  {
    start();
    writeByte(TM1637_CMD_ADDR_AUTO);
    end();

    start();
    writeByte(TM1637_DIS_ADDR_START);
    for (uint8_t i = 0; i < SEG_NUMBER; i++)
    {
      writeByte(SegData[i]);
    }
    end();

    start();
    writeByte(BRIGHTNESS + DIS_ON_OFF);
    end();
  }
  else if (TM16XX_TYPE == _TM1650_)
  {
    start();
    writeByte(TM1650_CMD_SEG);
    writeByte(BRIGHTNESS + DIS_ON_OFF);
    end();

    for (uint8_t i = 0; i < SEG_NUMBER; i++)
    {
      start();
      writeByte(TM1650_DIS_ADDR_START | (i << 1));
      writeByte(SegData[i]);
      end();
    }
  }
  else
  {
  }
}

void TM16XX::write(uint8_t BitAddr, uint8_t SegData)
{
  if (TM16XX_TYPE == _TM1637_)
  {
    start();
    writeByte(TM1637_CMD_ADDR_FIXED);
    end();

    start();
    writeByte(BitAddr | TM1637_DIS_ADDR_START);
    writeByte(SegData);
    end();

    start();
    writeByte(BRIGHTNESS + DIS_ON_OFF);
    end();
  }
  else if (TM16XX_TYPE == _TM1650_)
  {
    start();
    writeByte(TM1650_CMD_SEG);
    writeByte(BRIGHTNESS + DIS_ON_OFF);
    end();

    start();
    writeByte((BitAddr << 1) | TM1650_DIS_ADDR_START);
    writeByte(SegData);
    end();
  }
  else
  {
  }
}

uint8_t TM16XX::readByte(void)
{
  uint8_t data = 0;
  if (TM16XX_TYPE == _TM1637_)
  {
    writeByte(0x42);
    digitalWrite(_dioPin, HIGH);
    for (uint8_t i = 0; i < 8; i++)
    {
      digitalWrite(_clkPin, LOW);
      data >>= 1;
      if (digitalRead(_dioPin))
      {
        data = data | 0x80;
      }
      else
      {
        data = data | 0x00;
      }
      digitalWrite(_clkPin, HIGH);
    }
  }
  else if (TM16XX_TYPE == _TM1650_)
  {
    digitalWrite(_dioPin, HIGH); //LSB first
    pinMode(_dioPin, INPUT);
    for (uint8_t i = 0; i < 8; i++)
    {
      digitalWrite(_clkPin, HIGH); //时钟上沿
      data <<= 1;
      if (digitalRead(_dioPin))
      {
        data++;
      }
      digitalWrite(_clkPin, LOW);
    }
  }
  else
  {
  }
  ack();
  return data;
}

void TM16XX::writeByte(uint8_t wr_data)
{
  if (TM16XX_TYPE == _TM1637_)
  {
    for (uint8_t i = 0; i < 8; i++)
    {
      digitalWrite(_clkPin, LOW);
      if (wr_data & 0x01)
      {
        digitalWrite(_dioPin, HIGH); //低位在前
      }
      else
      {
        digitalWrite(_dioPin, LOW);
      }
      wr_data >>= 1;
      digitalWrite(_clkPin, HIGH);
    }
  }
  else if (TM16XX_TYPE == _TM1650_)
  {
    for (uint8_t i = 0; i < 8; i++)
    {
      digitalWrite(_clkPin, LOW);
      if (wr_data & 0x80)
      {
        digitalWrite(_dioPin, HIGH); //高位在前
      }
      else
      {
        digitalWrite(_dioPin, LOW);
      }
      wr_data <<= 1;
      digitalWrite(_clkPin, HIGH);
    }
  }
  else
  {
  }

  ack();
}

void TM16XX::start(void)
{
  digitalWrite(_clkPin, HIGH);
  digitalWrite(_dioPin, HIGH);
  digitalWrite(_dioPin, LOW);
  digitalWrite(_clkPin, LOW);
}

uint8_t TM16XX::ack(void)
{
  // uint8_t ack = 1;
  // pinMode(_dioPin, INPUT);
  // digitalWrite(_clkPin, LOW);
  // // delayMicroseconds(1);
  // ack = digitalRead(_dioPin);
  // if (ack == 0)
  // {
  //   pinMode(_dioPin, OUTPUT);
  // }
  // digitalWrite(_clkPin, HIGH);
  // digitalWrite(_clkPin, LOW);
  // // delayMicroseconds(100);
  // pinMode(_dioPin, OUTPUT);

  digitalWrite(_clkPin, LOW); //wait for ACK
  digitalWrite(_clkPin, HIGH);
  digitalWrite(_clkPin, LOW);

  // return ack;
}

void TM16XX::end(void)
{
  digitalWrite(_clkPin, LOW);
  digitalWrite(_dioPin, LOW);
  digitalWrite(_clkPin, HIGH);
  digitalWrite(_dioPin, HIGH);
}
