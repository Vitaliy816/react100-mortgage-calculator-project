import "./App.css";
import { useState } from "react";

function MortgageCalculator() {
  const [form, setForm] = useState({
    loanBalance: "",
    interestRate: "",
    loanTerm: 15,
  });
  const [result, setResult] = useState(null);

  function calculateMortgage() {
    let monthlyPayment = 0;
    const principal = Number(form.loanBalance || 0);
    const monthlyInterestRate = Number(form.interestRate || 0) / 100 / 12;
    const numberOfPayments = Number(form.loanTerm) * 12;

    if (!principal || !numberOfPayments) {
      setResult(null);
      return;
    }

    if (monthlyInterestRate === 0) {
      monthlyPayment = principal / numberOfPayments;
    } else {
      monthlyPayment =
        (principal *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    }
    setResult(monthlyPayment);
  }

  function handleSubmit(e) {
    e.preventDefault();
    calculateMortgage();
  }

  return (
    <div className="mortgageCalculator">
      <h1 className="title">Mortgage Calculator</h1>

      <form onSubmit={handleSubmit}>
        <div className="formHolder">
          <LoanBalanceField
            loanBalance={form.loanBalance}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, loanBalance: value }))
            }
          />
          <InterestRateField
            interestRate={form.interestRate}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, interestRate: value }))
            }
          />
          <LoanTermSelect
            loanTerm={form.loanTerm}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, loanTerm: value }))
            }
          />
        </div>

        <div className="buttonHolder">
          <button
            className="calculateButton"
            type="submit"
            data-testid="submit"
          >
            Calculate
          </button>
        </div>
      </form>

      <ResultDisplay result={result} />
    </div>
  );
}

function LoanBalanceField({ loanBalance, onChange }) {
  return (
    <div className="formField">
      <label className="formFieldLabel">Loan Balance</label>
      <input
        className="formFieldInput"
        type="number"
        value={loanBalance}
        data-testid="balance"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function InterestRateField({ interestRate, onChange }) {
  return (
    <div className="formField">
      <label className="formFieldLabel">Interest Rate (%)</label>
      <input
        className="formFieldInput"
        type="number"
        value={interestRate}
        data-testid="rate"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function LoanTermSelect({ loanTerm, onChange }) {
  return (
    <div className="formField">
      <label className="formFieldLabel">Loan Term (years)</label>
      <select
        className="formFieldSelect"
        value={loanTerm}
        data-testid="term"
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value="15">15</option>
        <option value="30">30</option>
      </select>
    </div>
  );
}

function ResultDisplay({ result }) {
  return (
    <div className="resultHolder">
      <p className="resultAmount" data-testid="output">
        {result !== null ? `$${result.toFixed(2)} is your payment` : ""}
      </p>
    </div>
  );
}

export default MortgageCalculator;
