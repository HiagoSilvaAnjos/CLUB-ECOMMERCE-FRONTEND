import { useNavigate, useSearchParams } from "react-router-dom";

import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent,
} from "./Payment-confirmation.styles";

import Header from "../../Components/Header/Header.component";
import CustomButton from "../../Components/CustomButtton/CustomButton.component";

import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome,
} from "react-icons/ai";

import Colors from "../../Theme/Theme.colors";

const PaymentConfirmation = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const status = searchParams.get("success");
  const isCanceled = searchParams.get("canceled") == "true";

  return (
    <>
      <Header />
      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          {status === "true" && (
            <>
              <AiOutlineCheckCircle size={120} color={Colors.success} />
              <p>Sua compra foi finalizada com succeso!</p>
            </>
          )}

          {(status === "false" || isCanceled) && (
            <>
              <AiOutlineCloseCircle size={120} color={Colors.error} />
              <p>
                Ocorreu um erro ao finalizar sua compra!, por favor, tente
                novamente.
              </p>
            </>
          )}

          <CustomButton
            startIcon={<AiOutlineHome />}
            onClick={() => navigate("/")}
          >
            Ir para a página inicial
          </CustomButton>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  );
};

export default PaymentConfirmation;
