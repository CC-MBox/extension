/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {


    const QH_Actuator_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFU0lEQVRoge2Za2wVRRTHfy2tpIJVKkLBgqIJRkLk8UF5SPiAUQxBjEbU0piYosZgtMVPViRBQ7Txg0pEIVFQ01Yp0SbQGDVRg4pKBA0aHr54+SIabVGxYmnXD+cMM7t3997de/dKTfpPNrn3zJkz578zc86ZWRjEIAYULgOeAg4Az5xmXwAoS6h/AbAauBUoVdnomH2HAUuBWUAf8AGwEehJ6EPBuBk4BnjAX8ATwFSgJEbfauBz7es+nwAVxXA2Co1Avw7eAdQk6FsN7NO+XwFLgDrgoMoeSdXTLKhHSPQDq4iegSHAlcBjwIfAD8Bu4DDi8B5glKN/ucr3ApOAcUXw/RSmAyd0wOUh7ZXATcBLwC9kLh33WRzoWxWi8y1wddokSoAdOsALgbbJQBuWpHkOAWuBa4ExyIvo0Lbf8L/1VU6/g8CP+vtvYFqaRG5Qw9/j35ALdTAPiT4fA03AlAg7pcAW1X8TeUHLkKXaB9ynsjLgedVrT5PIdjW61JFNxM7CBmB8TFujsUtvK5ZEfUDvItX5Jm+vAxivg3Xjn41NOtD6PGwuxi6lfuCOEJ15WCKVeYyRgZlqsM2RlSDrvA8Ymadd8yK+wCZUgxpksxuyJ5G9WTChucA5zv9x2MgSB8ORDe9iJHBU7TQ48hrga5V3I1n/D/3fmdTxXJishndm0akCXgS+RGbuJFAb0Fmkdo4DF+InsQtJoCDl0M8qTzWKzVCj27LozMcuDRPZerSvizZta8VPoiqgt07bbi/Qdx/MRnw9i04p8J7qrUEqZA/4CX8OuQ5//gkjAfCOti8q0HcfzJLYnEPPhOh+YA6SOzzgM+A8oBw7I9lIPODoLEOq51SwhPAsH4bHVfcjYAS2aOxBIp9xcA/hJJrwz5gH7AcuLoiB4k41+HQM3bOx0el6pFh8DQkAJrSG1V8AK7BVwzrgXuBTle0oiIFiuRprjqnfqPrbHdlQJC9s1bZbAn1WYonWOfKzkH3mEb+aiMRDamhlTP1K7EFseqCtQeUHkBPj+cCT2Jm4LcTe29o+J6njQTSrofsT9NmgfR4NyCuQ02FwH/QRHmonAH8iAeTcRF6HYK0OdleCPguwJUkQFcjp0AQCj8wiEiRh7iezZMoLZdj8UJdD18UIbHIcEqEzCRvBgnCz/j4KrLvKkNxh6qAk53WwZUbUJp2IPZS5haRLwkNuXPJGkMQVedjo1v5jI9pLkbLdA55F6q+r8FfCHhL+80IaJIYiG7SL7NdG85BkGXXeP4a/Eo+NNEgYNBKe+IK4FGhB9sI2ZGObwrMhS79IpEkiX8wGfsdWyC7KkeWXFQOBxCwsiXYyr3VbkOWa1bdWTi+JmdhqYBOZJMxR4jg5oudRBgaJV8gkcSY2Ma7IZawae9T8LzEDS+Jlwr8SrNf2vUg0LDouwX/HmwuzsbmmjfAKoBZbIUwt1ME4GAP06rMFuJHot1eKHA3MhV8r4STmYsPwPSn7G4kzkE36DzaZ/YqcKu9G7oRrkWr4CPayrplwEtOwJ8o1jvxB5MoolUu8bBiF3OnuJjpbm6p4YYSN+dgw3IEleg1C/gTRZU+qGA68r44cRj49dAKvAg8joTSsbClBMnmv9m1BZhok+3epvKmIvp+CS+IQMTKxYizwBnbGVmPJuleq7cT75FcQhgHv6oBHkBv2XChHlqIJwV3IB1eDKdg9tRPJKUVFcDlNiNnvLewsdCJneIN6JJN7yAsKuz5KFS6JuDNhsBH56rsgIF+GJfgcMnNFRZBEKhdpSEDYRbLjdUEwN4vfkR6JRIi6EEiKXmRW6oj//WQQg/g/4F8UiMGaSs+gAAAAAABJRU5ErkJggg==';

    return `
<category name="%{BKY_QH_ACTUATOR_CATEGORY}" id="QH_ACTUATOR_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_Actuator_ICO}">


<!--    <block type="QH_inout_highlow" id="QH_inout_highlow"></block>-->



    <label text="%{BKY_QH_RELAY_LABEL}"></label>
    <block type="QH_relay">
        <value name="STATE">
            <shadow type="QH_inout_highlow">
            </shadow>
        </value>
    </block>
    <block type="QH_read_relay"></block>




    <!--<block type="QH_buzzer_music"></block>-->

    <label text="%{BKY_CC_MOTOR_LABEL}"></label>
    <block type="CC_motor">
        <value name="SPEED">
            <shadow type="math_number">
               <field name="NUM">255</field>
            </shadow>
        </value>
    </block>

<!--   <label text="%{BKY_QH_SERVO_LABEL}"></label>-->
<!--    <block type="QH_servomotor360">-->
<!--        <value name="speed">-->
<!--            <shadow type="math_number">-->
<!--                <field name="NUM">0</field>-->
<!--            </shadow>-->
<!--        </value>-->
<!--    </block>-->


<!--    <block type="QH_servomotor180">-->
<!--        <value name="speed">-->
<!--            <shadow type="math_number">-->
<!--                <field name="NUM">150</field>-->
<!--            </shadow>-->
<!--        </value>-->
<!--        <value name="num1">-->
<!--            <shadow type="math_number">-->
<!--                <field name="NUM">0</field>-->
<!--            </shadow>-->
<!--        </value>-->
<!--    </block>-->
<!--    <block type="QH_servomotorread"></block>-->
<!--    <block type="QH_servomotorPWM_set180">-->
<!--        <value name="param1">-->
<!--            <shadow type="math_number">-->
<!--                <field name="NUM">100</field>-->
<!--            </shadow>-->
<!--        </value>-->
<!--        <value name="param2">-->
<!--            <shadow type="math_number">-->
<!--                <field name="NUM">460</field>-->
<!--            </shadow>-->
<!--        </value>-->
<!--    </block>-->
<!--    <block type="QH_servomotorPWM">-->
<!--        <value name="num1">-->
<!--            <shadow type="math_number">-->
<!--                <field name="NUM">0</field>-->
<!--            </shadow>-->
<!--        </value>-->
<!--        <value name="num2">-->
<!--            <shadow type="math_number">-->
<!--                <field name="NUM">0</field>-->
<!--            </shadow>-->
<!--        </value>-->
<!--    </block>-->
<!--    <block type="QH_servomotorPWM_set360">-->
<!--        <value name="S_param">-->
<!--            <shadow type="math_number">-->
<!--                <field name="NUM">270</field>-->
<!--            </shadow>-->
<!--        </value>-->
<!--        <value name="CW_L_param">-->
<!--            <shadow type="math_number">-->
<!--                <field name="NUM">230</field>-->
<!--            </shadow>-->
<!--        </value>-->
<!--        <value name="CW_H_param">-->
<!--            <shadow type="math_number">-->
<!--                <field name="NUM">80</field>-->
<!--            </shadow>-->
<!--        </value>-->
<!--        <value name="CCW_L_param">-->
<!--            <shadow type="math_number">-->
<!--                <field name="NUM">300</field>-->
<!--            </shadow>-->
<!--        </value>-->
<!--        <value name="CCW_H_param">-->
<!--            <shadow type="math_number">-->
<!--                <field name="NUM">450</field>-->
<!--            </shadow>-->
<!--        </value>-->
<!--    </block>-->
<!--    <block type="QH_servomotorPWM360">-->
<!--        <value name="num2">-->
<!--            <shadow type="math_number">-->
<!--                <field name="NUM">0</field>-->
<!--            </shadow>-->
<!--        </value>-->
<!--        <value name="num1">-->
<!--            <shadow type="math_number">-->
<!--                <field name="NUM">5</field>-->
<!--            </shadow>-->
<!--        </value>-->
<!--    </block>-->
</category>
`;
}

exports = addToolbox;
