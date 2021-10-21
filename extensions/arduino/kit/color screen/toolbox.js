/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_Sensor_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEUUlEQVRoge3Y+4tVVRTA8Y/jOE5RmSnN2INCHRVfmCYFla9AJDAhLKXSoRQrtPdP2h+QUVqZERVRWRrRA7KCgiitLP0hCkKKsrTSwkzJSmvSyX5Y+85c72PuveMM/nK+cLjn7r3OPmvvtdZe62wyMjIyMjIyTh59emncARiI09P/P3EAf/T0i3piAgMxHTNwEUbhrDKyB/AVPsf7+AC/n8jLuzuBfpiDVszCr9iEbfga32M//kryp2EQhooJXoppGIx38Dw24khvT+AULME9aMQLeAmf5cmMFZMbjfNS225sxxvpN8dkzMeN+Bur8DT+qVGvqpiHXfgWN6N/Qf90YYGj+BAP4e50rcJHqW8rphY824hF+A47cW1PKj4Ir+Eglgn3yacea8WqrUZTXl9LunI042G0YU16Np8G3CGC/RXlY6lqrhTmfw8XlOivx9ti1cantgVYnO4Xpv9SW+5+grDmWyUmAReKIN8tNoducZ/wy6XKx8rapHyTcAMiUIeXkB2e+iTZZjGJR8uM3Qe3Jx1W1KJ4XzyB3zClC7lpwm3GJ4X2Kb2ahdQn2UZhibYq3rMfjyfduqQBr+MbpVcxn23C5/MVq5Z82UdEYHfFCOzAq4pjsIM6sSXuwLkVBhwrdpQmkQuGVZAvxbD07BC0Y0wF+fNFflmfdO1QOsdjuEwEzZ4Kg83Bp9grrFYYIw14AD+LBFenmDqxmr+ksa6u8M6fkm5TlIibxTiMSRUGybEBD3bRvxLH0rUxT+FyrBIrWw0Xi8BelGuYmBoWlHuiBJtENm4RW2Uhe3RO4D8xic0l5FpFrN0r6qJqWSB0npgLpnaRsLrDsQr9fTBbuFOtz5ZjsNC5gzn4F9dVOcAGUSqUI9+Fctf9XcjX4kLzRdFXFDO3CbNcVcUgK0RtQ8TPyIL+BjGJPelamdryGakzY2/B8ireO1vknlvKCSxNAnMrDDRGbKPNuEFnhq2FYbge5wh3GF1Bfp5IerdWGniJmMSyCnJbRRLK0d1EtgafVJC/M+m0qIJcB7NE9fmUYtPnmJoGnaC2UqKfzlJioljVK8rI9sczSZeZVerewThRqG1RvqxYIwqyZp3FXIvimJDaRqT7RpGBfxDldSlaRILbKTJ/txiAdTiEuxQno3pREu8SliD8ujXdt+rME62pj1j5H/GmYqv1FTnmEJ5LOpwwc0V1ukVxtq4Xqb1NxERzXt9wx1tviLBam1j5QuUni3jYh2t6QvF8msT36hG8LFYxnykisNvxsahUc5+Uq8Xk24VbFPr8JPEFdgRP4uyeVj6fcaJqPSpKipscb+YxIk+8mPo3pfvljt8qzxTf1pvTWOtVrkiLOJFzoaFJgYXCbbaKeuZLcbSyV+dB1hnCgqPEAszAJaISXYdnRalcMz1xsFUn3GkmLherXOr7mdh1tgsXexdfiGKv2/TW0eKp4kQh51oHxanc4V56X0ZGRkZGRsZJ4X8qze125zeORgAAAABJRU5ErkJggg==';

    const QH_Actuator_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFU0lEQVRoge2Za2wVRRTHfy2tpIJVKkLBgqIJRkLk8UF5SPiAUQxBjEbU0piYosZgtMVPViRBQ7Txg0pEIVFQ01Yp0SbQGDVRg4pKBA0aHr54+SIabVGxYmnXD+cMM7t3997de/dKTfpPNrn3zJkz578zc86ZWRjEIAYULgOeAg4Az5xmXwAoS6h/AbAauBUoVdnomH2HAUuBWUAf8AGwEehJ6EPBuBk4BnjAX8ATwFSgJEbfauBz7es+nwAVxXA2Co1Avw7eAdQk6FsN7NO+XwFLgDrgoMoeSdXTLKhHSPQDq4iegSHAlcBjwIfAD8Bu4DDi8B5glKN/ucr3ApOAcUXw/RSmAyd0wOUh7ZXATcBLwC9kLh33WRzoWxWi8y1wddokSoAdOsALgbbJQBuWpHkOAWuBa4ExyIvo0Lbf8L/1VU6/g8CP+vtvYFqaRG5Qw9/j35ALdTAPiT4fA03AlAg7pcAW1X8TeUHLkKXaB9ynsjLgedVrT5PIdjW61JFNxM7CBmB8TFujsUtvK5ZEfUDvItX5Jm+vAxivg3Xjn41NOtD6PGwuxi6lfuCOEJ15WCKVeYyRgZlqsM2RlSDrvA8Ymadd8yK+wCZUgxpksxuyJ5G9WTChucA5zv9x2MgSB8ORDe9iJHBU7TQ48hrga5V3I1n/D/3fmdTxXJishndm0akCXgS+RGbuJFAb0Fmkdo4DF+InsQtJoCDl0M8qTzWKzVCj27LozMcuDRPZerSvizZta8VPoiqgt07bbi/Qdx/MRnw9i04p8J7qrUEqZA/4CX8OuQ5//gkjAfCOti8q0HcfzJLYnEPPhOh+YA6SOzzgM+A8oBw7I9lIPODoLEOq51SwhPAsH4bHVfcjYAS2aOxBIp9xcA/hJJrwz5gH7AcuLoiB4k41+HQM3bOx0el6pFh8DQkAJrSG1V8AK7BVwzrgXuBTle0oiIFiuRprjqnfqPrbHdlQJC9s1bZbAn1WYonWOfKzkH3mEb+aiMRDamhlTP1K7EFseqCtQeUHkBPj+cCT2Jm4LcTe29o+J6njQTSrofsT9NmgfR4NyCuQ02FwH/QRHmonAH8iAeTcRF6HYK0OdleCPguwJUkQFcjp0AQCj8wiEiRh7iezZMoLZdj8UJdD18UIbHIcEqEzCRvBgnCz/j4KrLvKkNxh6qAk53WwZUbUJp2IPZS5haRLwkNuXPJGkMQVedjo1v5jI9pLkbLdA55F6q+r8FfCHhL+80IaJIYiG7SL7NdG85BkGXXeP4a/Eo+NNEgYNBKe+IK4FGhB9sI2ZGObwrMhS79IpEkiX8wGfsdWyC7KkeWXFQOBxCwsiXYyr3VbkOWa1bdWTi+JmdhqYBOZJMxR4jg5oudRBgaJV8gkcSY2Ma7IZawae9T8LzEDS+Jlwr8SrNf2vUg0LDouwX/HmwuzsbmmjfAKoBZbIUwt1ME4GAP06rMFuJHot1eKHA3MhV8r4STmYsPwPSn7G4kzkE36DzaZ/YqcKu9G7oRrkWr4CPayrplwEtOwJ8o1jvxB5MoolUu8bBiF3OnuJjpbm6p4YYSN+dgw3IEleg1C/gTRZU+qGA68r44cRj49dAKvAg8joTSsbClBMnmv9m1BZhok+3epvKmIvp+CS+IQMTKxYizwBnbGVmPJuleq7cT75FcQhgHv6oBHkBv2XChHlqIJwV3IB1eDKdg9tRPJKUVFcDlNiNnvLewsdCJneIN6JJN7yAsKuz5KFS6JuDNhsBH56rsgIF+GJfgcMnNFRZBEKhdpSEDYRbLjdUEwN4vfkR6JRIi6EEiKXmRW6oj//WQQg/g/4F8UiMGaSs+gAAAAAABJRU5ErkJggg==';

    const QH_SPEECH_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEVUlEQVRogdWaW4gVRxCGv6PrFV3RGBTDCiquShTiBUVQNxoNoi5CEkHxYcmLRggYFMxbgviq4oOiqGD0IYIXIorBu7uoIQhGRXf1yCaSRFcN5OYlXqI7PlQ106d3jrtnpndbf2hqznR3Tf0zVdU1PScH/AYMAO5ruwvcBH4GLgI/6rnXHr8CUSutAVgDjAxkY6vIqewGlGsbBAwFKoGJwCSgt46LgO+Br4CfOtRSDygDZgLbgEcImefAOqBLQLsyoT+wHvgfIXQa6BXUooyYBNxCyBwBOoU1JxuGAXcQMssD25IZcxEifwA9AtuSGRcQMtUhjfDh27Uqx3vQlRo+iDxQGXnQlRo+iMxQWe9BVzCMJg72N3ZxBOiOFJovgIEhDcnqWk+AY6pnfnZzwmIx4l7HQhuSFX2Ap0j91T+UET6y1r/IWlIGzPOgLxV8FXuHVU7wpK9k+CIy2JOeoHgPSb/PgcmBbcmEL5GstSOkET5c6xeVHwJvZdCTA84BZ4j3EjoUZcBZ5Kl8l0FPBfGuTbDdmgrgTzViWUodc4iJfObJrlT4CGhGypZxKeavIiay26NdqbBBDWlEVvxSsIuYyB0CxYlBV+C8GrOnxLkXdV4zxeMkB5zU1u5EhwMP1ZjpbZxTBjzWOUcpHifvUiQhtMd+VCNxyWITySEbeqdoeTeHI+82TcB+PVeVoHumdfx+ZkuLYCywEcgTu4j9jjKd4ul1AfHTqKR4nByiAxLCGesijcAip/8bq3+p07daz6/V37dpSbgL8jaamBB8upbZnd8KjKDwjvUCPrZ+u24xWuVVlXUJ48xXgWvI95qBeh3AL5HjKocgRaSNTxAyppxx/X+MSkOkNmGciY/jVr+3OHkHqbFWAnuRR34hYVyt9n1K7DbmbvZEiL/QY7TPdR9TBlUjGc1LnAy1DLJbMy3T5hA9/xB5Kt9SGCcT9PcNZ14TcZyUA8+0leu5AqJpXasH8LYe30c+Ai1HMtcWZ2yNXmyfknHdxsTHFWee7T5VSLCf1+vlceIkLZF64AvkrpTruT3AZWuMyWJf6++djoEuERMfBnXWOBMfJ1RGeI6TGmTvN0Lutr1g2en4NIVrgnGbSuKVfIGj246TBj2eYvV7ixODUcBflPY+YuJkCXGsjUoYZwhHiEvZ27It4iQrDlsX+7yNc5ZSWFc9RuotF7st3YecvhzxF7ORPtYRkzJXIiVKW2D8e5bK68jmRbFxEMeHQUGc+CBySWXPV44qRJ5Cl3AzlkGddewSsfurfBBpUtmvxHm2kW7GMsgj1fJJJOBdmCcyLckvDcYDs5EAa7LaPeBvoDOyMNbo+OttMN41YqEeFyMSAR+8Qkce+AFZcBOxidb/n2K3q5T+VddknQjZvMiEpLRVDRwE/gM2I5vUFci26GBkNe2L1Ea/AweQMvyfFNeuRZ7sVNrhG6RJpyt8K25v2Cuwac8oPXiDIilrRcB2ZLV+Y/ASg/1Av8XN6vUAAAAASUVORK5CYII=';

    const QH_COMMUNICATE_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAE0UlEQVRoge2ZXYhVVRTHf8445TQNYiSOZVE26fRhBRZUphM9WGZqVmQFallRgTlqIj0UCBkTPqSpCVNBL4I09kGg+DEiCT0UKDNE0Fijo2lRVJORjs5YMz2stTnr3HvPvft8zNyH/MPmsv93n//6n7PPXmufc+AC/p+4CVgF7ANOAz3Ap8CkcpryQS0wH2gBjgODEe1X4OoyeYzELcBqYD/QT9jw38BnwAuI8bHA5/rfu+UwazEaeAz4ADhJ/tX+BlgH3AdcVOD4eh33C1AxDH5DmAg0AW1AH2Hjp5Vvwv92OazHTs3caQSeBroJGx8A2oFmoBGoSqC7QbVey8ZmcSwlMP8n0AosAa7IQPt+1f0yA62iqAL+QBbvU8DIjPVHAWeA88CYjLVDaECu2O4hjLFTYzxuuBpgBjDCV6RUtjilv6NiWYsHd5EeMNzrwAHgySwDdSEZqjZLUYOJyIz8TDADLyn3cZaBNqnovCxFc/C9xrhN+9dq/xThbFgHXFZIwKcQuamflcyjF3Jvr26gEym6d5txHdqSpHouAc4Cx5J59MIsZAa+MNx65ZoN16nc9KSB9qrADUkFSqCaIA2PVm6mxmw341wBXZs00AoVWJlUwAO7NMZ87bsaM0BQfN3MHUwaxNWTtsQ2S6NJY7xnOFdjntF+NdCLnNw4H9EKZP9k68dR4BxwaTq/kZiEmP7RcG571Gq43cot9BF9QgevM9wW5eakMFsKXRrjZu1fp/0egu2Ru823+gjepYOPGm6uclvS+43EZo2xynCuxkzT/o3a/w2P8lEJ/K4HXK9cDXJrdWdiuTBma8x9httIfqY6ptztPqLbdPAyw7Up15DCbDG4mtVHsBZdpjpkxrUQI4su1sG7DPeKcivS+S2KPRpjrvZtpqpTrgFZI5MLCUxBZqFe+3V6cK+KQXB/7s3WewjLyV+LrsYs9hFwV7vFcIeUs/us48j016QwWwyTNaZdi8uU2+YjcAf5efxN5d4xnLs/Z6cwWwpHNIa7dVyN6UESUVFUIC/M7J7qHu0fNuMeVm5zJpYLw9Ws5YZzNeZOH4GthBfzSOQqDCLFCeQBqw+5akOFhzTmHsO9rdyjPgILyX9Gb1VuqeH2E576rOFq1lkkJYMknGl4PsePBf7NEViCmN5hxq1Wrim15Wi4mvVgUgGXqdzT2njy0/AU8mtM1lipMTYmFXCZaoPh2pWbabgThGcuK1QiC9plxx+SCk1XgU7DNSu33nDvk3LqDcYBi5A64fZ4ttVHHxqNKuTVzAnDNargd4Z7RLlNCWJUIgt3LfK0N0D0N5RB4OUEMQC4HFn4DlXIq5lB5FUNyLN1P/5TPx550vuIIKX7tp1JT6QQPlHRFw13gOipr0Q+F6zB76oXazbRpMYiFX3DcK8S3upPAJ5D3hC6GcyqeT17+GAEsmWxz/G3apAu5AuVj6GTwIfIl6o4JzIjqxOJOrmfYhq6V49tjHFMLyVeeqT9dpe7H/KBSyITYhyzBvm0N6RYQLwZ6UcK7HmPsd8STi5DijHAPzFPJqqdIfiges1wnYDF1zHM5rYjyHZkDnDxcBvPhXvd6dP+QmrS88BV5TBbDNXAV0Sb7wDeQjJWom8bw4laZOfcgbwd3A48C1xZTlMXUC78BySm6L8QOkDNAAAAAElFTkSuQmCC';

    const QH_MP3_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAAC20lEQVRoge3aTYiVVRjA8d80CcNMTFI2RRK0kBQndRFBRooQxKC0ilq6cCOBYruJ1kahO2nXJrSFhATZkIqbCGcTiRjRxyQ5AyLEaBFiM814mxbnRtc7c+99P877MTF/OIv7wXmeP+95z3nec15WB1swjgv4Dp9hV6UZpaQfu3EcU1haoS3i5aoSTMJDeA0fYdbKEu1tspJMu7ARB/EF5iSTaG1/lp/yckaF++ES/pZeor2VTj9ewvv4KWWytREawqs4id8LkChNaBcmsFCwRClC74pzT9RC6J0KRAoTGhUWuVoIPRBB6C08GKGf2vCL6q7OsivUF0HoLgYj9NOJe/gKl/E89rT9HsPhPrKULL3aXXyK/XikJdaQIFjopBBL6LawEL8uFKqduKOLUNU384zwjDOB88JsmYsqhL7H54LEpIKGTR56DbmGUFmPY3OEeF2HXAxWElrEWRzAhsjxShe6gR1FBGpSutCLRQRpoVShBQUsdG10FYpRy7XSWClImcQWqpw1obqzJlR3/ndCVVfb7QxgTFicn8Vw87tfhVOHiTKSaF1Y5zL2sR7H8JvldWGqR/AY5BXah1vSi9RS6LD/qotVL/SGmp4+ZBF6VPJDrVRCSWa5Z7AXL+ApYeZp4BrOyVZdHxHnwa+R5s978KV0wyLpFYp1TjSdJNgQPs4YIInQOsv31rK2072CPYarOQIkERoQ79jllW6BBvF1zgBJh9x0BJmzvYK8FyFIUqGjOeNMYaRbgBH8FUHoTkKhh/Fzxhjf4uleAQ5FkFkSZq+kbBJ2UZP2vYgPhEmrJx9GEjqVQkgzubeFvbxOfc7ihPC+T0/+XRQ/EXb98zImbL6npQ/bsRVPYh5/4Ap+lHIBJbwklPfqXMwgUhg75ZO5KZRFteKMbDIz2FZBvj0ZFsZ/GpkzeLyKZJPSjzdxXWeJeaGG2l1Rjl3pVvpvw3N4ovn5Nn7AN4JULfkH2ycus1r5E4IAAAAASUVORK5CYII=';

    const QH_SMG_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABiElEQVRoge2Zy0rDQBSGv1SLTyMuXfgAQhciWH1U8QlcuA1YwUWptNaoVKzoRrws0tBkcprJJNWJ5nyQxXTO/DN/budkCorSbgLgy/ci6tDxvYC6qAHfbAq/Bb++Cjcyz+yfvwKuBvaAEfFZSB8hsO2g0wce16ADgkgRF0J8cpyWmKsLbAFTi06X1bdybr02AyfAE/AAvBVM/AzMiM/sYYHOS4FGWmcOHK/DwJ3RPxTGXBrtcQmdqITOrc2AlInNS2frLxv3Izqtews1DjXgGzXgm1YYiIz2hHwCGhgx04o618CHRSeHLRP3Wab2ohIgKTdmwFENnfkibpVOJl76HjDpEGfDd0vcxkI0QM6yZXUSVunkcK2FqtYwWgtJ/a14CzUaNeAbNeCbVhgYGm2phgnJ1jBSAjJroUFFnRy2TLxPvJk1Aj6F+HQtFAH3wIGg02O57fJaQ8d5WyXNuGDiM8vYNOc1dGoZ6AE3wpgQ2HEwsAtcVdRxroWaxv+qhfQ/Mt+oAUVR/PINz4UrHTS33KQAAAAASUVORK5CYII=';
    const QH_SDISPLAY_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAASUlEQVRIiWNgGOqAEUr/p5X5TDQyGA5Y0G2kkrnwEKG5D0YtGLVg1ILhYAF6WUT1UpXmPiCl9ET3HVF6B4UPCMULXjNo7oOhDwDJtgUpa+NbrAAAAABJRU5ErkJggg==';

    const QH_LCD_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACR0lEQVRoge2Zv2sUURDHP3e5/FA0IEFDCiWYzlKt0thYh/wDpjRV/AuipVpYCELSCP4HBrQSRAgJQQgE1E6SIlEIiYVCkot3x7kWb07nzO2+fZuNt7t5X3jM3HvDm/nem7czdwseHh6nHovAag7mrQhkZH0egHLYQt5QGCKFwjv+5l9ex1KJiAuUJ1SUXupaFMdDAAW67J5I1lCxm5wozksMNaB63M0iS/8/WBDbBYtdD3AX0xtVgR/AM7VeArZpf4SuA7NAf9zABX/iT5tIH/Ba7VuVMa9symr9E6YhbMjnN7hlSiIiL7ETeSw2TeAe0Is5oVFlU1F+J2XuJnAgczMx44ETInIROBSbJxH79HKUCJj0a6VZXARAkPZTaxIYAH4BTyPswvy2vqAx2k/QirSJjIvcAL4m8KtP4pqL47SJXBa5mdDvN6UPuTh2JWK7S4Mif1rswvq6ptKdapwrkaZlvS7ybEK/g0r/Hisiy4ZhsBHZFXnVYhd2ImNKj7pjR5A2kY8iR2kPKq7fWyIPgQ8OcaVO5JXSHzj6PQNMq30aDnE5N40tIn3ABTXfAPaBNeAtcBuYwqTQC0xdqQHvxV6n1jngBvAQk5J14JFjXIBbZX+u7PXQlf4K8KWDzZyyuRSyTw24kyR+1xPZo/PT5EDpW8B14D4wAYxg6oOuLXVMoziMSakdYAXTWH52jAkwRxwoPY/wv9kzCU8kaygMkcL8ZVoGlrsdRApY6nYA/wVZe8XmX73lClFN4zKdjzJr8x4eHqcJvwEbKPB4sJlJzwAAAABJRU5ErkJggg==';

    const QH_ZKP_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD70lEQVRoge2ZW0tVQRTHf2pl0eUhykJK6iW7ED5ISan5rNkN6iVIIgqikqCX/AAV9FSZSvRQ+BHKeuhCRRLVQ1ZUBNKL3Uk60c0LqKeHvUb3mT0z5+x99jGL84dhzp611n/WzKxZM6OQx9TFHSD5j5Vu5XyBbyDJeOZj0lEAMM0m+AeQMvGFf8uLuJEfyFSDaY9kgzlAiZQFwMI03z1ATcw+jKe0qLhJtBQai7+m9Bs1ayn7D0A/8FnqPdJ+APgibV+ANzH1F7CPdYayaI/UX36zO2Cb5ZzeHPIr4oC++WybMtYVyq+IA+9JTb8K+0lNvzlDtunwBuEOwil7IEL4K8oToDZiXzk7ECcb/+eBGHYgtnd9t8toMjjD7hFX6GV7+QvLmeJv1PSbiz9aZMUZJrTW+H4PAl+Bx2E7dOCxcA762lZHIbJlrWKgDRjFfhbkqowCreJDpv4aBcXAbWkfBM4C64HZUqqAc8BQFs5mwnsDmBF2IIp8M95KJIG3wFqTkaACeCe6Zxx6Cqcj8LYCu4FhzdcAurWBtOAt7aChs+9S9E6HxGalw7kVwIiF9wHBtKt4R4AT2kDuKyX/Zq/FyxwFwCxgicgvAC808kKCieI5cFHaDzoGcggosvCOEZxlxVsEzMMLd+XnJkc/43gtpOsMskopOqrE5qWD96WD1wbF+yqEzTgGxHiOfH8HfpI6gEppU2E2V2x+OXh/abymcNLbFe9vG6nrHBmSusiho2O61JkcaErXFE56u/JhOIQv43gkRNUGmS20qsVGj30/XonOhhC+1IjNQ5uCa0WuSL3LILsnRcdeqW85eG9qun7Ywmyn1FdtpK6B9EpdZpCNSfFjI9CElyY7HLwdeCl6L8FVsYWZ8qHXIEuLZiFtz0C3Gu+NngROZqB/SnQ/YQ5dHe2i32xTcK1IqdSf0nRSB9wFFsl3A7DVob8NqJffi8W2Lk0fyodSp5YFnXizsM+hUwg8I3h/GhOHdexgInz85RnuSd0nep2hRiC4Jcb1Dp0mnzPH8S58LfLdY9B/atFNCpcN9aLjSiJWqDRZYZHPBPp8jqgDbi7BGdeLSbdPOE2oIM2NwbWc86XWL4cKR0jNaM3ioHVDptEtE04TfkhtepekhZrtcoOsBEiIvI1g3I9iDskGgg+0MeC8/E4It45ysrhrdYnxMa19GnBdZOpw24q3Jwbw/ujW6OBt9On2AFukXf3r7hrBa9FRkVkPRBe2M/E2acabqVVMDDCBd9WPC0uBb8LdhfemKQEOM3GB3R6VvAPzZu3He5rGjSrhNvWZycHsxC68QysBfAQuAcuyJXVgOXBZ+kpI3zudFnlMQfwBDXzGA8qBsJsAAAAASUVORK5CYII=';

    const QH_OLED_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA3CAQAAAAWR4QsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflAhsDFQfcEm6BAAADLUlEQVRYw+3ZT2icRRjH8c+72bXSxhJbxN3UbqGiFMSrnnpQFBE8KNSbStUqmFabxmpEK3gu/sMqovVP8aAn20QPFUR6EmMvgqWU0l5EoygpJpukCY3JeNjJZtNk2fzZ9xUkzxyWmfed+X2fZ+ad531noeBRA6aEDMuUHzyiAAW9RjMVny0VvQqJx7ynXTBoRHbWoVNiTFdiwJ2Cjx02LMlIPujQ6wmJAaYEv7olQ++rdqvfBFM5eVQyDX/VKkaRz8VqVsFfYLmGV/Ie96bb0gbIN2i/Ro9XrZf3XF3blawiUHDQa9ZjsHbf0/o9mEYMguCsG+d5f8iEYNoRG0Gb/cYE37uuZbpF5wRhIUDBKyYFM47YEL3vNi4I3tKWNkDBIZOCae9oj953GxMEn9jUwsg3ALjPeJTfEOUPRO8/cn0L5RsC7PSnK96uyfdEoKMtlm8I0GanB2ryB6P3H7Rw8TUBmLM2z7ssmPZhy71fAkDei1H+3RS8bwpQ8EJNvj0V+SYAdxiOG1Fa8jWAxXPBZZesc9TLxlIDiLY4wFkP2ey08bTlGwEEP6cvXbXc6odYA1gDWANYA/hfAAT//FcA1VzQYVdmH+fTfnJxrpoIYCb+pm2JxI92GVR0yo65bJjlWijXv+RVAf7WbyIzgFMu1FeD4IJihhGo2hYXBSHnd9zknswB7rYFg4k39OAP35hcwTCJMz6re3PcbrcblrCgr3W/Il6n7LtVnfZNO1A38PvL6vutMtzsmCEzyxSeu3/Ik7U95PCSew85Zvvs4dQ6O9y+jC+gIPGwu2r1im6fgs3utWkJUzDqjHOrOfLZ7S9BcNJJQXDJnuxO2hJ7VARBv6KifkEwUjcRKct3GREEfTpBZ0QY9kz6CImnovd9SrXWUkSopD0Rib0170vzrnTqixPRlR5Czr74z8KJq+SrUTgRo7A3HYSkJn+8QeaYRRhtFUJOyTZlZWVbdTeRn4+w39bYc5vSypJ9zrPO+6VWJgXBl03yZslxQTBR1/O8fSuJyEanF2ygny9ymHW1FX2xoN9APPJdliVeil7P7t5fxee+mXX6el5mmdTbOAL/AgRpI1hYsOBEAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA3LTE5VDAzOjM5OjIwKzAwOjAwhmcOXAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMS0wOFQyMDoyMzoyMCswMDowMBGue7YAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQANjMzyPq/zAAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA3MzTErRAFAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE1NDY5NzkwMDA0P7o0AAAAEnRFWHRUaHVtYjo6U2l6ZQAxMTc3OUK4GW78AAAAWnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vZGF0YS93d3dyb290L3d3dy5lYXN5aWNvbi5uZXQvY2RuLWltZy5lYXN5aWNvbi5jbi9maWxlcy8xMTkvMTE5MTAzOC5wbmcuZKKRAAAAAElFTkSuQmCC';


    return `

<category name="%{BKY_QH_SDISPLAY_CATEGORY}" id="QH_SDISPLAY_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_SDISPLAY_ICO}">
    <block type="QH_display_samll_refresh_display"></block>
    <block name="横坚屏设置" type="QH_display_samll_HV"></block>
    <block name="屏亮度" type="QH_display_samll_BL">
        <value name="QDP_display_samll_bl_1">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
    <block name="颜色刷屏/背景色" type="QH_display_samll_clr">
        <value name="QDP_display_samll_clr_1">
            <shadow type="math_number">
                <field name="NUM">8</field>
            </shadow>
        </value>
    </block>
    <block name="图片显示" type="QH_display_samll_flash_pic"></block>
    <block name="图片显示" type="QH_display_samll_pic">
        <value name="QDP_display_samll_pic_add">
            <shadow type="math_number">
                <field name="NUM">2097152</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pic_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pic_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pic_W">
            <shadow type="math_number">
                <field name="NUM">128</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pic_H">
            <shadow type="math_number">
                <field name="NUM">160</field>
            </shadow>
        </value>
    </block>
    <block name="画点指令" type="QH_display_samll_PS">
        <value name="QDP_display_samll_ps_X">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_ps_Y">
            <shadow type="math_number">
                <field name="NUM">80</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_ps_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block name="画线框指令" type="QH_display_samll_PL">
        <value name="QDP_display_samll_pl_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pl_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pl_X2">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pl_Y2">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pl_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block name="画圆指令" type="QH_display_samll_CIR">
        <value name="QDP_display_samll_cir_X">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_cir_Y">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_cir_R">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_cir_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block name="显示文本" type="QH_display_samll_DC">
        <value name="QDP_display_samll_dc_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_text">
            <shadow type="text">
                <field name="TEXT">English/变量</field>
            </shadow>
        </value>
    </block>
    <block name="显示中文" type="QH_display_samll_CN">
        <value name="QDP_display_samll_dc_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_text">
            <shadow type="text">
                <field name="TEXT">中文</field>
            </shadow>
        </value>
    </block>
    <block name="显示带底色文本" type="QH_display_samll_SBCDC">
        <value name="QDP_display_samll_sbcdc_colou2">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_sbcdc_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_sbcdc_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_sbcdc_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_sbcdc_text">
            <shadow type="text">
                <field name="TEXT">English/变量</field>
            </shadow>
        </value>
    </block>
    <block type="QH_display_samll_order">
        <value name="text">
            <shadow type="text">
                <field name="TEXT">command</field>
            </shadow>
        </value>
    </block>
    <block name="波特率" type="QH_display_samll_btl"></block>
</category>
`;
}

exports = addToolbox;
