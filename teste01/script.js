const story = [
    {
      background: "imgs/bg1.jpg",
      character: "imgs/char1.png",
      text: "Olá! Você finalmente acordou!",
      choices: [
        { text: "Bom dia Cliff!", next: 1 },
        { text: "Meu deus porque você entrou no meu quarto?", next: 2 }
      ]
    },
    {
      background: "imgs/bg1.jpg",
      character: "imgs/char1.png",
      text: "Bom dia!",
      choices: [
        { text: "Porque você está no meu quarto?", next: 2 }
      ]
    },
    {
      background: "imgs/bg1.jpg",
      character: "imgs/char1.png",
      text: "Sua mãe me disse que você estava dormindo e que eu poderia te acordar.",
      choices: [
        { text: "Minha mãe te dá muito poder", next: 3 },
        { text: "Meu deus eu não tenho paz", next: 3 }
      ]
    },
    {
      background: "imgs/bg2.jpg",
      character: "imgs/char2.png",
      text: "Bom dia filho(a)! Quer tomar um café?",
      choices: [
        {text: "Bom dia mãe, você não deveria ter deixado ele entrar!", next: 4},
        {text: "Bom dia mãe! Não estou com muita fome, obrigado!", next: 5}
      ]
    },
    {
        background: "imgs/bg2.jpg",
        character: "imgs/char2.png",
        text: "Desculpa! Gostaria de fazer uma surpresa para você",
        choices: [
            {text: "Certo mãe, só não faça mais isso por favor, vou para a aula agora", next: 5}
        ]
    },
    {
        background: "imgs/bg3.jpg",
        character: "imgs/char1.png",
        text: "Vamos correndo, já estamos atrasados para a aula!",
        choices: [
            {text: "Vamos!", next: 6}
        ]
    },
    {
        background: "imgs/bg4.jpg",
        character: "imgs/char1.png",
        text: "Chegamos bem a tempo, vou te apresentar alguns amigos incomuns que eu tenho aqui!",
        choices: [
            {text: "Certo!", next: 7}
        ]
    },
    {
        background: "imgs/bg5.jpg",
        character: "imgs/char1.png",
        text: "Aquele é o John, ele é meio diferentão, mas acho que vocês vão se dar bem",
        choices: [
            {text: "*Ir até o John*", next: 8}
        ]
    },
    {
        background: "imgs/bg5.jpg",
        character: "imgs/char3.png",
        text: "Iai, quem é você? mais uma para tirar minha paz ou vai me deixar quieto?",
        choices: [
            {text: "Na verdade eu nem queria estar perto de você, mas o Cliff me forçou a vir", next: 9},
            {text: "Não quero causar problemas por aqui, sou novata e o Cliff me pediu pra te ver", next: 10}
        ]
    },
    {
        background: "imgs/bg5.jpg",
        character: "imgs/char3.png",
        text: "Convencida você não é?",
        choices: [
            {text: "Você que começou, seu cu cagado.", next: 10}
        ]
    },
    {
        background: "imgs/bg5.jpg",
        character: "imgs/char3.png",
        text: "Enfim, muito prazer, me chamo John.",
        choices: [
            {text: "O prazer é todo meu, vou tentar não arranjar problemas com você", next: 11}
        ]
    },
    {
        background: "imgs/bg7.jpg",
        character: "imgs/char1.png",
        text: "Tava te esperando aqui, venha vou te apresentar a outra amiga!",
        choices: [
            {text: "*Seguir Cliff*", next: 12}
        ]
    },
    {
        background: "imgs/bg6.jpg",
        character: "imgs/char1.png",
        text: "Aquela é Kali, ela é um amor de pessoa e a menina mais dedicada que eu conheço, vai lá se apresentar a ela",
        choices: [
            {text: "*Ir até Kali*", next: 13}
        ]
    },
    {
        background: "imgs/bg6.jpg",
        character: "imgs/char4.png",
        text: "Oii! Você é novato(a) né? O Cliff me falou de você, seja bem vindo(a), conte comigo para o que precisar!",
        choices: [
            {text: "Muito obrigado(a)! Um prazer te conhecer!!", next: 14}
        ]
    },
    {
        background: "imgs/bg6.jpg",
        character: "",
        text: "Depois de um dia de aulas bem cansativo, o alarme toca.",
        choices: [
            {text: "Sair da sala", next: 15}
        ]
    },
    {
        background: "imgs/bg7.jpg",
        character: "imgs/char1.png",
        text: "Vamos para casa agora, posso te acompanhar?",
        choices: [
            {text: "Vamos sim!", next: 17},
            {text: "Acho que vou sozinho(a) hoje, muito obrigado!", next: 16}
        ]
    },
    {
        background: "imgs/bg4.jpg",
        character: "imgs/char3.png",
        text: "Estou vendo que você está sozinho(a), vamo ali pro cantinho dar uma xamegada nego(a)",
        choices: [
            {text: "Uii painho bora, oxente!", next: 18}
        ]
    },
    {
        background: "imgs/bg4.jpg",
        character: "imgs/char1.png",
        text: "Nós seremos bons amigos pra vida toda né?",
        choices: [
            {text: "Se você quer romance comigo, desista, gosto dos malvadão", next: 18}
        ]
    },
    {
        background: "imgs/bg3.jpg",
        character: "",
        text: "FIM DO COMEÇO BB, ESSES ÚLTIMOS DIÁLOGOS SÃO MEME, QUANDO EU FOR FAZENDO MAIS COISA VOU MUDANDO VIU BB DA BOCA INCHADA, TE AMO FLW",
        choices: [
            {text: "AFSSS AMEII", next: 0},
            {text: "ODIEI ESSE JOGO LIXO ESSAS IMAGEM TUDO VEA FEA", next: 19}
        ]
    },
    {
        background: "imgs/bg3.jpg",
        character: "",
        text: "DA QUAL FOI, VC ME ODEIA? VOU CHAMAR O TRALALERO TRALALA PRA TE PEGAR",
        choices: [
            {text: "DESCULPA CHEFE SUPERIOR, VC MANDA EM MIM, MATEUS É LINDO", next: 0}
        ]
    },
  ];
  
  let currentScene = 0;
  
  function showScene(index) {
    const scene = story[index];
    document.getElementById('background').style.backgroundImage = `url(${scene.background})`;
    document.getElementById('character').style.backgroundImage = scene.character ? `url(${scene.character})` : 'none';
    document.getElementById('text').innerText = scene.text;
  
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = "";
  
    scene.choices.forEach(choice => {
      const button = document.createElement('button');
      button.innerText = choice.text;
      button.onclick = () => {
        showScene(choice.next);
      };
      choicesDiv.appendChild(button);
    });
  }
  
  showScene(currentScene);
  