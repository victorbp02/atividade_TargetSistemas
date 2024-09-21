// Dados de faturamento mensal por estado
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Cálculo do total
const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

// Cálculo do percentual de representação
const percentuais = {};
for (const estado in faturamento) {
    percentuais[estado] = (faturamento[estado] / totalFaturamento) * 100;
}

// Exibição dos resultados
console.log("Percentual de representação por estado:");
for (const estado in percentuais) {
    console.log(`O percentual de ${estado} é: ${percentuais[estado].toFixed(2)}%`);
}
