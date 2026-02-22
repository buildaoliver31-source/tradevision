const imageInput = document.getElementById('imageInput');
const previewBox = document.getElementById('previewBox');
const analyzeBtn = document.getElementById('analyzeBtn');
const loadingStatus = document.getElementById('loadingStatus');
const analysisResponse = document.getElementById('analysisResponse');

if (imageInput && previewBox && analyzeBtn && loadingStatus && analysisResponse) {
  imageInput.addEventListener('change', () => {
    const file = imageInput.files?.[0];
    if (!file) {
      previewBox.innerHTML = '<p>Nenhuma imagem selecionada.</p>';
      analyzeBtn.disabled = true;
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      previewBox.innerHTML = `<img src="${event.target?.result}" alt="Preview do gráfico enviado" />`;
      analyzeBtn.disabled = false;
    };
    reader.readAsDataURL(file);
  });

  analyzeBtn.addEventListener('click', async () => {
    const file = imageInput.files?.[0];
    if (!file) {
      return;
    }

    loadingStatus.hidden = false;
    analyzeBtn.disabled = true;
    analysisResponse.innerHTML = '<h3>Resposta da IA</h3><p>Processando imagem...</p>';

    try {
      const result = await analisarImagem(file);
      analysisResponse.innerHTML = `<h3>Resposta da IA</h3><p>${result}</p>`;
    } catch (error) {
      analysisResponse.innerHTML = '<h3>Resposta da IA</h3><p>Falha ao analisar a imagem. Tente novamente.</p>';
    } finally {
      loadingStatus.hidden = true;
      analyzeBtn.disabled = false;
    }
  });
}

async function analisarImagem(imageFile) {
  // TODO: Integrar com a API de IA aqui.
  // Exemplo futuro:
  // 1) enviar imageFile em multipart/form-data para backend
  // 2) receber resposta da IA
  // 3) retornar texto final

  await new Promise((resolve) => setTimeout(resolve, 1800));

  return `Imagem \"${imageFile.name}\" analisada com sucesso. Tendência predominante de alta no curto prazo, com zona de suporte próxima da média móvel e resistência na máxima recente.`;
}
