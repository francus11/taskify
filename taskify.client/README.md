# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh






# Srednia
mean_medv <- mean(BostonSmedv)
# odchylenie standardowe
sd_medv <- sd(Boston$medv)
# wariancja
var_medv <- var (BostonSmedv)
# Liczba obserwacji
n_medv <- length(BostonSmedv)
* Predziaty ufnosci dla sredniej
alpha <- 0.05
_critical ‹- qt(1 - alpha/2, df = n_medv - 1)
se_mean <- sd_medv / sqrt (n_medv)
CI_mean <- mean_medv + c(-1, 1) * t_critical * se_mean
# Przedziaty ufnosci dla odchylenia standardowego i wariancji
chi2_critical_low <- qchisq(alpha/2, df = n_medv - 1)
chi2_critical_high ‹- qchisq(1 - alpha/2, df = n_medv - 1)
CI_sd <- sqrt((n_medv - 1) * var_medv / c(chi2_critical_high, chi2_critical_low))
CI_var ‹- (n_medv - 1) * var_medv / C(chi2_critical_high, chi2_critical_low)
# wyniki
list(
mean = mean_medv,
CI_mean = CI_mean,
5d = sd_medv,
CI_sd = CI_sd,
var = var_medv,
CI_var = CI_var
)