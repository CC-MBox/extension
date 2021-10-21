#include "MPU6050.h"

MPU6050::MPU6050(void)
{
  Device_Address = GYRO_DEFAULT_ADDRESS;
}

void MPU6050::begin(void)
{
  gSensitivity = 65.5; //for 500 deg/s, check data sheet
  gx = 0;
  gy = 0;
  gz = 0;
  gyrX = 0;
  gyrY = 0;
  gyrZ = 0;
  accX = 0;
  accY = 0;
  accZ = 0;
  gyrXoffs = 0;
  gyrYoffs = 0;
  gyrZoffs = 0;
  Wire.begin();
  delay(800);
  writeReg(0x6b, 0x00); //close the sleep mode
  writeReg(0x1a, 0x01); //configurate the digital low pass filter
  writeReg(0x1b, 0x08); //set the gyro scale to 500 deg/s

  deviceCalibration();
}

void MPU6050::update(void)
{
  static unsigned long last_time = 0;
  int return_value;
  double dt, filter_coefficient;
  /* read imu data */
  return_value = readData(0x3b, i2cData, 14);
  if (return_value != 0)
  {
    return;
  }

  double ax, ay, az;
  /* assemble 16 bit sensor data */
  accX = ((i2cData[0] << 8) | i2cData[1]);
  accY = ((i2cData[2] << 8) | i2cData[3]);
  accZ = ((i2cData[4] << 8) | i2cData[5]);
  gyrX = (((i2cData[8] << 8) | i2cData[9]) - gyrXoffs) / gSensitivity;
  gyrY = (((i2cData[10] << 8) | i2cData[11]) - gyrYoffs) / gSensitivity;
  gyrZ = (((i2cData[12] << 8) | i2cData[13]) - gyrZoffs) / gSensitivity;
  ax = atan2(accX, sqrt(pow(accY, 2) + pow(accZ, 2))) * 180 / 3.1415926;
  ay = atan2(accY, sqrt(pow(accX, 2) + pow(accZ, 2))) * 180 / 3.1415926;
  az = atan2(accZ, sqrt(pow(accX, 2) + pow(accY, 2))) * 180 / 3.1415926;

  dt = (double)(millis() - last_time) / 1000;
  last_time = millis();

  if (accZ > 0)
  {
    gx = gx - gyrY * dt;
    gy = gy + gyrX * dt;
  }
  else
  {
    gx = gx + gyrY * dt;
    gy = gy - gyrX * dt;
  }
  gz += gyrZ * dt;
  gz = gz - 360 * floor(gz / 360);
  if (gz > 180)
  {
    gz = gz - 360;
  }

  /*
     complementary filter
     set 0.5sec = tau = dt * A / (1 - A)
     so A = tau / (tau + dt)
  */
  filter_coefficient = 0.5 / (0.5 + dt);
  gx = gx * filter_coefficient + ax * (1 - filter_coefficient);
  gy = gy * filter_coefficient + ay * (1 - filter_coefficient);
  gz = gz * filter_coefficient + az * (1 - filter_coefficient);
}

void MPU6050::fast_update(void)
{
  static unsigned long last_time = 0;
  int return_value;
  double dt;

  dt = (double)(millis() - last_time) / 1000.0;
  last_time = millis();

  /* read imu data */
  return_value = readData(0x3b, i2cData, 14);
  if (return_value != 0)
  {
    return;
  }

  double ax, ay, az;
  /* assemble 16 bit sensor data */
  accX = ((i2cData[0] << 8) | i2cData[1]);
  accY = ((i2cData[2] << 8) | i2cData[3]);
  accZ = ((i2cData[4] << 8) | i2cData[5]);
  gyrX = (((i2cData[8] << 8) | i2cData[9]) - gyrXoffs) / gSensitivity;
  gyrY = (((i2cData[10] << 8) | i2cData[11]) - gyrYoffs) / gSensitivity;
  gyrZ = (((i2cData[12] << 8) | i2cData[13]) - gyrZoffs) / gSensitivity;
  ax = atan2(accX, sqrt(pow(accY, 2) + pow(accZ, 2))) * 180 / 3.1415926;
  ay = atan2(accY, sqrt(pow(accX, 2) + pow(accZ, 2))) * 180 / 3.1415926;
  az = atan2(accZ, sqrt(pow(accX, 2) + pow(accY, 2))) * 180 / 3.1415926;
  if (accZ > 0)
  {
    gx = gx - gyrY * dt;
    gy = gy + gyrX * dt;
  }
  else
  {
    gx = gx + gyrY * dt;
    gy = gy - gyrX * dt;
  }
  gz += gyrZ * dt;
  gz = gz - 360 * floor(gz / 360);
  if (gz > 180)
  {
    gz = gz - 360;
  }

  gy = 0.98 * gy + 0.02 * ay;
  gx = 0.98 * gx + 0.02 * ax;
  gz = 0.98 * gx + 0.02 * az;
}

unsigned char MPU6050::getDevAddr(void)
{
  return Device_Address;
}

double MPU6050::getAngle(unsigned char index)
{
  if (index == 1)
    return gx;
  if (index == 2)
    return gy;
  if (index == 3)
    return gz;
  return 0;
}

void MPU6050::deviceCalibration(void)
{
  //  int return_value;
  uint16_t x = 0;
  uint16_t num = 500;
  long xSum = 0, ySum = 0, zSum = 0;
  for (x = 0; x < num; x++)
  {
    //    return_value = readData(0x43, i2cData, 6);
    xSum += ((i2cData[0] << 8) | i2cData[1]);
    ySum += ((i2cData[2] << 8) | i2cData[3]);
    zSum += ((i2cData[4] << 8) | i2cData[5]);
  }
  gyrXoffs = xSum / num;
  gyrYoffs = ySum / num;
  gyrZoffs = zSum / num;
}

int MPU6050::writeReg(int reg, unsigned char data)
{
  int return_value = 0;
  return_value = writeData(reg, &data, 1);
  return (return_value);
}

int MPU6050::readData(unsigned char start, unsigned char *buffer, unsigned char size)
{
  int i = 0;
  int return_value = 0;
  Wire.beginTransmission(Device_Address);
  return_value = Wire.write(start);
  if (return_value != 1)
  {
    return (I2C_ERROR);
  }
  return_value = Wire.endTransmission(false);
  if (return_value != 0)
  {
    return (return_value);
  }
  delayMicroseconds(1);
  /* Third parameter is true: relase I2C-bus after data is read. */
  Wire.requestFrom(Device_Address, size, (unsigned char)true);
  while (Wire.available() && i < size)
  {
    buffer[i++] = Wire.read();
  }
  delayMicroseconds(1);
  if (i != size)
  {
    return (I2C_ERROR);
  }
  return (0); //return: no error
}

int MPU6050::writeData(unsigned char start, const unsigned char *pData, unsigned char size)
{
  int return_value = 0;
  Wire.beginTransmission(Device_Address);
  return_value = Wire.write(start);
  if (return_value != 1)
  {
    return (I2C_ERROR);
  }
  Wire.write(pData, size);
  return_value = Wire.endTransmission(true);
  return (return_value); //return: no error
}
