import React from "react";
import { Link } from "react-router-dom";

class ChooseUnit extends React.Component {
  constructor() {
    super();
    this.state = {
      numbers: []
    };
  }

  clicker = number => {
    let numbers = this.state.numbers;
    numbers.push(number);
    this.setState({
      numbers
    });
  };

  clearNumber = () => {
    let numbers = this.state.numbers;
    numbers.pop();
    this.setState({
      numbers
    });
  };

  render() {
    return (
      <div className="choose-unit container">
        <div className="row">
          <div className="col-10 offset-1">
            <h5>لطفا شماره دستگاه تصفیه ای که استفاده می کنید، مشخص کنید</h5>
          </div>
        </div>
        <div className="number-pad">
          <div className="buttons">
            <div id="fstnum">
              <h4>{this.state.numbers[0]}</h4>
            </div>
            <div id="secnum">
              <h4>{this.state.numbers[1]}</h4>
            </div>
            <div id="trdnum">
              <h4>{this.state.numbers[2]}</h4>
            </div>
            <div className="row">
              <div
                id="one"
                className="num-button"
                onClick={() => this.clicker(1)}
              >
                1
              </div>
              <div
                id="two"
                className="num-button"
                onClick={() => this.clicker(2)}
              >
                2
              </div>
              <div
                id="three"
                className="num-button"
                onClick={() => this.clicker(3)}
              >
                3
              </div>
            </div>
            <div className="row">
              <div
                id="four"
                className="num-button"
                onClick={() => this.clicker(4)}
              >
                4
              </div>
              <div
                id="five"
                className="num-button"
                onClick={() => this.clicker(5)}
              >
                5
              </div>
              <div
                id="six"
                className="num-button"
                onClick={() => this.clicker(6)}
              >
                6
              </div>
            </div>
            <div className="row">
              <div
                id="seven"
                className="num-button"
                onClick={() => this.clicker(7)}
              >
                7
              </div>
              <div
                id="eight"
                className="num-button"
                onClick={() => this.clicker(8)}
              >
                8
              </div>
              <div
                id="nine"
                className="num-button"
                onClick={() => this.clicker(9)}
              >
                9
              </div>
            </div>
            <div className="row">
              <div
                id="zero"
                className="num-button"
                onClick={() => this.clicker(0)}
              >
                0
              </div>
              <div
                id="clean"
                className="num-button"
                onClick={() => this.clearNumber()}
              >
                C
              </div>
            </div>
          </div>
        </div>

        <div>
          <Link to="/direction" className="button">
            ادامه
          </Link>
        </div>
        <div className="sound">
          <i class="fa fa-volume-up blink-me" />
        </div>
      </div>
    );
  }
}

export default ChooseUnit;
