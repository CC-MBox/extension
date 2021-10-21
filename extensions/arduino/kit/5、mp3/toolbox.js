/**
 * Note！ These codes are from third parties. Not currently reviewed by the community.
 * Please do not refer to the format specifications of these codes.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {


    const QH_MP3_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAAC20lEQVRoge3aTYiVVRjA8d80CcNMTFI2RRK0kBQndRFBRooQxKC0ilq6cCOBYruJ1kahO2nXJrSFhATZkIqbCGcTiRjRxyQ5AyLEaBFiM814mxbnRtc7c+99P877MTF/OIv7wXmeP+95z3nec15WB1swjgv4Dp9hV6UZpaQfu3EcU1haoS3i5aoSTMJDeA0fYdbKEu1tspJMu7ARB/EF5iSTaG1/lp/yckaF++ES/pZeor2VTj9ewvv4KWWytREawqs4id8LkChNaBcmsFCwRClC74pzT9RC6J0KRAoTGhUWuVoIPRBB6C08GKGf2vCL6q7OsivUF0HoLgYj9NOJe/gKl/E89rT9HsPhPrKULL3aXXyK/XikJdaQIFjopBBL6LawEL8uFKqduKOLUNU384zwjDOB88JsmYsqhL7H54LEpIKGTR56DbmGUFmPY3OEeF2HXAxWElrEWRzAhsjxShe6gR1FBGpSutCLRQRpoVShBQUsdG10FYpRy7XSWClImcQWqpw1obqzJlR3/ndCVVfb7QxgTFicn8Vw87tfhVOHiTKSaF1Y5zL2sR7H8JvldWGqR/AY5BXah1vSi9RS6LD/qotVL/SGmp4+ZBF6VPJDrVRCSWa5Z7AXL+ApYeZp4BrOyVZdHxHnwa+R5s978KV0wyLpFYp1TjSdJNgQPs4YIInQOsv31rK2072CPYarOQIkERoQ79jllW6BBvF1zgBJh9x0BJmzvYK8FyFIUqGjOeNMYaRbgBH8FUHoTkKhh/Fzxhjf4uleAQ5FkFkSZq+kbBJ2UZP2vYgPhEmrJx9GEjqVQkgzubeFvbxOfc7ihPC+T0/+XRQ/EXb98zImbL6npQ/bsRVPYh5/4Ap+lHIBJbwklPfqXMwgUhg75ZO5KZRFteKMbDIz2FZBvj0ZFsZ/GpkzeLyKZJPSjzdxXWeJeaGG2l1Rjl3pVvpvw3N4ovn5Nn7AN4JULfkH2ycus1r5E4IAAAAASUVORK5CYII=';

    return `
<category name="%{BKY_QH_MP3_CATEGORY}" id="QH_MP3_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_MP3_ICO}">
    <block type="QH_MP3_bofangx">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">20</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="QH_MP3_yingliang">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">20</field>
            </shadow>
        </value>
    </block>
    <block type="QH_MP3_loopplay">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">20</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="QH_MP3_startpause"></block>
    <block type="QH_MP3_previous_next"></block>
    <block type="QH_MP3_play">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">20</field>
            </shadow>
        </value>
    </block>
    <block type="QH_ESPuno_define_mp3_directory">
        <value name="data">
        <shadow type="text">
            <field name="TEXT">音频1.mp3 音频2.mp3 音频3.mp3</field>
        </shadow>
        </value>
    </block>
    <block type="QH_ESPuno_mp3_designated_play">
        <value name="num">
        <shadow type="math_number">
          <field name="NUM">20</field>
        </shadow>
        </value>
        <value name="NAME">
        <shadow type="text">
          <field name="TEXT">歌曲1</field>
        </shadow>
        </value>
    </block>
    <label text="%{BKY_QH_BUZZER_LABEL}"></label>
    <block type="QH_buzzer">
            <value name="DURATION">
                <shadow type="math_number">
                    <field name="NUM">500</field>
                </shadow>
            </value>
        </block>
</category>
`;
}

exports = addToolbox;
