# Mortgage Calculator – Component Tree + State/Props Flow

# Component tree (parent/child relationships)

MortgageCalculatorPage (state owner)
└─ MortgageCalculatorForm
.├─ LoanBalanceField
.├─ InterestRateField
.├─ LoanTermSelect
.├─ CalculateButton
.└─ ResultDisplay

# State (lives in MortgageCalculatorPage)

- loanBalance: string
- interestRate: string
- loanTermYears: 15 | 30
- result: string | null

# Props each child needs

# MortgageCalculatorForm props

- loanBalance, interestRate, loanTermYears
- result
- handlers:
  - onLoanBalanceChange(value: string)
  - onInterestRateChange(value: string)
  - onLoanTermChange(value: 15 | 30)
  - onCalculate()

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
