# Mortgage Calculator – Component Tree + State/Props Flow

# Component tree (parent/child relationships)

MortgageCalculatorPage (state owner)
└─ MortgageCalculatorForm (presentational)
├─ LoanBalanceField
├─ InterestRateField
├─ LoanTermSelect
├─ CalculateButton
└─ ResultDisplay

# State (lives in MortgageCalculatorPage)

- loanBalance: string
- interestRate: string
- loanTermYears: 15 | 30
- errors: { loanBalance?: string; interestRate?: string }
- result: string | null (empty until calculated)

# Props each child needs

# MortgageCalculatorForm props

- loanBalance, interestRate, loanTermYears
- errors
- result
- handlers:
  - onLoanBalanceChange(value: string)
  - onInterestRateChange(value: string)
  - onLoanTermChange(value: 15 | 30)
  - onCalculate()

# LoanBalanceField props

- value: string
- error?: string
- onChange(value: string)

# InterestRateField props

- value: string
- error?: string
- onChange(value: string)

# LoanTermSelect props

- value: 15 | 30
- options: [15, 30]
- onChange(value: 15 | 30)

# CalculateButton props

- onClick()

# ResultDisplay props

- result: string | null

# Event flow (upward)

- LoanBalanceField [onChange] → MortgageCalculatorPage updates [loanBalance]
- InterestRateField [onChange] → MortgageCalculatorPage updates [interestRate]
- LoanTermSelect [onChange] → MortgageCalculatorPage updates [loanTermYears]
- CalculateButton [onClick] (or form [onSubmit]) → MortgageCalculatorPage:
  1. validates inputs → sets [errors]
  2. if valid → computes → sets [result]

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
