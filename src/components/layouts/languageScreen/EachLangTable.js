import React from "react";
import Text from "../../UI/Text";
import Image from "../../UI/Image";

const EachLangTable = props => {
  return (
    <>
      <table
        onClick={() => props.selectedLanguage(props.langCode)}
        className={props.className}
      >
        <tbody>
          <tr>
            <td
              className="text-left h6"
              style={{
                color: props.color
              }}
            >
              <Text text={props.nativeVal} />
            </td>
            <td rowSpan="2" className="text-right">
              <Image source="/place1.svg" />
            </td>
          </tr>
          <tr>
            <td
              className="text-left"
              style={{
                fontSize: "10px"
              }}
            >
              <Text text={props.engVal} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default EachLangTable;
