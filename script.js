const questions = [
    {
        text: "يا بنتي، لو قالوا لكِ بنروح كريتر نتمشي, إيش أول شيء تسوينه؟",
        options: [
            { text: "أ) أجهز لبسي وتصويري، ما أروح إلا وأنا قمر.", type: "a" },
            { text: "ب) أقول لهم وين بنروح ومع مَن وكم بنجلس؟ أشتي التفاصيل كلها.", type: "b" },
            { text: "ج) أخرج معهم وبعدين أسأل: إحنا فين دحين؟", type: "c" }
        ]
    },
    {
        text: "2. يا بنتي، لو انقطعت الكهرباء والجو نار، كيف تتصرفي؟",
        options: [
            { text: "أ) أدور المروحة وأجلس جنبها كأننا في علاقة رسمية.", type: "a" },
            { text: "ب) أبدأ أسبّ أصحاب الكهرباء وأشرح تاريخ الفشل اليمني.", type: "b" },
            { text: "ج) أطلع فوق السطح وأتفاوض مع الشمس شخصيًا.", type: "c" }
        ]
    },
    {
        text: "3. لو جاكِ ضيوف فجأة وأمك قالت: قومي ساعديني في المطبخ!",
        options: [
            { text: "أ) يماه بس أني عادني حطيت الكريم، بخرب بشرتي!", type: "a" },
            { text: "ب) ليش ما قالت لي من قبل؟ لازم يكون فيه جدول مسؤوليات.", type: "b" },
            { text: "ج) أدخل المطبخ وأفتح كل القدور، وبعدين أسأل إيش نطبخ؟", type: "c" }
        ]
    },
    {
        text: "4. يا بنتي، لو واحد قال لكِ: «إنتِ نكدية»، إيش تردّي؟",
        options: [
            { text: "أ) أنا؟! طيب قول لي إني حلوة أول وبعدين نتفاهم.", type: "a" },
            { text: "ب) أطلب منه يحدد متى وكيف وليش استنتج النتيجة ذي.", type: "b" },
            { text: "ج) أقول له: شكرًا، وأروح أبحث عن معنى نكدية.", type: "c" }
        ]
    },
    {
        text: "5. لو رحتي سوق عدن ومعكِ فلوس تكفي شي واحد بس، إيش تختاري؟",
        options: [
            { text: "أ) شيء كيوت، حتى لو ما أحتاجه، المهم يفرّح قلبي.", type: "a" },
            { text: "ب) أحسب الأسعار وأقارن وأطلع بأفضل صفقة.", type: "b" },
            { text: "ج) أشتي سمبوسة وعصير وأنسى أصلًا ليش جيت السوق.", type: "c" }
        ]
    },
    {
        text: "6. يا بنتي، لو أمك نادتكِ من آخر البيت وقالت: تعالي بس أشتي أكلمك!",
        options: [
            { text: "أ) أقول لها دقيقة أساني شعري وأجي.", type: "a" },
            { text: "ب) أراجع كل مصايبي من يوم دخلت الجامعه.", type: "b" },
            { text: "ج) أجي وهي تقول لي: جيبي الشاحن، وأنا أقول لها حاضر وأجيب ملعقة.", type: "c" }
        ]
    },
    {
        text: "7. لو رحتي عرس عدني وجلستِ جنب حرمة ما تعرفيها، وهي قالت لكِ: «ما شاء الله كبرتي يا بنتي!»",
        options: [
            { text: "أ) أبتسم وأقول لها: عيونك الحلوة، إيش رأيك في فستاني؟", type: "a" },
            { text: "ب) أفكر: هي تعرفني من فين؟ وكم عمري عندها؟", type: "b" },
            { text: "ج) أقول لها: وإنتِ كمان، وأكتشف بعدها إنها أكبر مني بخمسين سنة.", type: "c" }
        ]
    },
    {
        text: "8. لو قالوا لكِ بنروح الساحل، لكن لازم تصحي الساعة خمس الفجر!",
        options: [
            { text: "أ) أجهز شنطة فيها ثلاثة أطقم ونظارة للتصوير وشبشب احتياط.", type: "a" },
            { text: "ب) أطلب خطة الرحلة كاملة مع وقت الرجوع ونسبة الرطوبة.", type: "b" },
            { text: "ج) أوافق وأنام، وأصحى الساعة عشر وأسأل: ليه ماحد صحّاني؟", type: "c" }
        ]
    },
    {
        text: "9. يا بنتي، لو جلستي مع خالاتكِ وبدأوا يسألوكِ: ليش ساكتة؟ مالكِ؟",
        options: [
            { text: "أ) أقول لهم ما فيني شيء، بس محد سألني إذا أنا حلوة اليوم.", type: "a" },
            { text: "ب) أنزعج من السؤال وأفكر ليش كل الناس تراقب تصرفاتي.", type: "b" },
            { text: "ج) أقول لهم: كنت أفكر إذا السمك يعطش في البحر.", type: "c" }
        ]
    },
    {
        text: "10. آخر سؤال يا بنتي، لو أعطوكِ مسؤولية البيت يومًا كاملًا!",
        options: [
            { text: "أ) أرتب المجلس وأحط ورد وأقول محد يدخل إلا بعد ما أصور.", type: "a" },
            { text: "ب) أعمل جدول مهام، وأحدد المسؤوليات والمخالفات.", type: "b" },
            { text: "ج) أطبخ رز، وأنسي أشغل النار، وأعلن أن الغداء تأجل لأسباب تقنية.", type: "c" }
        ]
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];

const landingScreen = document.getElementById('landing-screen');
const introScreen = document.getElementById('intro-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const questionNumber = document.getElementById('question-number');
const optionsContainer = document.getElementById('options-container');
const resultContent = document.getElementById('result-content');
const grannyImg = document.getElementById('granny-img');
const sideGranny = document.getElementById('side-granny');
const prevBtn = document.getElementById('prev-btn');

// الانتقال من صفحة صورة الجدة إلى صفحة المقدمة
function openIntro() {
    landingScreen.classList.remove('active');
    introScreen.classList.add('active');
}

function startQuiz() {
    let citySelect = document.getElementById('user-city');
    let chosenCity = citySelect.value;
    alert(`يا هلا بأهل ${chosenCity}! نادية شجن تقول لك: استعدي لصدمة عمرك بالنتيجة 🤪`);

    introScreen.classList.remove('active');
    quizScreen.classList.add('active');
    sideGranny.style.display = 'block'; // إظهار الجدة الجانبية وقت الأسئلة
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        let q = questions[currentQuestionIndex];
        questionNumber.innerText = `السؤال ${currentQuestionIndex + 1} من ${questions.length}`;
        questionText.innerText = q.text;
        optionsContainer.innerHTML = '';

        q.options.forEach(opt => {
            let btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt.text;
            btn.onclick = () => selectAnswer(opt.type);
            optionsContainer.appendChild(btn);
        });

        // زر السابق يظهر من السؤال الأول بس يكون معطل أو يرجعك للمقدمة لو حابة، وهنا جعلناه يظهر من السؤال الثاني
        if (currentQuestionIndex > 0) {
            prevBtn.style.display = 'block';
        } else {
            prevBtn.style.display = 'none';
        }
    } else {
        showResult();
    }
}

function selectAnswer(type) {
    userAnswers[currentQuestionIndex] = type;
    currentQuestionIndex++;
    loadQuestion();
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        userAnswers.pop();
        loadQuestion();
    }
}

