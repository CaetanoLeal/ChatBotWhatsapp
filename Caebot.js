// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('alright, the whatsapp is connected!');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que cria o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(hello|Hello|hi|Hi)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + ' Hi i am Caetano Leal. how can i help you? please, select an option bellow:\n\n1 - Schedule a meeting\n2 - Plans and services\n3 - About me\n4 - Results'); //Primeira mensagem de texto
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //Delay de 5 segundos
    
        
    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Ok, now you go to speak with me! no with my robot');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Please let me know the date and time when you would like to have this meeting.');


    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'My IT services is\nsites and landing pages\nDashboards and bussines inteligency\nChatbots for telegram or whatsapp\nAPI integration or development\nSoftware development\nOthers');
    
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Tell me what you are interested in, and I will offer it for a good price.');
    
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 
            'Hello, I am Caetano Breno Lara Leal, a 22-year-old Full Stack Developer based in Ananindeua, Pará, Brazil.\n' +
            'With extensive experience in system development, I specialize in creating robust, efficient, and scalable applications. My expertise includes database management (PostgreSQL, SQL), web systems, APIs, and modern technologies such as HTML5, CSS, JavaScript, PHP, .NET, and AWS.\n' +
            'I hold a degree in the field, where I stood out academically, even teaching as a professor and participating in research with some of Brazil\'s top universities. With a combination of academic knowledge and practical experience, I transitioned to the private sector, where I successfully contributed to various projects, including:\n' +
            '- Developing scheduling systems, chatbots, and dashboards for RK Marketing Agency.\n' +
            '- Improving system functionality, integrating APIs, and modernizing interfaces at Leal Sistemas.\n' +
            '- Teaching Python, Industry 4.0, and IoT concepts at ETEMB, guiding students in the creation of impactful projects using data analysis and cloud computing.\n' +
            '- And the numerous websites I built with WordPress for clients outside the main projects I was involved in.\n\n' +
            'I am fluent in advanced English and have a basic knowledge of Japanese, although my native language is Portuguese. In my life, continuous learning is reflected in certifications I have completed, including cybersecurity, research on ethical dilemmas in software development, and backend development with Python AI, among others.\n\n' +
            'I am motivated to contribute my skills to innovative projects and deliver exceptional results!'
          );
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'If you like my story, why don’t you create your project with me?');

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Private Sector Background:\n' +
            '- I stood out for modernizing the interfaces of the ERP system at Leal Sistemas, speeding up their projects by 60%.\n' +
            '- I created an online scheduling system, bringing convenience, efficiency, and automation to client companies.\n' +
            '- I developed websites for political campaigns in Ananindeua (a city in Brazil), where we accumulated over 3,000 votes thanks to the websites, which had a conversion rate of 60.2% in votes!\n' +
            '- I created chatbots for telegram and whatsapp like this one!'
        );


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Academic Background:\n' +
            '- As a teacher, I taught my students how to use technology in Industry 4.0, far beyond just programming. In class, we created real OITs and robots, which earned me a 100% approval rating from students in all the classes I taught.\n' +
            '- I gathered most of the participants from the northern region of Brazil for research on ethical dilemmas in the field of technology and was responsible for 90% of the people from the northern region who participated in the interview.'
        );


    }
});