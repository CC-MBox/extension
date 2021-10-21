/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_Sensor_color = '#27b6ac';

    const QH_yssb_delay = [['700', '700'], ['2.4', '2_4'], ['24', '24'], ['50', '50'], ['101', '101'], ['154', '154']];
    const QH_yssb_gain = [['1', '1'], ['4', '4'], ['16', '16'], ['60', '60']];

    const QH_Button_ICO = 'data:image/png;base64,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';

    const QH_UltraSonicDistanceSensor_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAAxUlEQVR4nO3bQQqDMBRAwW/p/a/cnsDUReWVZmarkcAjoFFnAAAAAAAAAACAf3PMzKuexM4e9QR2J0BMgJgAMQFiz8Wx48L4szuos7G7nf9xrBUQEyAmQEyAmAAxAWICxASICRATICZAbLUXdIcreyZbXd8KiAkQEyAmQEyAmAAxAWICxFafJt79ULMbL+V/kQAxAWICxASICRATICZATICYADEBYgLEBIgJEPOnfMwKiAkQEyAmQEwAAAAAAAAAAACAL3sDIYsLYoVi4i4AAAAASUVORK5CYII=';

    const QH_Line_follower_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAGNUlEQVR4nO2ca4gWVRjHf++77uKl1MqtqFWSqJYMrL4EpdFFMyj6HuQWWlnkhwgri9IuCklEH1qo1PVG2JJdwIRi07KIKDVbK0kzow+tZrpbu2q6ru7bh8eBM/POzDuXc87Mjv7h+fIy81z+75k5z3mec6ZEcdAE3ANMBa4GxgNjgX7gX2AP8D2wCegATmTjZv5wK/ApcAqoRJRuYAlwcQb+5gYTgPVEJ81P+oAngLJl3zPHXcgoSkOeKhuBRqsRZIhZwEn0kefIbmRUFxoPEu9dF1f2ABdZi8YyTJPnyBdAnaWYrGEOMIh58hx53E5YdmCbvArQC1xoIzjTsPXY+sliC/EZRRYjT5WDQL3xKA0ha/IcucN0oCaQ5WPrlVcMx6odeRl5jmwyG65e5I28CvCH0Yg1Ik+PrSp9JoPWhUfI38hz5JjBuLXgfvJLXgU4YC709LgdGCB7ksJka60ghqUgIA0agXci2O8GNgCbgS7gP6SKPBkp30826CPATsP6E2MF4f98LzAfGFFDz21In8PUCJylIVbtaCZ8xv0NmBRD3zCgNURfUhkgpwWFpQQ73QVcmlDv8hC9SWR9Qj+MYjjSYvRzeBC4MYXuBmB7gO4kclMKX4xhGsEOr9Wg/5YQ/XFknQZfjGAhwU7foMnGjhAbUeQgMV4jtvuhzQG/7we2aLKR5t11EpiJvIsjwTaBQTsBfkb+fR34MeF9FeBhZJdDZNgmMCiv+0ujjf0J7qkAjwIr495om8Cg6kathDkORsa8vgLMBd5OYsz2Uu5gwO9Jc7+0upyRl4i8LLAI/5mvHxitycaaABt+eeccTTatYTrBAbVo0D8K6AmxMaTJA3k/Hcc/qF9J30Z8LkB3IchzsJrg4Bal0HsNcDhEdyHIA7ie8AAfSKCzCfg9RG9hyHPwIeGBLib643wzkvudMeSBpBpBVRlH9iA9kzE+95eRys06avdUBpHGVaFQh2yrjZJu9APfAu8j78+NyMolaqpSSPLCJhJdMgg8Zikma6ijOtHtQn9rcwB5/AuFMtUjrxMYB9wNHEIPefuQsyOFQhlYhT95DpqA90i+xeMU0m9RdRYCUchTMQnpGddKih35BykGXGUsghCUDOsvA224k+NOpDfSXePeBmAK0ueYgLQYG5Ge8QFgF/A18A0yUxcOJeAt3KPlBwr4iJlAEHkXZOnUUMFZ8lKgBLzJWfIS4YwkT9csXEZysNnKb9uRCnSPJhtRcBlyNOFK5I/rQ1Y6m4FtyIondyhTvbFnG3CeRR+mISlNWL74J9J9a7DoV02UgWVkR95wJM+Ms2LZCVxhyb9QZE3eOUgS7TfS2oE3kLV3p881Pejbi5MIJar3+W3FHnmjgC899ncAdwZc3wx84Ll+H3r70ZFRQtaeXvLGWrLvR1470XY3zMVdrPjYkI+B8CNvC9mSt4Z4J8y9rc8pmn0MhN8KY6iRx+nrf1J0xN5QlBQv4Hb+O7IlbzXJv20wW9HzN+arUszA/e4YyuSBTB6qPqNf6hiN/EuOsd3Y2/7vR94q0m/LKyHn4Byd16bUF4pnFUPHgOtMGlMwEvgcN3lr0fNJkhLuY2ZBW49Tox736LP1IQa/kbcSfRtCJ3p0Gyt4TMU9+mxUk02TB9IvdnTv0qi3Ci8phjpMGjoNP/JWoJe8BmCvov91jbqr8K5iaKFJQ9ghD4QwR/8J5HE2hs8UYyb3mPiR14Z+8uZ5bLRq1l+FrxRjDxmy4UfecvST96THRid6Twf4ol0x+KIB/bbIe8pjowu4XLMNXyxRjH6iWbcfecvQT97TVJNnbReDuqv+OPqWb7bIm0+G5IFM+b2KAy9r0OlH3lL0k/cMGZPnQH2MjyAdr6SwRZ66/MyUPIDzkR1QauaepHQ/BvesXkGKs7pLSd6CaabkOZiJ26lfiNfZmoiU/U2T9zw5JM/Bq7id6wMWIN2xIJyLpBDeHflt6CdvATkmD6SM9BpuJyvAUeAjZMa7DznzNu/0b35HGVrRf0rU+ymB3JGnogX3zBxV+oB7DfgzgyFEnoNxyGg8Qm3iDiMzualPrbeQIXlp30MjkI+ITUcmikuQSu8hpGTUgaQtR1PaCUM9UnYbjzzKew3aqsL/X5GJZgKU7bAAAAAASUVORK5CYII=';

    const QH_lightSensor_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAAEiElEQVRoge2az29VRRTHP4/kgaKNEXbaBbZqdWHLDxc1Qa3LbjSRUEBMXBjjCleC7qwmxrjs32ANAUSQRY0xiKhATHRJfyRYKGmMSUWhgLY1bVmceencc2fmzv31NIZvcpJ37z3zPefcd2bmzMyF+jEE/AnMA7vbYK92/AasGvm1bmONug0ggbTN5roCbbYCY8DXwLZq3QGgD/jK8G+vgT+FSdZS6CqwMUN/VUkIG4EZS/dSKU8j0EA6uO3gcEabPAENK91btKFbjCijt4HOgH5sQJ2Gy9YdqcDfTDwI/K4Mjwb0YwP6VOn9AWyuwN8ovKWMrwA7PbqXLb1pj06/4bA5D1TobyaawLhy4IxHdxCYNTLo0TmjuMaNjbZiUDnxdwmuBcXlC7x2HLWc+KQEz6jFcySyzQbgniylZ4AryHA5AmzK0F+P1GpDrKVIA9gBfICk0qThuwVMmHvvk5w0mw4eHzYZ324CfwGvh5TPk/zrryGdMyafG8ahKcURkimkYI2Za5rGl2uK43qo0Q8ew+OE87ob+DFHIFouAF0B/kHSg1BLZgm8kB1IOeMzfBRJMxsvkJ6XisgcMKC415Psp1quAs8FXgQg9dQw6Vm7JUMqmCWHziLSufcBPcB9RnrMvSNGx9XODmqPx4fbxsesOjKBTmT00RPeHvO8G/c/c5xw+rTQDXzuaD8HPOIJaMX4FCq1MtGPjEwLyNDcRHJW95ll4GAB/kOmrc113thomgAWjA/9JeIIwpUKb5fge8fBt6ukj9FokB6aj1fAe0JxTlTAGYWnleFFpD+URRfpgSL3irjIEvxFdX0S+KUAj8Y0cErdeykvSZGAnlXXJwtw+KC5tK1MrAM+Ripl3+Q1TbJKeEhx/JzXaAA/qeuHrd/RfsbM4rMW8bx61lFhQB2Ke97c3xrrZ5GU+8/jI/xljivl9JD9eIW+9CjuyRJ+RuMbRfRKMd+deFVxn85LUCTlvlfXuYfWADTXdxVye7Gd5FtcAh6tgNc1sfZVwJuJBsnt4FWkai7L+YXirL306WAtRXeT7pSHSnC/6+B7uQRfEP3At8haZArYgrzRC8qBZfIH1UAqbb18OGee3YuUQ8vAWUouH3wLvNZ+cxeyGNNv9gRxfeoxpNRxLfC2GJ031bNCC7ysJfiHlu4A7iX4EnAM2A88Adxv5ElkaD7mabcIPG/xv+HxIXoJ3kfyfEbLKeAB1WYA9z+VV+ZUMCCbia5lektmgN5QQF96GmZtY3WR3tPLI+dYSzMXQttYY3kCyrvRuAsZbmMDmUBGszIbjcGAeoGLwA3itoI3IH1iL8n9um1Ijp82Tt80MmHuvYdU0DbPPuA10vt+Gq2t4BvG16cy9HPB3gT8rATPYYuniv2JQtDHKf/gT51m4FkD2XS3udp+nOI68Drr0Y35kkRX8G0/8DqgHFjBP4vHfEnyrx5Jug6NQ4ddemTzYVTpte3Q+H93rH9dGa3zw4vgYVZVsNdCM9T7acx4KU8j0YtUFGPETWp5AirCn8Ddz8sK4Ir1+3Ib7NWOmC9JKsMdqmqmtd1BnasAAAAASUVORK5CYII=';

    const QH_sound_ICO = 'data:image/png;base64,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';

    const QH_Potentiometer_ICO = 'data:image/png;base64,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';

    const QH_joystick_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAE6klEQVR4nO2dzY8URRiHn1mz0eiCUS9+oSwgCFyMRFTQlcSDB6MYFIX1yp2vmyZ6NytL8OCfoAuERD1sNH4QYzwQFcP6sfFgFDSKgJpdEiW7yXioHjPzVjNb3V0z/U73+ySVbM1O/frt+vV0dVW/PQOGYRiGYRhGfBplB1CQ+4HtwBhwK7Aief0c8BvwKfAOcLqU6GpCA3gOmAWageV7YAeDfwCqYxT4nHAjZPkMuLvvUVeUrcB58pvRKheBbX2OvXKMAVfwO/df4C1gF7AOuCEp65LX3u7S7pG+7kGFGAUu4HfqFLAysP3RlPbnA9sbbTTwx4xFYG8OrX1JWzmmGBnYiX9k5zGjxYEUvR0FY6wNDfxL26kIuseE5ncRNGvBJjo77gqwKoLuStyg3q59XwTdKAyVHUAXnhb1E8CPEXR/ws3e29keQTcKmg0ZE3XZiUWQWnJbpaHZkDtE/YuI2l8usS0jhXk6z/MjEbVHhPZ8RO1CaP6E9HIhUO53s4fbyoRmQ34X9dsjakstua3S0GzIL6K+KaK21JLbKg3NhpwU9ZiXpvKSWm7LSOEh/Inh6gi6o/gTwwci6FaeBnCGzo47GkH3uND8GruTGMwL+IuB+wroHUzRe7ZgjLViCJeoIJff9+fQOoC//H4S3eOoSlYAl/CP7GOELTauwj9NtW7l3tmDeGvBNvyZe2ugnwLGgXtxM/CR5O/x5H9pt3DnsfvqhdkC/EXxJIc/gYf7HHtluQ14j/xmfADc1feoK04Dd/V1inAjTiVt7PK2x2wGXgam8U2YTv43UJO+Kh0xcsV2IPfNrsGVYYYowwxRhhmiDDNEGWaIMswQZZghyjBDlGGGKMMMUYYZogwzRBnXlB1AQR4E9gAv4edsbUle+wf4tc9x1YoG7n75acJvUH0F7GZAl+Q1swb4hPy3cD8mTvajgUtM+IPiSQ6XgMf6HHvfWYt7BnCOq3fEHC4VNM/TSo/ixgKpuYjLz3oRl391fVJWJ68dx0+OayZalf0mh7W41JrQI/QC2UxZg0tqkzofJv9bintwp6q0OGI81auOE2Q/bYQ+b94gfcx4jWyX7EPARIrORxk0BoZup6mrlb8DtcdT2r5RINY3U/R2FdBTidzBou9rR17angGuzR0pXAfMCE35RO7A0ytD5AM7TeDJQpE6nkrR3RxBVw29MuRV8f5Z4kzsGsAPQvuVCLpR0LyWtVXUWzm9RWkC7y6xLdVsBCaBb4DLZB/A614uJ313CNiQse87GAaOkD6xspKvLAKHk77NxDAudb/sHahqeZ+MphxREHTVy2SoGRvxT1NncU+rLgsVMf5nGfAM/rfjLQDrQwQm8c24uReR1oybcH3Z3revhzT8VjSy57jjIb/UcyakkVybstNUPJbT2bdz8g1pM99mwHuM/HTtX80z9VpihijDDFGGGaIMM0QZZogyzBBlmCHKMEOUYYYowwxRhhmiDDNEGWaIMswQZZghyjBDlJFmiPz5H7uFG48bRd37qaU0Q86K+uPRwjGeEPWfQxodovNG/CwuhcUoxi3AOTr7diKk4QbSE+V24rImjGwsB57HN2MB9x31QRwWja3EL0FJci2GcQnBZQdd1TJNzgz4SdxHq+wdqEpZwI3Rmc1oZz3u4zVD+m94WOle5pO+myDDmGEYhmEYhmHE5D8fr7DgI+7aSwAAAABJRU5ErkJggg==';

    const QH_Soilmoisture_ICO = 'data:image/png;base64,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';

    const QH_dht11_ICO = 'data:image/png;base64,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';

    const QH_yssb_ICO = 'data:image/png;base64,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';

    const QH_MPU6050_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAHRElEQVRogd2ae2jXVRTAP87VTNt+09Ae1jAjMytDURNlYmric0oiVJZZUBHliHylQvQAI4TpZila5tIeltY/PSCyQIuktNKpqGn4KtTZdDo1bc71x7lffud7vvf7e7itqAMX/Z3Xved+73nccwf/E2jVAjoTwC1uJIB2Dn8O+APYC+wGaltg7iZBDjAEqAC2AxeBxjSjAdgGlAODnI5/DRLAHOAA6ReebhwAZgCF/6QBecBc5Gg01QA7jgPT3BwWRgOH3Bhpidn6yADgLeT8x8EFYCfiB0eAMw7fDrgW6AbcCuSm0LEDmAJsdr9zEAOuc78PAUVZrh0Qg2cB9fh38hSwAhgF5GegLx8YA1QCdTE664FSZ8RyQzt4KUbkukX6JjsMTAeuvBTFDvKBmcDRmDl2mt+/4TlamRjxsUd5A7AQKGiCARYSSORr8MwXjOXERLhUPtIK8YcpBn8EmAR8neVCOwF3A/2BqxF/uQAcQ3ziK+B7YBjwjuPXsAu4DQnvWcEs/J+5CGgNdEZ2MRVcATziFphJftkKjAO6IMHC0kuzNWIgUcfeieziy8AJhd8FLAF6K/k8txE1GSzeN8qRCGWNqQf6ZGpEnlucdeoi4Pk0C1gPTEXKEEurBT5w9GHAnUBf4F5gEdG8VAbcSDQIbMOfZyIw1wg2ICVIa6O0BskR6Xb3Z+AB5JilgkJgtZEtAYYTDQDPpjOikOjOLHS0zgpXjQSDXCRJfh5jxBqyS7qtkK8WyP/k8IuM3hrS+OccI3CYZIgtVPjTyBcC6IdEnrgvUgm0zcKYBOHNHODmtkdsepyCHKIFoGU+qGj9He5thTuHJLdfjJ4qpDTJFCqU7CyHs1F0PzE5ZYhhPEU0Y+tSYYnD9UJCaw1Q7HD5xsBGpCAckKEhE5Tch0qnLWeKfcIVhmmFh6dY0c+SLOLKgB4e/knIhgQyZ8isvOijZL5QeLs5C6OiEtY006iYSTYrnjcMrTsw3xkQhMjeSDUQyPwF3J/GkJ6Kf73CjzVr3GIFE4Qzbz3xVewIxdeAOHsA8xXtIHCfw98E7DFyqYwZrng/MuvUiboBE736GUurUkwC8Ini1QlqnNHTCKxColYnYBPhLxN3zEoV33xD2270643kQUNcGzPBHe7fIuCk4i93+Dzk0mON2QhchXxlbcwZ/AFgreJ5yNBsNR76slMNscKjvC0Sywe5348bmeAYlSjcamCd+/92oAPyZfQxO044NLdVm3QRuMas4zUz71RNnG2I8zyGPOVoe0gmuDVK5jQSigFWOtw6JPuXud8bgDaIz+gAUKV0Tlb4Hz3rmGfWOlsTbUb3GbJR0cc7XIJwhXoIuN4tdoPDlTljgi+z0sn2JhyaK5ESZavCPZmtIaWGaI/WDSSj2knCJUd35Hho5+/gRuCY64D3FM9YJzvJzKu/cC3+K7Q9Wk9rolVonX1yChrAYKQ80UciMGYDYd3Bl7vcydokF4wXPfNAGme/yxC3GeEFcTugYCJydQ34tiJX2jySPqNHiZPLJ+z8jUiDoR1+2GF4QxetQsI1fz3hxsKnijYkZgKAh42eXYjPgBwnHZpfVXIzzeJmxOhPEN6sBjyJu8ooG6No6xW+ZwpDAmP0ZIeQ2yDIcSpBHDYIucXAn2ZuXZZosAk3UqJAtGisVLRvFL5XVDQCEwn7TJ3DWehB/L2+t4d/leEp800+yDDVkfxsOpqM9wl7YDDhJsVFpAJoo3heQUqVRuRypm+ai42+AiRX6TUOwgO+i9VMR3tJ4cp9wjHQg2gnpAppOgTQFXgTqZkGKr5dRpdN2vtIcY2eYZiPIg42QOHS3pcNJAh/0cBJlyF9AA25hBsawTztiV6nn0s1aSHh5NaI+E4O4arzXbLv5D9GOJM3In60FAn/OU6nXnBQZy02cjVk0K6dRnT37kF8Q+PfJ/3DTHvk2hpUAl0Ih3I9ziLdGb3YHOT+Y9tBceE5BHlEa/4jbhE2stUirZoJyBnvCQxFSp7PgPOOby/S9w1gBNJG9RkUjBcQ/6k2+O3AZZkYApItbct0N3JHL0+zgLhxjGhI7Qu8Dvyq+E44IzoTzfjnMRepTMAWkoExXZCktiWDxV8EvkOuAHElRwAFJBvkXT1GNALPxAmnctgcpK7pbvDVyK3tS2R3hiLt/o5I5q5Bwvgm4Fsks2cDI5DarKPBLwOeyFKX97nLBoBFNO8rbHskOvmeH9aQ7GxmDKOB340i+/wVjGqkA5jJu2EcFCDJLq7tuvRSjIBo8yB47iol/jG0DrlXjCWz57gEUgCuJFp2aMeO9QkLPh8JrqsgX6aI5HNXH6QDeXsKnReQoLAbaYKfdvh85KEo+POOVLu8A3gU+CGtBSlgJGLMQfx9p8uR94lLfY1KNWqQZJdxnmgOSCDd+v3NYMA+pHZqiq81GXKQy9EC5Hqb6nlZ55ctyH2imGb4K6WW+jOnbsDNSHcxqLNOIyVN4D91LTD3fx/+Bpro6nc+V4VNAAAAAElFTkSuQmCC';


    // 双引脚
    CC_TWO_PIN = [
        ['接口1', '3, 2'],
        ['接口2', '5, 4'],
        ['接口3', '6, 7'],
        ['接口4', '9, 8'],
        ['接口5', '10, 12'],
        ['接口6', '11,13']
    ];
    // 奇数引脚
    QH_C01_PIN = [
        ['接口1', '3'],
        ['接口2', '5'],
        ['接口3', '6'],
        ['接口4', '8'],
        ['接口5', '10'],
        ['接口6', '11']
    ];
    //  偶数引脚
    QH_C02_PIN = [
        ['接口1', '2'],
        ['接口2', '4'],
        ['接口3', '7'],
        ['接口4', '8'],
        ['接口5', '12'],
        ['接口6', '13']
    ];
    // 模拟输出引脚
    QH_OUTPUT_BOTH_PIN = [
        ['接口1', 'A3'],
        ['接口2', 'A4'],
        ['接口3', 'A5'],
        ['接口4', 'A0'],
        ['接口5', 'A1'],
        ['接口6', 'A2']
    ];

    // 触碰按钮
    Blockly.Blocks.CC_key = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.CC_KEY,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_Button_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: QH_C02_PIN
                    }
                ],
                tooltip: '',
                colour: QH_Sensor_color,
                extensions: ['output_boolean']
            });
        }
    };

    // 按钮(未完成)
    Blockly.Blocks.QH_button_general = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_BUTTON_GENERAL,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_Button_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: QH_OUTPUT_BOTH_PIN
                    },
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [
                            [Blockly.Msg.QH_LEFT, '0'],
                            [Blockly.Msg.QH_RIGHT, '1']
                        ]
                    }
                ],
                tooltip: '常开按钮开关，按下为输入，\n注意左按钮在P7/8时无效',
                colour: QH_Sensor_color,
                extensions: ['output_boolean']
            });
        }
    };
