import { OnboardingView } from "../components";
import { useNavigate } from "react-router";
import { useRef } from "react";

export const Onboarding = () => {
  const agreementInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleContinue = () => {
    if (agreementInputRef?.current?.checked) {
      navigate("/confirm");

      return;
    }

    agreementInputRef?.current?.focus();
  };

  const handleChangeAgreement = () => {
    agreementInputRef?.current?.blur();
  };

  return (
    <OnboardingView
      handleContinue={handleContinue}
      handleChangeAgreement={handleChangeAgreement}
      agreementInputRef={agreementInputRef}
    />
  );
};
