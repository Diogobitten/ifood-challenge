// Gráfico de Resumo Financeiro
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('resumoFinanceiroChart').getContext('2d');

    function createGradient(color1, color2) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        return gradient;
    }    

    const resumoFinanceiroChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            datasets: [{
                label: 'Saldo',
                data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                fill: true,
                backgroundColor: createGradient('rgba(234, 29, 44, 1)', 'rgba(234, 29, 44, 0.4)'),
                borderColor: '#EA1D2C',
                tension: 0.4,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#EA1D2C',
                pointHoverRadius: 8,
                pointHoverBackgroundColor: '#EA1D2C',
                pointHoverBorderColor: '#EA1D2C',
                pointRadius: 5,
                pointHitRadius: 30,
                pointHoverBorderWidth: 3,
            },{
                label: 'Faturamento',
                data: [20, 70, 110, 4, 220, 120, 70, 40, 50, 200],
                fill: true,
                backgroundColor: createGradient('rgba(224, 153, 143, 1)', 'rgba(224, 153, 143, 0.4)'),
                borderColor: '#e0998f',
                tension: 0.4,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#e0998f',
                pointHoverRadius: 8,
                pointHoverBackgroundColor: '#e0998f',
                pointHoverBorderColor: '#e0998f',
                pointRadius: 5,
                pointHitRadius: 30,
                pointHoverBorderWidth: 3,
            },{
                label: 'Metas',
                data: [0, 20, 150, 90, 20, 30, 20, 80, 100, 70],
                fill: true,
                backgroundColor: createGradient('rgba(255, 138, 174, 1)', 'rgba(255, 138, 174, 0.4)'),
                borderColor: '#ff8aae',
                tension: 0.4,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#ff8aae',
                pointHoverRadius: 8,
                pointHoverBackgroundColor: '#ff8aae',
                pointHoverBorderColor: '#ff8aae',
                pointRadius: 5,
                pointHitRadius: 30,
                pointHoverBorderWidth: 3,
            },
        ] 
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold',
                            family: 'Open Sans, sans-serif'
                        },
                        color: '#666'
                    }
                },
                tooltip: {
                    backgroundColor: '#fff',
                    titleColor: '#666',
                    bodyColor: '#333',
                    borderColor: '#3a7bd5',
                    borderWidth: 1,
                    xPadding: 10,
                    yPadding: 10,
                    cornerRadius: 4
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: 'Open Sans, sans-serif'
                        },
                        color: '#666'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: 'Open Sans, sans-serif'
                        },
                        color: '#666'
                    }
                }
            }
        }
    });
});

// Gráfico de Metas Alcançadas (Progresso)
const ctx2 = document.getElementById('goalsChart').getContext('2d');
const goalsChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Alcançado', 'Restante'],
        datasets: [{
            label: 'Metas',
            data: [80, 10],
            backgroundColor: ['#e0998f', '#e0e0e0'],
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        cutout: '70%',
        rotation: -50,
        circumference:100,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.raw + '%';
                    }
                }
            }
        },
        aspectRatio: 3, // Mantém a proporção de aspecto 1:1
        layout: {
            padding: 5 // Remove qualquer padding
            
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

// Função para mostrar e esconder o chat
function toggleChat() {
    var chatBox = document.getElementById("chat-box");
    if (chatBox.style.display === "none" || chatBox.style.display === "") {
        chatBox.style.display = "flex";
    } else {
        chatBox.style.display = "none";
    }
}

// Vincula a função ao clicar no ícone
document.querySelector('.assistant-icon').addEventListener('click', toggleChat);

// Função para enviar mensagem
function sendMessage() {
    var userInput = document.getElementById("user-input");
    var chatMessages = document.getElementById("chat-messages");
    

    if (userInput.value.trim() === "") return;

    // Adiciona a mensagem do usuário ao chat
    var userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = userInput.value;
    chatMessages.appendChild(userMessage);
    

    // Limpa o campo de entrada
    userInput.value = "";

    // Resposta automática (exemplo)
    setTimeout(function () {
        var botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");
        botMessage.textContent = "Vou ficar te devendo essa 😅";
        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Rola para a última mensagem
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    // Exibe a janela do chatbot assim que a página é carregada    
    setTimeout(function() {
        document.getElementById("chatbot-window").style.display = "flex";

        const notificationSound = document.getElementById("notification-sound");
        notificationSound.volume = 0.2; // Ajuste o volume (0.0 a 1.0)
        notificationSound.play();
    }, 2000); // 2000 milissegundos = 2 segundos

    const assistantIcon = document.querySelector(".assistant-icon");
    assistantIcon.addEventListener("mouseover", function() {
        const chatbotWindow = document.getElementById("chatbot-window");
        chatbotWindow.style.display = "none";
    });
});

// Função para alternar a visibilidade do chatbot e adicionar mensagem automática
function toggleChatbot() {
    const chatbotWindow = document.getElementById("chatbot-window");
    const chatMessages = document.getElementById("chat-messages");

    if (chatbotWindow.style.display === "none" || chatbotWindow.style.display === "") {
        // Mostrar o chatbot
        chatbotWindow.style.display = "flex";

        // Adiciona a mensagem automática apenas uma vez ao abrir o chat
        if (!chatMessages.dataset.initialized) {
            const initialMessage = document.createElement("div");
            initialMessage.classList.add("chat-message");
            initialMessage.textContent = "E ai! Como te ajudo?";
            chatMessages.appendChild(initialMessage);
            


            // Marca como inicializado para evitar mensagens duplicadas
            chatMessages.dataset.initialized = true;
        }
    } else {
        // Fechar o chatbot
        chatbotWindow.style.display = "none";
    }
}

// Evento para o ícone do chatbot
document.querySelector(".assistant-icon").addEventListener("click", toggleChatbot);