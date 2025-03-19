document.getElementById('generateBtn').addEventListener('click', async () => {
  const tema = prompt("Digite o tema do trabalho:");
  if (tema) {
    // Simulação de uma chamada à API (substitua pelo código real da OpenAI)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tema }),
    });
    const data = await response.json();
    document.getElementById('output').innerText = JSON.stringify(data, null, 2);
  }
});
