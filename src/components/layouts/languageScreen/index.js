import React from "react";
import EachLangTable from "./EachLangTable";
import Image from "../../UI/Image";
import Text from "../../UI/Text";
const lang = [
  { pair: [{ en: ["Hindi", "Odia"] }, { na: ["हिंदी", "ଓଡ଼ିଆ"] }] },
  { pair: [{ en: ["kannada", "Tamil"] }, { na: ["ಕನ್ನಡ", "தமிழ்"] }] },
  { pair: [{ en: ["Bengali", "Gujrati"] }, { na: ["বিংগালী", "ગુજરાતી"] }] },
  { pair: [{ en: ["Telegu", "Urdu"] }, { na: ["తెలుగు", "اردو"] }] }
];
class LangScreen extends React.Component {
  render() {
    return (
      <div className="App">
        <div
          className="container-fluid position-absolute"
          style={{
            height: "100%",
            backgroundColor: "#f9f9f9"
          }}
        >
          {/* logo and instruction*/}
          <Image
            className="w-25 mx-auto d-block"
            source="/JH-Logo.png"
            backgroundColor="#f9f9f9"
          />
          <Text
            className="d-flex borderless justify-content-center"
            color="#ff6f00"
            text="select a language"
          />
          {/* language tabs*/}
          <div className="position-relative align-middle">
            {lang.map((each, i) => {
              return (
                <div className="row m-1" key={i}>
                  {/* for left side */}
                  <EachLangTable
                    color={this.state[`${each.pair[1].na[0]}`]}
                    nativeVal={each.pair[1].na[0]}
                    engVal={each.pair[0].en[0]}
                  />
                  {/* for rightside  */}
                  <EachLangTable
                    color={this.state[`${each.pair[1].na[0]}`]}
                    nativeVal={each.pair[1].na[1]}
                    engVal={each.pair[0].en[1]}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  componentWillMount() {
    lang.map(each =>
      each.pair
        .filter(langCode => langCode.na)
        .map(eachLang =>
          eachLang.na.map(eachLa => this.setState({ [eachLa]: "black" }))
        )
    );
  }
}

export default LangScreen;
