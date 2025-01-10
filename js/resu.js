// Gráfico Receita Operacional
const ctxReceita = document.getElementById('chartReceitaOperacional').getContext('2d');
new Chart(ctxReceita, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: 'Receita Operacional',
            data: [3000, 3200, 4000, 4500, 4700, 5000, 5200, 5500, 5800, 6100, 6300, 9400],
            borderColor: '#FF6F61',
            backgroundColor: 'rgba(255, 111, 97, 0.2)', // Transparência para modernizar
            borderWidth: 2,
            tension: 0.3, // Curvas suaves no gráfico
            fill: true,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Remover legenda
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: "#eaeaea"
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Gráfico % MC Geral
const ctxMC = document.getElementById('chartMCGeral').getContext('2d');
new Chart(ctxMC, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: '% MC Geral',
            data: [15, 16, 18, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5, 23],
            borderColor: '#FF6F61',
            backgroundColor: 'rgba(255, 111, 97, 0.2)',
            borderWidth: 2,
            tension: 0.3,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: "#eaeaea"
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Gráfico Receita Operacional por Produto (Horizontal)
const ctxProduto = document.getElementById('chartReceitaProduto').getContext('2d');
new Chart(ctxProduto, {
    type: 'bar',
    data: {
        labels: ['Calabresa', 'Portuguesa', '4 Queijos', 'Abobrinha', 'Chocolate', 'Banana c/ Canela'],
        datasets: [{
            label: 'Receita Operacional',
            data: [12000, 17000, 10000, 8000, 5000, 15000],
            backgroundColor: '#FF6F61',
            borderRadius: 5,
            barThickness: 25
        }]
    },
    options: {
        indexAxis: 'y', // Gráfico horizontal
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: "#eaeaea"
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});

// Gráfico Receita Operacional por Vendas (Horizontal)
const ctxVendas = document.getElementById('chartReceitaVendas').getContext('2d');
new Chart(ctxVendas, {
    type: 'bar',
    data: {
        labels: ['Produtos', 'Distribuidora', 'iFood'],
        datasets: [{
            label: 'Receita Operacional',
            data: [23000, 15000, 10000],
            backgroundColor: '#FF6F61',
            borderRadius: 5,
            barThickness: 25
        }]
    },
    options: {
        indexAxis: 'y', // Gráfico horizontal
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: "#eaeaea"
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');

    toggleSidebar.addEventListener('click', function() {
        sidebar.classList.toggle('minimized');
        toggleSidebar.querySelector('i').classList.toggle('bi-chevron-left');
        toggleSidebar.querySelector('i').classList.toggle('bi-chevron-right');
    });
});