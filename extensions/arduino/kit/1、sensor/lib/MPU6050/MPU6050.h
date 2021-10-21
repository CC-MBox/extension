#ifndef __MPU6050_H
#define __MPU6050_H

#include <Arduino.h>
#include <Wire.h>

#define I2C_ERROR (-1)
#define GYRO_DEFAULT_ADDRESS (0x68)

class MPU6050
{
public:
  MPU6050(void);
  void begin();
  void update(void);
  void fast_update(void);
  unsigned char getDevAddr(void);
  double getAngle(unsigned char index);

private:
  double gSensitivity; /* for 500 deg/s, check data sheet */
  double gx, gy, gz;
  double gyrX, gyrY, gyrZ;
  int accX, accY, accZ;
  double gyrXoffs, gyrYoffs, gyrZoffs;
  unsigned char i2cData[14];
  unsigned char Device_Address;

  void deviceCalibration(void);
  int writeReg(int reg, unsigned char data);
  int readData(unsigned char start, unsigned char *buffer, unsigned char size);
  int writeData(unsigned char start, const unsigned char *pData, unsigned char size);
};
#endif
