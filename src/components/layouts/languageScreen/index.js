import React from "react";
import EachLangTable from "./EachLangTable";
import Image from "../../UI/Image";
import Text from "../../UI/Text";
import Button from "../../UI/Button";
import { connect } from "react-redux";
import { compose } from "redux";
import { injectIntl } from "react-intl";
import { selectedLanguage } from "../../../store/language/action";

class LangScreen extends React.Component {
  render() {
    const { languages, intl } = this.props;

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
            text="select language"
          />
          {/* language tabs*/}
          <div className="position-relative align-middle">
            {languages.map((each, i) => {
              return (
                <div className="row m-1" key={i}>
                  {each.pair[0].en.length === 2 ? (
                    <>
                      {/* for left side */}
                      <EachLangTable
                        className="col m-1 p-4 table table-sm table-borderless td bg-white"
                        color={this.props.langColor[each.pair[2].key[0]]}
                        nativeVal={each.pair[1].na[0]}
                        engVal={each.pair[0].en[0]}
                        langCode={each.pair[2].key[0]}
                        selectedLanguage={this.props.selectedLanguage}
                      />
                      {/* for rightside  */}
                      <EachLangTable
                        className="col m-1 p-4 table table-sm table-borderless td bg-white"
                        // color={this.state[`${each.pair[1].na[0]}`]}
                        color={this.props.langColor[each.pair[2].key[1]]}
                        nativeVal={each.pair[1].na[1]}
                        engVal={each.pair[0].en[1]}
                        langCode={each.pair[2].key[1]}
                        selectedLanguage={this.props.selectedLanguage}
                      />
                    </>
                  ) : (
                    <>
                      <EachLangTable
                        className="col w-25 m-1 p-4 table table-md table-borderless td bg-white"
                        color={this.props.langColor[each.pair[2].key[0]]}
                        nativeVal={each.pair[1].na[0]}
                        engVal={each.pair[0].en[0]}
                        langCode={each.pair[2].key[0]}
                        selectedLanguage={this.props.selectedLanguage}
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>
          {/**button */}
          <Button
            className="btn shadow mx-auto d-block p-1 w-50 mb-5"
            backgroundColor="#ff9f00"
            color="white"
            text={intl.formatMessage({ id: "proceed" })}
          />
        </div>
      </div>
    );
  }

  componentWillMount() {}
}
const mapStateToProps = state => {
  return {
    languages: state.language.pairedLangs,
    langColor: state.language.langColor
  };
};
const mapDispatchToProps = dispatch => {
  return {
    selectedLanguage: langCode => dispatch(selectedLanguage(langCode))
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
)(LangScreen);