function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    sideGranny.style.display = 'block'; 

    let counts = { a: 0, b: 0, c: 0 };
    userAnswers.forEach(ans => {
        if(counts[ans] !== undefined) counts[ans]++;
    });

    let maxType = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

    let resultHTML = '';
    let tableHTML = '';

    if (maxType === 'a') {
      grannyImg.src = "images/granny_dalaa.jpg";   
        resultHTML = `
            <h2>نتيجة البنت الدلعة:</h2>
            <p>لالا انتِ اركني على جمب جعل منك نسخه واحده وتنقرض، بس بس بكمنه مدرري بكننه يلي تقولوا بطلي ذي الدلع لا تكثرريبيش زري خبر وتساني لك 💅</p>
            <div style="text-align:center; margin-top:15px;">
                <img src="images/girl_dalaa.jpg" alt="البنت الدلعة" class="sticker-img" style="max-width:140px; border-radius:10px;">
            </div>
        `;
        tableHTML = `
            <tr><td>نسبة حب المرايا</td><td>100%</td></tr>
            <tr><td>الاهتمام بالتصوير</td><td>99%</td></tr>
            <tr><td>التحمل وقت الشغل</td><td>1%</td></tr>
        `;
    } else if (maxType === 'b') {
        grannyImg.src = "images/granny_meshfaala.jpg";
        resultHTML = `
            <h2>نتيجة البنت المشعفلة:</h2>
            <p>اووه يا سااتر ذا تفكيرك وعادك شبه قد نكشتي بشعري وشعرك ماليه ارحمينا ويعيشي حياتك وشوفيني شوفيني واني شبه وكوني مثلي 🤯</p>
            <div style="text-align:center; margin-top:15px;">
                <img src="images/girl_meshfa'la.jpg" alt="البنت المشعفلة" class="sticker-img" style="max-width:140px; border-radius:10px;">
            </div>
        `;
        tableHTML = `
            <tr><td>نسبة التفكير الزائد</td><td>98%</td></tr>
            <tr><td>التدقيق في التفاصيل</td><td>100%</td></tr>
            <tr><td>الروقان والهدوء</td><td>0%</td></tr>
        `;
    } else {
        grannyImg.src = "images/granny_tired.jpg"; 
        resultHTML = `
            <h2>نتيجة البنت المدُوخة:</h2>
            <p>اووه يا بنتي مالع دوختي فيبي سافيه ولاداريه وين الله حطك صحصي لك ماليه عادك شبه او اواو اييش عاد بتعملي لما تعجزي</p>
            <div style="text-align:center; margin-top:15px;">
                <img src="images/girl_tired.jpg" alt="البنت التعبة" class="sticker-img" style="max-width:140px; border-radius:10px;">
            </div>
        `;
        tableHTML = `
            <tr><td>الضيعة والشرود الذهني</td><td>100%</td></tr>
            <tr><td>تذكر وين حطت الجوال</td><td>5%</td></tr>
            <tr><td>النوم المفاجئ</td><td>95%</td></tr>
        `;
    }

    // دمج الجدول ومربع الملاحظات في النتيجة النهائية
    resultHTML += `
        <table class="result-table">
            <tr>
                <th>الصفة التحليلية</th>
                <th>النسبة حسب كلام الجدة</th>
            </tr>
            ${tableHTML}
        </table>
        
        <div class="notes-box">
            <label>سجلي ملاحظة أو اعتذار للي بيقرأ نتيجتك:</label>
            <textarea placeholder="اكتبي اعتذارك هنا لأن شخصيتك صدمت الجدة..."></textarea>
        </div>
    `;

    resultContent.innerHTML = resultHTML;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    resultScreen.classList.remove('active');
    landingScreen.classList.add('active'); // الرجوع لصفحة الجدة الأساسية
    grannyImg.src = "images/granny_normal.png.jpg"; 
} 