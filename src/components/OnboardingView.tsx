import { Content, Block, Row } from "../ui-kit";
import { locale } from "../locale";
import { styled } from "@stitches/react";

type Props = {
  handleContinue: () => void;
  handleChangeAgreement: () => void;
  agreementInputRef: React.Ref<HTMLInputElement>;
};

const AgreementCheckbox = styled("input", {
  "&:focus": {
    outline: "5px solid red",
  },
});

export const OnboardingView = ({
  handleContinue,
  agreementInputRef,
  handleChangeAgreement,
}: Props) => {
  const { title, desc, agreemntLabel, defaultBtn } = locale.onboarding;

  return (
    <Content>
      <Block>
        <Row>
          <h1 autoFocus>{title}</h1>
        </Row>
        <Row>
          <p>{desc}</p>
        </Row>
      </Block>

      <Block>
        <Row>
          <label htmlFor="agreement">{agreemntLabel}</label>
          <AgreementCheckbox
            ref={agreementInputRef}
            id="agreement"
            type="checkbox"
            onChange={handleChangeAgreement}
          />
        </Row>
        <Row>
          <button onClick={handleContinue}>{defaultBtn}</button>
        </Row>
      </Block>
    </Content>
  );
};