//超声波模块
    Blockly.Blocks.QH_UltraSonicDistanceSensor = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_UltraSonicDistanceSensor,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_UltraSonicDistanceSensor_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: CC_TWO_PIN
                    }

                ],
                tooltip: '超声波测距，注意单位的选择，\n使用时如果波动大请注意检查程序或放宽取值区间',
                colour: QH_Sensor_color,
                extensions: ['output_number']
            });
        }
    };
    // 巡线
    Blockly.Blocks.QH_Line_follower = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_LINE_FOLLOWER,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_Line_follower_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: QH_C02_PIN
                    },
                    {
                        type: 'field_dropdown',
                        name: 'state1',
                        options: [['ON', '1'], ['OFF', '0']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'state2',
                        options: [['ON', '1'], ['OFF', '0']]
                    }
                ],
                tooltip: '左右感应器对白色物体约2CM时有输入(亮灯),\n相反对黑色物体不作反应，通常用来区分白黑',
                colour: QH_Sensor_color,
                extensions: ['output_boolean']
            });
        }
    };
    // 光线
    Blockly.Blocks.QH_lightSensor = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_LIGHTSENSOR,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_lightSensor_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: QH_OUTPUT_BOTH_PIN
                    }
                ],
                tooltip: '对光线强弱的感应，返回对应的模拟数值，\n亮数值变大，暗数值变小',
                colour: QH_Sensor_color,
                extensions: ['output_number']
            });
        }
    };
    // 声音
    Blockly.Blocks.QH_sound = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_SOUND,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_sound_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: QH_OUTPUT_BOTH_PIN
                    }
                ],
                tooltip: '对声音大小的感应，返回对应的模拟数值，\n周边噪声大值变大，相反变小',
                colour: QH_Sensor_color,
                extensions: ['output_number']
            });
        }
    };
    // 电位器
    Blockly.Blocks.QH_Potentiometer = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_POTENTIOMETER,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_Potentiometer_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: QH_OUTPUT_BOTH_PIN
                    }
                ],
                tooltip: '读取电位器的模拟阻值',
                colour: QH_Sensor_color,
                extensions: ['output_number']
            });
        }
    };
    // PS2遥杆初始化
   Blockly.Blocks.ps2_init = {
           init: function () {
               this.jsonInit({
                   message0:'%1',
                   message1: Blockly.Msg.PS2_INIT,
                   args0: [
                       {
                           type: 'field_image',
                           src: QH_joystick_ICO,
                           width: 30,
                           height: 30
                       }
                   ],
                   args1: [
                       {
                           type: 'field_dropdown',
                           name: 'DIN',
                           options: CC_TWO_PIN

                       }
                   ],
                   tooltip: 'PS2手柄启动必要块',
                   colour: QH_Sensor_color,
                   extensions: ['shape_statement']
               });
           }
       };

       Blockly.Blocks.ps2_readData = {
           init: function () {
               this.jsonInit({
                   message0:'%1',
                   message1: Blockly.Msg.PS2_READDATA,
                   args0: [
                      {
                          type: 'field_image',
                          src: QH_joystick_ICO,
                          width: 30,
                          height: 30
                      }
                  ],
                   colour: QH_Sensor_color,
                   extensions: ['shape_statement']
               });
           }
       };

       Blockly.Blocks.ps2_getButton = {
           init: function () {
               this.jsonInit({
                   message0:'%1',
                   message1: Blockly.Msg.PS2_GETBUTTON,
                   args0: [
                      {
                          type: 'field_image',
                          src: QH_joystick_ICO,
                          width: 30,
                          height: 30
                      }
                  ],
                   args1: [
                       {
                           type: 'field_dropdown',
                           name: 'BUTTON',
                           options: [
                               [Blockly.Msg.PS2_UP, 'PSB_PAD_UP'],
                               [Blockly.Msg.PS2_DOWN, 'PSB_PAD_DOWN'],
                               [Blockly.Msg.PS2_LEFT, 'PSB_PAD_LEFT'],
                               [Blockly.Msg.PS2_RIGHT, 'PSB_PAD_RIGHT'],
                               [Blockly.Msg.PS2_TRIANGLE, 'PSB_TRIANGLE'],
                               [Blockly.Msg.PS2_CIRCLE, 'PSB_CIRCLE'],
                               [Blockly.Msg.PS2_CROSS, 'PSB_CROSS'],
                               [Blockly.Msg.PS2_SQUARE, 'PSB_SQUARE'],
                               ['L1', 'PSB_L1'],
                               ['L2', 'PSB_L2'],
                               ['L3', 'PSB_L3'],
                               ['R1', 'PSB_R1'],
                               ['R2', 'PSB_R2'],
                               ['R3', 'PSB_R3'],
                               [Blockly.Msg.PS2_SELECT, 'PSB_SELECT'],
                               [Blockly.Msg.PS2_START, 'PSB_START']
                           ]
                       }
                   ],
                   colour: QH_Sensor_color,
                   extensions: ['output_boolean']
               });
           }
       };

       Blockly.Blocks.ps2_GetJoystick = {
           init: function () {
               this.jsonInit({
                   message0:'%1',
                   message1: Blockly.Msg.PS2_GETJOYSTICK,
                   args0: [
                                          {
                                              type: 'field_image',
                                              src: QH_joystick_ICO,
                                              width: 30,
                                              height: 30
                                          }
                                      ],
                   args1: [
                       {
                           type: 'field_dropdown',
                           name: 'JOYSTICK',
                           options: [
                               ['LX', 'PSS_LX'],
                               ['LY', 'PSS_LY'],
                               ['RX', 'PSS_RX'],
                               ['RY', 'PSS_RY']
                           ]
                       }
                   ],
                   colour: QH_Sensor_color,
                   extensions: ['output_number']
               });
           }
       };
    // 土壤湿度
    Blockly.Blocks.QH_Soilmoisture = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_Soilmoisture,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_Soilmoisture_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: QH_OUTPUT_BOTH_PIN
                    }
                ],
                tooltip: '土壤湿度传感器的模拟数值',
                colour: QH_Sensor_color,
                extensions: ['output_number']
            });
        }
    };
    // 温湿度
    Blockly.Blocks.QH_dht11 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_dht11,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_dht11_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: QH_C02_PIN
                    },
                    {
                        type: 'field_dropdown',
                        name: 'WHAT',
                        options: [[Blockly.Msg.QH_Temperature, 'Temperature'], [Blockly.Msg.QH_Humidity, 'Humidity']]
                    }
                ],
                tooltip: '读取传感器的摄氏温度值及相对湿度',
                colour: QH_Sensor_color,
                extensions: ['output_number']
            });
        }
    };


    // 颜色识别初始化
    Blockly.Blocks.QH_yssb_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_yssb_init,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_yssb_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [

                ],
                tooltip: '启用颜色识别的初始化必要块。',
                colour: QH_Sensor_color,
                extensions: ['shape_statement']
            });
        }
    };
    // 颜色识别获取
        Blockly.Blocks.CC_yssb_get = {
            init: function () {
                this.jsonInit({
                    message0: '%1',
                    message1: Blockly.Msg.CC_yssb_get,
                    args0: [
                        {
                            type: 'field_image',
                            src: QH_yssb_ICO,
                            width: 30,
                            height: 30
                        }
                    ],
                    args1: [
                        {
                            type: 'field_dropdown',
                            name: 'PIN',
                            options: [['R', 'Red'], ['G', 'Green'], ['B', 'Blue']]
                        },
                        {
                            type: 'field_dropdown',
                            name: 'PIN2',
                            options: [[Blockly.Msg.GET_TO_GAMMA, 'ToGamma'], [Blockly.Msg.GET_NO_GAMMA, '']]
                        }
                    ],
                    tooltip: '颜色传感器读取的对应值变量',
                    colour: QH_Sensor_color,
                    extensions: ['output_number']
                });
            }
        };
    // 陀螺仪更新数据
    Blockly.Blocks.QH_MPU6050_update = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_MPU6050_update,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MPU6050_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [

                ],
                tooltip: '初始化陀螺仪,用在读取值前,只用一次即可',
                colour: QH_Sensor_color,
                extensions: ['shape_statement']
            });
        }
    };
    // 偏航检测复位
    Blockly.Blocks.QH_MPU6050_yaw_reset = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_MPU6050_yaw_reset,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MPU6050_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [

                ],
                tooltip: '校准偏航角',
                colour: QH_Sensor_color,
                extensions: ['shape_statement']
            });
        }
    };
    // MPU6050-获取数据
    Blockly.Blocks.QH_MPU6050_GETDATA = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_MPU6050_GETDATA,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MPU6050_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'MPU6050_TYPE',
                        options: [
                            [Blockly.Msg.QH_Accel_X, 'normAccel.XAxis'],
                            [Blockly.Msg.QH_Accel_Y, 'normAccel.YAxis'],
                            [Blockly.Msg.QH_Accel_Z, 'normAccel.ZAxis'],
                            [Blockly.Msg.QH_Gyro_X, 'normGyro.XAxis'],
                            [Blockly.Msg.QH_Gyro_Y, 'normGyro.YAxis'],
                            [Blockly.Msg.QH_Gyro_Z, 'normGyro.ZAxis'],
                            [Blockly.Msg.QH_readTempC, 'mpu.readTemperature()'],
                            [Blockly.Msg.QH_MPU6050_readYaw, 'readYaw'],
                            [Blockly.Msg.QH_gyro_pitch, '(atan2(normAccel.YAxis, normAccel.ZAxis)*180.0)/M_PI'],
                            [Blockly.Msg.QH_gyro_roll, '-(atan2(normAccel.XAxis, sqrt(normAccel.YAxis*normAccel.YAxis + normAccel.ZAxis*normAccel.ZAxis))*180.0)/M_PI']
                        ]
                    }
                ],
                tooltip: '陀螺仪获取数据',
                colour: QH_Sensor_color,
                extensions: ['output_number']
            });
        }
    };
    // MPU6050-动作检测更新数据
    Blockly.Blocks.QH_MPU6050_MOTION_update = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_MPU6050_MOTION_update,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MPU6050_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [

                ],
                tooltip: '陀螺仪动作检测更新数据',
                colour: QH_Sensor_color,
                extensions: ['shape_statement']
            });
        }
    };
    // MPU6050-获取数据
    Blockly.Blocks.QH_MPU6050_MOTION_GETDATA = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QH_MPU6050_MOTION_GETDATA,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_MPU6050_ICO,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'MPU6050_TYPE',
                        options: [
                            [Blockly.Msg.QH_gyro_isActivity, 'act.isActivity'],
                            [Blockly.Msg.QH_gyro_isInactivity, 'act.isInactivity'],
                            [Blockly.Msg.QH_gyro_isPosActivityOnX, 'act.isPosActivityOnX'],
                            [Blockly.Msg.QH_gyro_isNegActivityOnX, 'act.isNegActivityOnX'],
                            [Blockly.Msg.QH_gyro_isPosActivityOnY, 'act.isPosActivityOnY'],
                            [Blockly.Msg.QH_gyro_isNegActivityOnY, 'act.isNegActivityOnY'],
                            [Blockly.Msg.QH_gyro_isPosActivityOnZ, 'act.isPosActivityOnZ'],
                            [Blockly.Msg.QH_gyro_isNegActivityOnZ, 'act.isNegActivityOnZ']
                        ]
                    }
                ],
                tooltip: '陀螺仪动作检测获取数据',
                colour: QH_Sensor_color,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
