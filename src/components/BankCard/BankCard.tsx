import React, { FC } from "react";
import "./BankCard.scss";
import MC from "../../assets/images/mc_symbol.svg";
import VISA from "../../assets/images/visa.png";
import AE from "../../assets/images/AE.webp";
import CardChip from "../../assets/images/Card Chip.svg";
import validator from "validator";
import SoundEffects from "../SoundEffects/SoundEffects";

type ComponentWithChildProps = React.PropsWithChildren<{ bankNumber: string; flipped?:boolean, name?: string; expiry: string; cvc: string; styles?: Record<string, string | number> }>;

const BankCard: FC<ComponentWithChildProps> = ({ bankNumber, expiry, cvc, styles, name, flipped }) => {
  const getBankNumber = (bankNumber: string): string => {
    const temp = bankNumber.padEnd(16, "0").substring(0, 16);

    let stringParts = [temp.substring(0, 4), temp.substring(4, 8), temp.substring(8, 12), temp.substring(12, 16)];

    return stringParts.reduce((acc, part) => acc + " " + part);
  };

  const getExpiry = (expiry: string): string => {
    expiry = expiry.replaceAll("/", "");

    const temp = expiry.padEnd(4, "0").substring(0, 4);

    let stringParts = [temp.substring(0, 2), temp.substring(2)];

    return stringParts.reduce((acc, part) => acc + "/" + part);
  };

  const getCardLogo = (bankNumber: string) => {
    switch (bankNumber.substring(0, 1)) {
      case "3":
        return AE;
      case "4":
        return VISA;
      case "5":
        return MC;
      default:
        return "";
    }
  };

  return (
    <div className={`kripsonui-bankcard`} >
      <div className={`kripsonui-content ${flipped ? 'flipped': ''}  ${bankNumber && !validator.isNumeric(bankNumber) ? "invalid-card" : ""}`} style={{ ...styles }}>
        <SoundEffects/>
        <div className="kripsonui-front face" style={{ backgroundColor: styles?.backgroundColor ? styles.backgroundColor as 'BackgroundColor | undefined' : '' }}>
          <img className="kripsonui-card-chip" src={CardChip} alt="card chip" />
          <div className="kripsonui-banknumber">
            <h2>{getBankNumber(bankNumber)}  {bankNumber && !validator.isNumeric(bankNumber) ? <span className="kripsonui-error-text">Not a valid number</span> : ""}</h2>
           
          </div>

          <div className="kripsonui-detail-section">
            <div className="kripsonui-expiry-section">
              EXP:<h6> {getExpiry(expiry)}</h6>
            </div>
            {name ? (
              <div>
                <h6> {name}</h6>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="kripsonui-card-logo-section">
            <img src={getCardLogo(bankNumber)} />
          </div>
        </div>
        <div className="kripsonui-back face"  style={{ backgroundColor: styles?.backgroundColor ? styles.backgroundColor as 'BackgroundColor | undefined' : '' }}>
            <div className="kripsonui-back-stripe">

            </div>

            <div className="kripsonui-back-cvc-section">
                {cvc}
            </div>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
