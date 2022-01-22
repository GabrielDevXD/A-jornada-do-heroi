console.clear();
var prompt = require('prompt-sync')();

console.log(
    'Era uma manhã de verão, e uma pata havia botado cinco ovos. Ela estava aguardando impaciente a chegada de seus filhotinhos.  Assim, quando o primeiro ovo se partiu, mamãe pata ficou muito contente. Logo os outros patinhos também começaram a nascer. Mas havia um ovo que demorou para se quebrar, deixando-a ansiosa.  Passado algum tempo, o último filhote finalmente conseguiu sair do ovo. Mas quando mamãe pata o viu, ela não ficou muito satisfeita e exclamou:  - Esse patinho é muito diferente, muito feio. Não pode ser meu filho!  - Ah! Alguém te pregou uma peça. Disse a galinha que morava ali por perto.  O tempo foi passando e o patinho feio foi ficando cada vez mais feio, cada vez mais diferente de seus irmãos e cada vez mais isolado. Os outros animais zombavam dele, o que o deixava entristecido e angustiado.  Então, quando o inverno chegou, o patinho resolveu partir. Ele andou bastante e encontrou uma casa, assim, resolveu entrar pensando que lá talvez alguém gostasse dele. Foi o que aconteceu. Havia um homem que o acolheu, assim, o patinho passou esse tempo muito bem.  Mas, esse homem tinha também um gato, que um dia levou o pato para fora de casa, deixando-o sozinho e triste novamente.  O patinho saiu caminhando e depois de muito andar encontrou um lugar muito bonito, com um lago. O pato viu um cantinho aconchegante e foi até lá descansar. Nesse momento, algumas crianças que estavam por perto, perceberam a chegada de uma nova figura. Elas ficaram encantadas e disseram:  - Vejam, temos um visitante!  - Nossa! E como é lindo!  O patinho não entendeu de quem as crianças estavam falando, mas quando ele se aproximou do lago e viu seu reflexo na água, avistou um maravilhoso cisne. Então, ao olhar para o lado, ele se deu conta de que outros cisnes também moravam ali.  Dessa forma, o patinho descobriu que na verdade, ele era um cisne. Desde então, ele passou a viver entre seus iguais e não ficou mais angustiado.',
);

var perguntasacertadas = 0;

function pergunta1() {
    while (true) {
        let questao = prompt('1: O patinho foi recusado por ser diferente? -> ');
        let pergunta = questao.toUpperCase();
        if (pergunta == 'SIM' || pergunta == 'NÃO' || pergunta == 'NAO') {
            if (pergunta == 'SIM') {
                perguntasacertadas += 1;
                break;
            } else {
                break;
            }
        } else {
            console.log('Digite "SIM" ou "NÃO" como resposta.');
        }
    }
}
function pergunta2() {
    while (true) {
        let questao = prompt('2: o patinho foi acolhido apos encontrar o homem? -> ');
        let pergunta = questao.toUpperCase();
        if (pergunta == 'SIM' || pergunta == 'NÃO' || pergunta == 'NAO') {
            if (pergunta == 'SIM') {
                perguntasacertadas += 1;
                break;
            } else {
                break;
            }
        } else {
            console.log('Digite "SIM" ou "NÃO" como resposta.');
        }
    }
}
function pergunta3() {
    while (true) {
        let questao = prompt(
            '3: O gato teve uma importancia na historia?? -> ',
        );
        let pergunta = questao.toUpperCase();
        if (pergunta == 'SIM' || pergunta == 'NÃO' || pergunta == 'NAO') {
            if (pergunta == 'SIM') {
                perguntasacertadas += 1;
                break;
            } else {
                break;
            }
        } else {
            console.log('Digite "SIM" ou "NÃO" como resposta.');
        }
    }
}
function pergunta4() {
    while (true) {
        let questao = prompt('4: o patinho era realmente um pato? -> ');
        let pergunta = questao.toUpperCase();
        if (pergunta == 'NÃO' || pergunta == 'NÃO' || pergunta == 'NAO') {
            if (pergunta == 'SIM') {
                perguntasacertadas += 1;
                break;
            } else {
                break;
            }
        } else {
            console.log('Digite "SIM" ou "NÃO" como resposta.');
        }
    }
}
function pergunta5() {
    while (true) {
        let questao = prompt('5: Ele era um cisne? -> ');
        let pergunta = questao.toUpperCase();
        if (pergunta == 'SIM' || pergunta == 'NÃO' || pergunta == 'NAO') {
            if (pergunta == 'SIM') {
                perguntasacertadas += 1;
                break;
            } else {
                break;
            }
        } else {
            console.log('Digite "SIM" ou "NÃO" como resposta.');
        }
    }
}

pergunta1();
pergunta2();
pergunta3();
pergunta4();
pergunta5();

if (perguntasacertadas == 0) {
    console.log('0 respostas Sim: Você falha miseravelmente.');
} else if (perguntasacertadas == 1 || perguntasacertadas == 2) {
    console.log(
        '1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.',
    );
} else if (perguntasacertadas == 3) {
    console.log(
        '3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.    ',
    );
} else if (perguntasacertadas == 4) {
    console.log(
        '4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.',
    );
} else {
    console.log(
        '5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.',
    );
}
