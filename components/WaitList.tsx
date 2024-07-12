import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const INIT = "INIT";
const SUBMITTING = "SUBMITTING";
const ERROR = "ERROR";
const SUCCESS = "SUCCESS";
const formStates = [INIT, SUBMITTING, ERROR, SUCCESS] as const;
const formStyles = {
  id: "clyd8vnic01dny92q8arngorr",
  name: "Default",
  formStyle: "buttonBelow",
  placeholderText: "Your email",
  formFont: "Inter",
  formFontColor: "#000000",
  formFontSizePx: 14,
  buttonText: "Join Waitlist",
  buttonFont: "Inter",
  buttonFontColor: "#ffffff",
  buttonColor: "#0D9488",
  buttonFontSizePx: 14,
  successMessage: "Thanks! We'll be in touch!",
  successFont: "Inter",
  successFontColor: "#000000",
  successFontSizePx: 14,
  userGroup: "",
};
const domain = "app.loops.so";

export default function WaitList() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<(typeof formStates)[number]>(INIT);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const resetForm = () => {
    setEmail("");
    setFormState(INIT);
    setErrorMessage("");
    setShowError(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formState !== INIT) return;
    if (!isValidEmail(email)) {
      displayError("Please enter a valid email");
      return;
    }
    if (hasRecentSubmission()) return;
    setFormState(SUBMITTING);

    const formBody = `userGroup=${encodeURIComponent(
      formStyles.userGroup
    )}&email=${encodeURIComponent(email)}&mailingLists=`;

    fetch(`https://${domain}/api/newsletter-form/${formStyles.id}`, {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res: any) => [res.ok, res.json(), res])
      .then(([ok, dataPromise, res]) => {
        if (ok) {
          resetForm();
          setFormState(SUCCESS);
        } else {
          dataPromise.then((data: any) => {
            displayError(data.message || res.statusText);
          });
        }
      })
      .catch((error) => {
        if (error.message === "Failed to fetch") {
          displayError("Too many signups, please try again in a little while");
        } else if (error.message) {
          displayError(error.message);
        }
      });
  };

  const displayError = (message: string) => {
    setFormState(ERROR);
    setErrorMessage(message);
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
      setErrorMessage("");
      setFormState(INIT);
    }, 3000);
  };

  const hasRecentSubmission = () => {
    const time = new Date();
    const timestamp = time.valueOf();
    const previousTimestamp = localStorage.getItem("loops-form-timestamp");

    if (
      previousTimestamp &&
      Number(previousTimestamp) + 60 * 1000 > timestamp
    ) {
      displayError("Too many signups, please try again in a little while");
      return true;
    }

    localStorage.setItem("loops-form-timestamp", timestamp.toString());
    return false;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (showError) {
      setShowError(false);
      setErrorMessage("");
      setFormState(INIT);
    }
    setEmail(e.target.value);
  };

  return (
    <div>
      {formState === SUCCESS ? (
        <div>
          <p>{formStyles.successMessage}</p>
        </div>
      ) : (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-2 rounded-md bg-background p-2 md:flex-row md:gap-x-2"
          >
            <Input
              type="text"
              name="email"
              placeholder={
                showError ? errorMessage : formStyles.placeholderText
              }
              value={showError ? "" : email}
              onChange={handleInputChange}
              required={true}
              className={`w-72 ${
                showError ? "border-red-500 placeholder:text-red-500" : ""
              }`}
              style={{
                color: showError ? "rgb(185, 28, 28)" : "",
              }}
            />
            <SignUpFormButton />
          </form>
        </>
      )}
    </div>
  );

  function SignUpFormButton({ props }: any) {
    return (
      <Button type="submit" variant="primary">
        {formState === SUBMITTING ? "Please wait..." : formStyles.buttonText}
      </Button>
    );
  }
}

function isValidEmail(email: any) {
  return /.+@.+\..+/.test(email);
}
